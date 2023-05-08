var tonesArray = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
setInterval(showToneToPlay, 3000);
function showToneToPlay() {
  document.getElementById("letter").innerText = tonesArray[Math.round((tonesArray.length - 1) * Math.random())]; 
}
