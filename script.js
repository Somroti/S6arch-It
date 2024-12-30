// feur
navigator.mediaDevices.enumerateDevices()
    .then(devices => {
        const videoDevices = devices.filter(device => device.kind === 'videoinput');
        const backCamera = videoDevices.find(device => device.label.toLowerCase().includes('back'));

        if (backCamera) {
            navigator.mediaDevices.getUserMedia({
                video: { deviceId: { exact: backCamera.deviceId } }
            }).then(stream => {
                const videoElement = document.querySelector('video');
                videoElement.srcObject = stream;
            }).catch(error => console.error("Erreur : ", error));
        } else {
            console.error("Aucune caméra arrière trouvée.");
        }
    })
    .catch(error => console.error("Erreur lors de l'énumération des périphériques :", error));
