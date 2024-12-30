// COUSCOUS
// Fonction pour énumérer les appareils vidéo disponibles
async function getDevices() {
  try {
    const devices = await navigator.mediaDevices.enumerateDevices(); // Récupère tous les appareils
    const videoDevices = devices.filter(device => device.kind === 'videoinput'); // Filtre uniquement les caméras

    // Chercher et démarrer le flux de la caméra par son nom
    changeCameraByName(videoDevices, "OBS Virtual Camera");  // Remplacez "Caméra avant" par le nom que vous cherchez
  } catch (error) {
    console.error('Erreur lors de l\'énumération des appareils :', error);
  }
}

// Fonction pour démarrer un flux vidéo avec une caméra spécifique
async function startStream(deviceId) {
  const constraints = {
    video: { deviceId: { exact: deviceId } } // Utilise une caméra spécifique
  };

  try {
    const stream = await navigator.mediaDevices.getUserMedia(constraints); // Récupère le flux vidéo
    const videoElement = document.querySelector('video'); // Élément vidéo pour afficher le flux
    videoElement.srcObject = stream; // Connecte le flux à l'élément vidéo
  } catch (error) {
    console.error('Erreur lors du démarrage du flux vidéo :', error);
  }
}

// Fonction pour changer la caméra par nom
function changeCameraByName(videoDevices, cameraName) {
  // Chercher la caméra correspondant au nom donné
  for (let device of videoDevices) {
    if (device.label.includes(cameraName)) {
      console.log(`Caméra trouvée : ${device.label}`);
      startStream(device.deviceId); // Lance la caméra si le nom correspond
      return;
    }
  }
  console.log("Aucune caméra trouvée avec ce nom.");
}

// Appel à la fonction pour obtenir les appareils et changer la caméra
getDevices(); 
