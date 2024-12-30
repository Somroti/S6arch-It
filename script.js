// FEURIBOU
navigator.mediaDevices.enumerateDevices()
    .then(devices => {
        const videoDevices = devices.filter(device => device.kind === 'videoinput');
        console.log("Liste des caméras disponibles :");
        videoDevices.forEach((device, index) => {
            console.log(`${index + 1}: ${device.label} (ID: ${device.deviceId})`);
        });
    })
    .catch(error => console.error("Erreur lors de l'énumération des périphériques :", error));
