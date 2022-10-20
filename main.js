function playPom () {
    document.querySelector('#som_tecla_pom').play();
}

const keyList = document.querySelectorAll('.tecla')

keyList[0].onclick = playPom;


