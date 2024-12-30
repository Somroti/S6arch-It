const videoElement = document.querySelector('video'); // Élément vidéo pour afficher le flux
const videoSelect = document.querySelector('#videoSource'); // Élément <select> pour choisir la caméra
let currentStream; // Stocke le flux en cours

// Fonction pour énumérer les appareils vidéo disponibles
async function getDevices() {
  try {
    const devices = await navigator.mediaDevices.enumerateDevices(); // Récupère tous les appareils
    const videoDevices = devices.filter(device => device.kind === 'videoinput'); // Filtre uniquement les caméras
    videoSelect.innerHTML = ''; // Réinitialise la liste des caméras

    videoDevices.forEach((device, index) => {
      const option = document.createElement('option');
      option.value = device.deviceId; // Utilise l'ID du périphérique
      option.textContent = device.label || `Caméra ${index + 1}`; // Définit le label
      videoSelect.appendChild(option); // Ajoute l'option au <select>
    });

    if (videoDevices.length > 0) {
      startStream(videoDevices[0].deviceId); // Démarre le flux avec la première caméra trouvée
    }
  } catch (error) {
    console.error('Erreur lors de l\'énumération des appareils :', error);
  }
}

// Fonction pour démarrer un flux vidéo avec une caméra spécifique
async function startStream(deviceId) {
  if (currentStream) {
    currentStream.getTracks().forEach(track => track.stop()); // Arrête les flux existants
  }

  const constraints = {
    video: { deviceId: { exact: deviceId } } // Utilise une caméra spécifique
  };

  try {
    currentStream = await navigator.mediaDevices.getUserMedia(constraints); // Récupère le flux vidéo
    videoElement.srcObject = currentStream; // Connecte le flux à l'élément vidéo
  } catch (error) {
    console.error('Erreur lors du démarrage du flux vidéo :', error);
  }
}

// Gestionnaire d'événements pour changer de caméra
videoSelect.addEventListener('change', () => {
  const selectedDeviceId = videoSelect.value; // Récupère l'ID sélectionné
  startStream(selectedDeviceId); // Change la caméra
});

// Initialisation
getDevices(); // Charge les caméras disponibles au chargement
