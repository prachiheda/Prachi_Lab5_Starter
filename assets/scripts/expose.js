// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // get all the elements
  const hornSelect = document.getElementById('horn-select');
  const hornImg = document.querySelector('#expose img');
  const hornAudio = document.querySelector('audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');

  //listen for when select changes
  hornSelect.addEventListener("change", (event) => {
    var hornValue = event.target.value;
    hornImg.src = `assets/images/${hornValue}.svg`;
    hornImg.alt = `${hornValue} image`;
    hornAudio.src = `assets/audio/${hornValue}.mp3`;
  });

  //get input for volume slider 
  volumeSlider.addEventListener("input", (event) => {
    var volumeLevel = event.target.value;
    var scaledVolume = volumeLevel /100; 
    hornAudio.volume = scaledVolume; 
    if (volumeLevel == 0) {
      volumeIcon.src = "assets/icons/volume-level-0.svg";
      volumeIcon.alt = "Volume level 0";
    } else if (volumeLevel < 33) {
      volumeIcon.src = "assets/icons/volume-level-1.svg";
      volumeIcon.alt = "Volume level 1";
    } else if (volumeLevel < 67) {
      volumeIcon.src = "assets/icons/volume-level-2.svg";
      volumeIcon.alt = "Volume level 2";
    } else {
      volumeIcon.src = "assets/icons/volume-level-3.svg";
      volumeIcon.alt = "Volume level 3";
    }
  });

  const jsConfetti = new JSConfetti();
  //play audio 
  playButton.addEventListener("click", () => {
    hornAudio.play();
    if (hornSelect.value === "party-horn") {
      jsConfetti.addConfetti();
    }
  });



}