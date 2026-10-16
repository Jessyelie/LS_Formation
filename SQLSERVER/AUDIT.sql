/* 1-aller dans la base de donnee "Master" Obligatoirement
    
   2-CONFIGURATION DE VOTRE PROJET (A MODIFIER)
 */
SET NOCOUNT ON;
DECLARE @MaBaseDeDonnees NVARCHAR(128) = N'LocationVehiculesDB'; -- Mettez le nom exact de votre base
DECLARE @CheminDossier   NVARCHAR(260) = N'D:\AuditSQL\';   -- Mettez le chemin (le dossier doit exister)
DECLARE @DateDebut       DATE = CONVERT(DATE, '29/09/2026', 103); -- Debut de la recherche (jj/mm/aaaa)
DECLARE @DateFin         DATE = CONVERT(DATE, '29/09/2026', 103); -- Fin de la recherche (jj/mm/aaaa)

DECLARE @Sql NVARCHAR(MAX);

IF DB_NAME() <> N'master'
BEGIN
    RAISERROR(N'Executez ce script dans la base master.', 16, 1);
    RETURN;
END

IF NOT EXISTS (SELECT * FROM sys.server_audits WHERE name = 'MonAuditServeur')
BEGIN
    SET @Sql = N'CREATE SERVER AUDIT [MonAuditServeur] TO FILE ( FILEPATH = ''' + @CheminDossier + N''' );';
    EXEC sp_executesql @Sql;
END

IF EXISTS (SELECT * FROM sys.server_audits WHERE name = 'MonAuditServeur' AND is_state_enabled = 0)
BEGIN
    ALTER SERVER AUDIT [MonAuditServeur] WITH (STATE = ON);
END

SET @Sql = N'
USE [' + @MaBaseDeDonnees + N'];
IF NOT EXISTS (SELECT * FROM sys.database_audit_specifications WHERE name = ''MaSpecificationAuditDB'')
BEGIN
    CREATE DATABASE AUDIT SPECIFICATION [MaSpecificationAuditDB]
    FOR SERVER AUDIT [MonAuditServeur]
    ADD (SELECT, INSERT, UPDATE, DELETE ON DATABASE::[' + @MaBaseDeDonnees + N'] BY [public]);
END';
EXEC sp_executesql @Sql;

SET @Sql = N'
USE [' + @MaBaseDeDonnees + N'];
IF EXISTS (SELECT * FROM sys.database_audit_specifications WHERE name = ''MaSpecificationAuditDB'' AND is_state_enabled = 0)
BEGIN
    ALTER DATABASE AUDIT SPECIFICATION [MaSpecificationAuditDB] WITH (STATE = ON);
END';
EXEC sp_executesql @Sql;

PRINT 'Configuration effectuee avec succes !';

/*
   3- Afficher les evenements dans la grille, entre @DateDebut et @DateFin.
*/
SELECT
    server_principal_name AS [Nom complet],
    database_name AS [Base concernée],
    CONVERT(NVARCHAR(10), event_time, 103) AS [Date],
    CONVERT(NVARCHAR(8), event_time, 108) AS [Heure],
    REPLACE(REPLACE(ISNULL(statement, N''), CHAR(13), N' '), CHAR(10), N' ') AS [Commande tapée],
    CASE WHEN succeeded = 1 THEN N'Réussi' ELSE N'Erreur' END AS [État],
    REPLACE(REPLACE(ISNULL(additional_information, N''), CHAR(13), N' '), CHAR(10), N' ') AS [Alerte de retour]
FROM sys.fn_get_audit_file(@CheminDossier + N'*.sqlaudit', DEFAULT, DEFAULT)
WHERE database_name = @MaBaseDeDonnees
  AND event_time >= @DateDebut
  AND event_time < DATEADD(DAY, 1, CONVERT(DATETIME2, @DateFin))
ORDER BY event_time;
