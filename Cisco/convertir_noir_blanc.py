from PIL import Image
import os

# Chemin de l'image
image_path = "C:/Users/jessy/Images/Pellicule/2daf25d9cc3802c78aba504b72c3df6f.jpg"  # Remplacez par le chemin de votre image

try:
    # Ouvrir l'image
    img = Image.open(image_path)
    
    # Convertir en noir et blanc (mode L pour luminance)
    img_grayscale = img.convert('L')
    
    # Sauvegarder l'image en noir et blanc
    output_path = "image_noir_blanc.png"
    img_grayscale.save(output_path)
    
    print(f"Image convertie avec succès !")
    print(f"Image d'origine : {image_path}")
    print(f"Image en noir et blanc : {output_path}")
    
    # Afficher les dimensions
    print(f"Dimensions : {img.size}")
    
except FileNotFoundError:
    print(f"Erreur : Le fichier '{image_path}' n'existe pas.")
    print("Veuillez vous assurer que l'image est dans le même répertoire ou fournir le chemin complet.")
except Exception as e:
    print(f"Une erreur est survenue : {e}")
