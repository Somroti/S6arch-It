navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        console.log("Caméra autorisée");
        const videoElement = document.createElement('video');
        videoElement.srcObject = stream;
        videoElement.autoplay = true;
        document.body.appendChild(videoElement);
    })
    .catch(error => {
        console.error("Erreur : ", error.message);
    });
