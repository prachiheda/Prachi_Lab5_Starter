// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const speakButton = document.querySelector('button');
  const textArea = document.getElementById('text-to-speak');
  const faceImg = document.querySelector('#explore img');
  const CLOSED_FACE_SRC = 'assets/images/smiling.png';
  const OPEN_FACE_SRC   = 'assets/images/smiling-open.png';
  let voices = [];

  function populateVoices() {
    voices = synth.getVoices();
    voiceSelect.innerHTML =
      '<option value="select" disabled selected>Select Voice:</option>';
    voices.forEach((voice, i) => {
      const option = document.createElement('option');
      option.value = i;
      option.textContent = `${voice.name} (${voice.lang})${voice.default ? ' — DEFAULT' : ''}`;
      voiceSelect.appendChild(option);
    });
  }
  if (typeof synth.onvoiceschanged !== 'undefined') {
    synth.onvoiceschanged = populateVoices;
  }
  populateVoices();
  

  speakButton.addEventListener('click', () => {
    const text = textArea.value.trim();

    if (!text) return;                     
    if (synth.speaking) synth.cancel();   

    const speech = new SpeechSynthesisUtterance(text);
    const idx = voiceSelect.value;
    if (idx !== 'select' && voices[idx]) {
      speech.voice = voices[idx];
    }

    speech.addEventListener('start', () => {
      faceImg.src = OPEN_FACE_SRC;
    });

    speech.addEventListener('end', () => {
      faceImg.src = CLOSED_FACE_SRC;
    });

    synth.speak(speech);
  });
   

}