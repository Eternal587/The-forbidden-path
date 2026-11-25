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
audio.play();
if (navigator.getAutoplayPolicy(audio) == "disallowed" || navigator.getAutoplayPolicy(audio) == "allowed-muted") {
    alert("Please enable the ability to autoplay audio!")
    location.href = "page1.html"
} else {
    audio.addEventListener("ended", function() {
        audio.play();
    })
}