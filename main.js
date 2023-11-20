let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #fb4993;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #E9967A;">La curiosidad es mi motor. Siempre estoy buscando aprender algo nuevo y aplicarlo para hacer del mundo un lugar mejor.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
