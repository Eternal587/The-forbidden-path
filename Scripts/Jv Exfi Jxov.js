var audio = new Audio('Audio/ANOTHER HIM.mp3');
audio.loop = true;
audio.play().catch(() => {
  alert("Please enable the ability to autoplay audio! Otherwise you have to click once on every page!")

  audio.play();
  
  document.addEventListener("click", function() {
        audio.play();
    }, { once: true });
})