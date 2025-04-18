let isQTEActive = true;
let resultMessage = document.getElementById("qte-result");

document.addEventListener('keydown', function(event) {
  if (isQTEActive && event.key === ' ') { // space bar for dodge
    resultMessage.textContent = "You dodged successfully!";
    isQTEActive = false;
    setTimeout(() => restartQTE(), 1000);
  }
});

function restartQTE() {
  // Simulating a new round of QTE
  document.getElementById("message").textContent = "Press 'Space' to Dodge!";
  resultMessage.textContent = "";
  isQTEActive = true;
}
