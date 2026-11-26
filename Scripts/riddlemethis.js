const numberText = document.getElementById("num")
const button0 = document.getElementById("b0")
const button1 = document.getElementById("b1")
const button2 = document.getElementById("b2")
const button3 = document.getElementById("b3")
const button4 = document.getElementById("b4")
const button5 = document.getElementById("b5")
const button6 = document.getElementById("b6")
const button7 = document.getElementById("b7")
const button8 = document.getElementById("b8")
const button9 = document.getElementById("b9")

const ans = [9, 8, 8]
let numsPressed = [0, 0, 0]
let lastkey = 0
// Cheater cheater pumpkin eater

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function playAudio(url) {
    var audio = new Audio(url);
    audio.play();
}

async function checkProgression() {
    numsPressed[0] = numsPressed[1]
    numsPressed[1] = numsPressed[2]
    numsPressed[2] = lastkey

    if (numsPressed[0] == ans[0] && numsPressed[1] == ans[1] && numsPressed[2] == ans[2]) {
        playAudio("Audio/exit.mp3");

        await sleep(5000)

        document.location.href = "darkness.html"
    }
}

button1.addEventListener("click", function() {
    lastkey = 1
    checkProgression()
    playAudio("Dialtones/1.mp3")
})
button2.addEventListener("click", function() {
    lastkey = 2
    checkProgression()
    playAudio("Dialtones/2.mp3")
})
button3.addEventListener("click", function() {
    lastkey = 3
    checkProgression()
    playAudio("Dialtones/3.mp3")
})
button4.addEventListener("click", function() {
    lastkey = 4
    checkProgression()
    playAudio("Dialtones/4.mp3")
})
button5.addEventListener("click", function() {
    lastkey = 5
    checkProgression()
    playAudio("Dialtones/5.mp3")
})
button6.addEventListener("click", function() {
    lastkey = 6
    checkProgression()
    playAudio("Dialtones/6.mp3")
})
button7.addEventListener("click", function() {
    lastkey = 7
    checkProgression()
    playAudio("Dialtones/7.mp3")
})
button8.addEventListener("click", function() {
    lastkey = 8
    checkProgression()
    playAudio("Dialtones/8.mp3")
})
button9.addEventListener("click", function() {
    lastkey = 9
    checkProgression()
    playAudio("Dialtones/9.mp3")
})
button0.addEventListener("click", function() {
    lastkey = 0
    checkProgression()
    playAudio("Dialtones/0.mp3")
})

// Music
var audio = new Audio('Audio/Dialtone.mp3');
audio.loop = true;
audio.play().catch(() => {
  alert("Please enable the ability to autoplay audio! Otherwise you have to click once on every page!")

  audio.play();
  
  document.addEventListener("click", function() {
        audio.play();
    }, { once: true });
})