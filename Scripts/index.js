const images = ["Images/PEABODY.png", "Images/DMR.png", "Images/HOG.png"]
const button1 = document.getElementById("button1")
let button1index = 2
const button2 = document.getElementById("button2")
let button2index = 1
const button3 = document.getElementById("button3")
let button3index = 0

const button1Image = document.getElementById("buttonImage1")
const button2Image = document.getElementById("buttonImage2")
const button3Image = document.getElementById("buttonImage3")

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// If your trying to cheat right now, I will find out
async function checkSlanderStatus() {
  if (button1index == 0 && button2index == 1 && button3index == 2) {
      var audio = new Audio('Audio/exit.mp3');
      audio.play();

      await sleep(5000)

      document.location.href = "riddlemethis.html"
  }
}

button1.addEventListener("click", function() {
  button1index += 1
  if (button1index > 2) {
    button1index = 0
  }
  button1Image.src = images[button1index]
  checkSlanderStatus()
})
button2.addEventListener("click", function() {
  button2index += 1
  if (button2index > 2) {
    button2index = 0
  }
  button2Image.src = images[button2index]
  checkSlanderStatus()
})
button3.addEventListener("click", function() {
  button3index += 1
  if (button3index > 2) {
    button3index = 0
  }
  button3Image.src = images[button3index]
  checkSlanderStatus()
})


// Music
var audio = new Audio('Audio/Darkness Falls.mp3');
audio.play();
if (navigator.getAutoplayPolicy(audio) == "disallowed" || navigator.getAutoplayPolicy(audio) == "allowed-muted") {
  alert("Please enable the ability to autoplay audio!")
  location.href = "index.html"
} else {
  audio.addEventListener("ended", function() {
    audio.play();
  })
}