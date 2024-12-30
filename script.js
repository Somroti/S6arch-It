// Nouvel essai
let currentStream;
let videoElement = document.createElement('video'); // Crée un élément vidéo
videoElement.autoplay = true; // Activer la lecture automatique
document.body.appendChild(videoElement); // Ajoute l'élément à la page

let currentDeviceIndex = 0;

// Fonction pour démarrer la caméra
async function startCamera() {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const videoDevices = devices.filter(device => device.kind === 'videoinput');

    if (videoDevices.length === 0) {
        console.error("Aucune caméra disponible.");
        return;
    }

    // Arrête le flux actuel
    if (currentStream) {
        currentStream.getTracks().forEach(track => track.stop());
    }

    // Sélectionne la caméra suivante
    const deviceId = videoDevices[currentDeviceIndex].deviceId;
    currentDeviceIndex = (currentDeviceIndex + 1) % videoDevices.length;

    // Obtenir le flux vidéo
    currentStream = await navigator.mediaDevices.getUserMedia({
        video: { deviceId: { exact: deviceId } }
    });

    // Affiche le flux dans l'élément vidéo
    videoElement.srcObject = currentStream;
}

// Ajoute un bouton pour changer de caméra
const button = document.createElement('button');
button.textContent = "Changer de caméra";
button.onclick = startCamera;
document.body.appendChild(button);

// Démarre avec la première caméra
startCamera();
