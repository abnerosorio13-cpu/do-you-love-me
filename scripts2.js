function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "💕"; // You can change this to 💕 ❤️ 💘 etc.
  
    // Random position, size, and duration
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 30 + 20 + "px";
    heart.style.animationDuration = Math.random() * 3 + 3 + "s"; // between 3–6 seconds
  
    document.body.appendChild(heart);
  
    // Remove the heart after it falls
    setTimeout(() => {
      heart.remove();
    }, 6000);
  }
  
  // Create new hearts every 300ms
  setInterval(createHeart, 100);
