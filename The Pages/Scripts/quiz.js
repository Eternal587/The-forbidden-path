// Cheater Cheater Pumpkin Eater
// Questions
const q1 = document.getElementById("question1")
const q2 = document.getElementById("question2")
const q3 = document.getElementById("question3")
const q4 = document.getElementById("question4")
const q5 = document.getElementById("question5")

// False Answers
const f1 = document.querySelectorAll(".false1")
const f2 = document.querySelectorAll(".false2")
const f3 = document.querySelectorAll(".false3")
const f4 = document.querySelectorAll(".false4")
const f5 = document.querySelectorAll(".false5")

// Correct Answers
const t1 = document.querySelectorAll(".correct1")
const t2 = document.querySelectorAll(".correct2")
const t3 = document.querySelectorAll(".correct3")
const t4 = document.querySelectorAll(".correct4")
const t5 = document.querySelectorAll(".correct5")

// Hide all questions
q2.style.display = "none"
q3.style.display = "none"
q4.style.display = "none"
q5.style.display = "none"

function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}

// Correct Answers
t1.forEach(button => {
button.addEventListener("click", function() {
    q1.style.display = "none"
    q2.style.display = ""
    alert("Correct!!! Great Job!! This one was easy though.")
})
})

t2.forEach(button => {
button.addEventListener("click", function() {
    q2.style.display = "none"
    q3.style.display = ""
    alert("Wowie!")
})
})

t3.forEach(button => {
button.addEventListener("click", function() {
    q3.style.display = "none"
    q4.style.display = ""
    alert("Your Doing Fantastic!")
})
})

t4.forEach(button => {
button.addEventListener("click", function() {
    q4.style.display = "none"
    q5.style.display = ""
    alert("Your almost there..")
})
})

t5.forEach(button => {
button.addEventListener("click", async function() {
    alert("follow the pages for how they are left out.")

    var audio = new Audio('Audio/exit.mp3');
    audio.play();

    await sleep(5000)

    document.location.href = "theforbiddenpath.html"
})
})

// False Answers
f1.forEach(button => {
button.addEventListener("click", function() {
    alert("COME ON THIS WAS EASY!")
    q1.style.display = ""
    q2.style.display = "none"
    q3.style.display = "none"
    q4.style.display = "none"
    q5.style.display = "none"
})
})

f2.forEach(button => {
button.addEventListener("click", function() {
    alert("A little harder, I get it")
    q1.style.display = ""
    q2.style.display = "none"
    q3.style.display = "none"
    q4.style.display = "none"
    q5.style.display = "none"
})
})

f3.forEach(button => {
button.addEventListener("click", function() {
    alert("JUST CONTACT VIBINGCAT!")
    q1.style.display = ""
    q2.style.display = "none"
    q3.style.display = "none"
    q4.style.display = "none"
    q5.style.display = "none"
})
})

f4.forEach(button => {
button.addEventListener("click", function() {
    alert("Did you seriously just try to guess this?")
    q1.style.display = ""
    q2.style.display = "none"
    q3.style.display = "none"
    q4.style.display = "none"
    q5.style.display = "none"
})
})

f5.forEach(button => {
button.addEventListener("click", function() {
    alert("The serpent who twists and turns will decive all but those who know their fate.")
    q1.style.display = ""
    q2.style.display = "none"
    q3.style.display = "none"
    q4.style.display = "none"
    q5.style.display = "none"
})
})

// Music
var audio = new Audio('Audio/greenroom.mp3');
audio.play();
if (navigator.getAutoplayPolicy(audio) == "disallowed" || navigator.getAutoplayPolicy(audio) == "allowed-muted") {
    alert("Please enable the ability to autoplay audio!")
    location.href = "QUIZ TIME!.html"
} else {
    audio.addEventListener("ended", function() {
        audio.play();
    })
}