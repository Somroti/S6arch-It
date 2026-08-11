# 06/08/26
Premier devlogs! Pour l'instant, un menu et un serveur qui marche plus ou moins, une idée globale de l'UI, un logo, le fond, les rangs mis-à-jour et des boutons.
Changements importants :
- Le rang Rainbow devient Color Master
- Le rang Glitch devient Amethyst
- Ajout de Color Star et de Color Coin (monnaies utilisables pour plus tard)

À faire :
- Probablement un design de Color Box (Lootboxes pour le jeu)
- Un bouton pour le Color Pass (Battle Pass) à 0% car ça sera dynamique

# 07/08/26
Nouveaux boutons créés :
- Rejouer
- Quitter

Nouvelles monnaies :
- Color Star
- Color Coin

Nouvelles idées :
- Faire un système d'équipe temporaire avec un code (qu'on pourra join avec QR Code) et un chat
- Un tutoriel
- Un freeplay (tah Rocket League)
- Un systeme de code créateur qui gagne 10% des achats en boutique
- Jeu sur navigateur pour iOS parce que je peux pas compiler

Changements :
- Ajout de plus de flou sur la brillance des boutons
- Ajouts des boutons Classements et Amis sur le menu (ils font rien pour l'instant)

# 08/08/26
Ajouts des boutons principaux sur le menu principal à l'exception du Color Pass
Fix des bords du boutons qui avaient le reflet alors que le bouton à des bords arrondis
Redesign du bouton jouer pour être dans le même style que les autres

**PASSAGE SUR PYGAME-CE ET PYTHON 3.14**
Ça aidera beaucoup pour la suite du projet

À faire : probablement un redesign du bouton jouer parce qu'il fait un peu tache et se fond dans le décor

# 09/08/26
- Ajout d'une classe très complexe pour le texte
- Ajout de la police Quantico dans les fichiers
- Le bouton club a enfin du texte dessus (qui pourra changer selon le club)
- Fixs côté clients et serveurs pour la connexion (le login ce fait sans mot de passe pour l'instant mais ça se fera)
- Ajout d'un boolean "main_menu" qui pourra servir à savoir quand dessiner quoi pour créer des menus

À faire : Ajouter un vrai Login (au moins avec le mot de passe en clair), peu être ajout du profil du joueur sur le menu si j'ai le temps (parce que faire du login peut-être compliqué)

# 10/08/26
- Fixs divers sur le login (toujours pas de vrais logins)
- Les classes sont maintenant dans des fichiers séparés pour alléger script.py
- Renom des fichiers en .user en .json (vu que c'est du JSON)
- Ajout de la plaque sur le menu principal
- Re-dimension du logo pour prendre moins de place sur le menu principal
- Affichage des pseudos sur le menu principal avec taille dynamique
- Ajout du titre sur la carte (passé de dictionnaire en liste)
- Rééquilibrage des rangs (Bronze 0–50 → Argent 50–200 → Or 200–500 → Platine 500–900 → Diamant 900–1400 → Ruby 1400–2100 → Amethyst 2100–3100 → Color Master 3100+)
  
À faire : probablement affichage des monnaies, du rang sur le menu principal (partiellement fait) et peut-être photo de profil

# 11/08/26
- Connexion par token (beaucoup plus sécurisé)
- Changement de requete "get_user" en "login" (get_user sera pour l'API)
- Design et ajout du bouton "Color Pass" (pas dynamique car trop complexe)
- Ajout de set_image à la classe Button et adaption complète de la classe (heureusement que je comprends ce que je fais)
- Ajout du bouton pour changer le nombre de joueurs et sa logique
- Ajout du bouton pour pouvoir jouer en classé ou non et sa logique
- Ajout d'une bande sur laquelle on peut voir son nombre de Color Coin et Color Shard
- Ajout des boutons pour inviter des amis dans la partie
- Remplacement du bouton Match Amical par Boutique
- Ajouts des boutons Statistiques, Match Amical et News en petit
  
Beaucoup de nouvelles idées (je dors pas la nuit) :
- Mises à jours (donc faudra stocker le n° de version et emmener les users sur le site)
- Events (un par vacances)
- Parametre Nocopyright pour les créateurs de contenu
- Mettre de moins en moins de temps pour chaque photo quand on monte en rang
- Système de signalement
- Tips pendant les chargements
