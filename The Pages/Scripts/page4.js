// CHEATER!
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Music
var audio = new Audio('Audio/rotting.mp3');
audio.play();
if (navigator.getAutoplayPolicy(audio) == "disallowed" || navigator.getAutoplayPolicy(audio) == "allowed-muted") {
    alert("Please enable the ability to autoplay audio!")
    location.href = "page4.html"
} else {
    audio.addEventListener("ended", function() {
        audio.play();
    })
}