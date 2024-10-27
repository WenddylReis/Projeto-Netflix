// Seleciona o elemento com o id 'avatar'
const avatar = document.getElementById('avatar');

// Cria um objeto de áudio para o som 'tudum' da Netflix
const tudu = new Audio('./audio_tudum-netflix-sound.mp3');

// Seleciona o primeiro elemento com a classe 'saiba'
const saiba = document.querySelector('.saiba');

// Adiciona um evento de clique ao avatar que toca o som 'tudum'
avatar.addEventListener('load', () => {
    tudu.play();
});

// Adiciona um evento de clique ao botão 'saiba' que exibe um modal usando jQuery
saiba.addEventListener('click', () => {
    $('#modal').modal('show');
});

function togglePlayPause() {
    const video = document.getElementById("playVideo"); // Seleciona o elemento de vídeo pelo ID
}

function togglePlayPause() {
    const video = document.getElementById("myVideo"); // Seleciona o elemento de vídeo pelo ID
  
    // Verifica se o vídeo está pausado:
    if (video.paused) {
      video.play(); // Se estiver pausado, inicia a reprodução
    } else {
      video.pause(); // Se estiver em reprodução, pausa o vídeo
    }
  }
