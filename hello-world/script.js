const waveButton = document.querySelector('#wave');
const reply = document.querySelector('#reply');
const greetings = [
  'A wave right back at you. Hello!',
  'Hello, again! Nice to see you here.',
  'Another wave, another little moment of joy.',
];
let waves = 0;

waveButton.hidden = false;
waveButton.addEventListener('click', () => {
  reply.textContent = greetings[waves % greetings.length];
  waves += 1;
});
