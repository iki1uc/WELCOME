// Karussell drehen
let angle = 0;
karussell.addEventListener('pointermove', e => {
  if(e.pressed) angle += e.movementX * 0.5;
  karussell.style.rotate = angle + 'deg';
  // snap zu 5 Farben = 72° pro Segment
  let active = Math.round(angle/72) %5;
  setOUTSchrift(active); // ändert OUT Box
});

// Sprachnachricht
mic.onpointerdown = () => recognition.start();
recognition.onresult = e => {
  IN.textContent = e.results[0][0].transcript;
  OUT.textContent = IN.textContent; // gleiche Worte, andere Schrift = Wunder
};1
