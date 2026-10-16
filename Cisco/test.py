#faire un hello world
import calendar
from datetime import datetime

# Obtenir l'année actuelle
annee_actuelle = datetime.now().year

# Afficher le calendrier de l'année actuelle
print(f"Calendrier pour l'année {annee_actuelle}")
print("=" * 40)

# Afficher chaque mois un par un pour une meilleure lisibilité
for mois in range(1, 13):
    print(f"\n--- {calendar.month_name[mois]} ---")
    print(calendar.month(annee_actuelle, mois))

