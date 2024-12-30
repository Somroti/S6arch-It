let currentStream;
let currentDeviceIndex = 0;

// Fonction pour passer à la caméra suivante
async function switchCamera() {
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

    // Passe à la caméra suivante
    currentDeviceIndex = (currentDeviceIndex + 1) % videoDevices.length;
    const deviceId = videoDevices[currentDeviceIndex].deviceId;

    // Obtenir le flux de la nouvelle caméra
    currentStream = await navigator.mediaDevices.getUserMedia({
        video: { deviceId: { exact: deviceId } }
    });

    // Remplace la source de l'élément vidéo
    const videoElement = document.querySelector('video');
    if (videoElement) {
        videoElement.srcObject = currentStream;
    } else {
        console.error("Aucun élément vidéo trouvé sur la page.");
    }
}

// Appeler cette fonction avec Video Sharing actif
switchCamera();
