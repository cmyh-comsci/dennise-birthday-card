const landing = document.getElementById("landing");
const birthday = document.getElementById("birthday");
const startBtn = document.getElementById("startBtn");
const messageBtn = document.getElementById("messageBtn");
const messageModal = document.getElementById("messageModal");
const closeBtn = document.getElementById("closeBtn");
const audio = document.getElementById("birthdayAudio");
const musicBtn = document.getElementById("musicBtn");
const musicPlayer = document.getElementById("musicPlayer");
const profilePhoto = document.getElementById("profilePhoto");
const photoFallback = document.getElementById("photoFallback");
const letterEntry = document.getElementById("letterEntry");

function showBirthday() {
  landing.classList.remove("active");
  setTimeout(() => birthday.classList.add("active"), 250);
}

startBtn.addEventListener("click", async () => {
  showBirthday();
  try {
    await audio.play();
    musicPlayer.classList.add("playing");
    musicBtn.setAttribute("aria-label", "Pause music");
  } catch {
    // A second click on the music control can still start it if autoplay is blocked.
  }
});

messageBtn.addEventListener("click", () => {
  letterEntry.classList.remove("cats-activated");
  void letterEntry.offsetWidth;
  letterEntry.classList.add("cats-activated");

  // Let the cats have their little entrance before the letter appears.
  setTimeout(() => {
    messageModal.classList.add("show");
    messageBtn.blur();
    letterEntry.classList.remove("cats-activated");
  }, 620);
});

function closeModal() {
  messageModal.classList.remove("show");
}

closeBtn.addEventListener("click", closeModal);
messageModal.addEventListener("click", (event) => {
  if (event.target === messageModal) closeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});

musicBtn.addEventListener("click", async () => {
  if (audio.paused) {
    try {
      await audio.play();
      musicPlayer.classList.add("playing");
      musicBtn.setAttribute("aria-label", "Pause music");
    } catch {
      alert("♡");
    }
  } else {
    audio.pause();
    musicPlayer.classList.remove("playing");
    musicBtn.setAttribute("aria-label", "Play music");
  }
});

audio.addEventListener("ended", () => {
  musicPlayer.classList.remove("playing");
  musicBtn.setAttribute("aria-label", "Play music");
});

profilePhoto.addEventListener("error", () => {
  profilePhoto.style.display = "none";
  photoFallback.style.display = "grid";
});

profilePhoto.addEventListener("load", () => {
  profilePhoto.style.display = "block";
  photoFallback.style.display = "none";
});
