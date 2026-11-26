  // Time Function
  const countdownDateMs = Date.UTC(2027, 1, 1, 5, 0, 0, 0) // Midnight, January First, EST
  const timeLabel = document.getElementById("Countdown")

  function getTime() {
    const diffMs = countdownDateMs - Date.now()
    if (diffMs <= 0) {
      // Countdown Over
    }

    const TSeconds = Math.floor(diffMs / 1000);
    const days = Math.floor(TSeconds / 86400);
    const hours = Math.floor((TSeconds % 86400) / 3600);
    const minutes = Math.floor((TSeconds % 3600) / 60);
    const seconds = TSeconds % 60

    timeLabel.innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds
  }

  getTime()
  setInterval(getTime, 1000)

  // Music
  var audio = new Audio('Audio/ANOTHER HIM.mp3');
  audio.loop = true;
  audio.play().catch(() => {
  alert("Please enable the ability to autoplay audio! Otherwise you have to click once on every page!")

  audio.play();
  
  
  document.addEventListener("click", function() {
        audio.play();
    }, { once: true });
  })