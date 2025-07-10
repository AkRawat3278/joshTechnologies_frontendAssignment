const video = document.getElementById('featureVideo');
const playButton = document.getElementById('playButton');

function togglePlayPause() {
  if (video.paused) {
    video.play();
    playButton.classList.add('hidden');
  } else {
    video.pause();
    playButton.classList.remove('hidden');
  }
}

video.addEventListener('click', togglePlayPause);
playButton.addEventListener('click', togglePlayPause);
