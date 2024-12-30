// Essai 2
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

    // Démarre la nouvelle caméra
    currentStream = await navigator.mediaDevices.getUserMedia({
        video: { deviceId: { exact: deviceId } }
    });

    console.log(`Caméra active : ${videoDevices[currentDeviceIndex].label}`);
}

// Appeler directement la fonction pour passer à la caméra suivante
switchCamera();
