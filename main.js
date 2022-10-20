function playSong (idElement) {
    document.querySelector(idElement).play();
}

const keyList = document.querySelectorAll('.tecla')

for (let i = 0; i < keyList.length; i++) {
    const tecla = keyList[i];
    const instrument = tecla.classList[1];
    const idSong = `#som_${instrument}`;

    tecla.onclick = function () {
        playSong (idSong);
    }
}


