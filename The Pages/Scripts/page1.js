const ans = "suicide"
const answerbox = document.getElementById("answerbox")
const answerbutton = document.getElementById("answerbutton")

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

answerbutton.addEventListener("click", async function() {
if (answerbox.value == ans) {
    var audio = new Audio('Audio/exit.mp3');
    audio.play();

    await sleep(5000)

    document.location.href = "QUIZ TIME!.html"
}
alert("Incorrect")
})

// Music
var audio = new Audio('Audio/rotting.mp3');
audio.loop = true;
audio.play().catch(() => {
  alert("Please enable the ability to autoplay audio! Otherwise you have to click once on every page!")

  audio.play();
  
  document.addEventListener("click", function() {
        audio.play();
    }, { once: true });
})