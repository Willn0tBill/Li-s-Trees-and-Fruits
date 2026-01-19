function goTo(page) {
  createFruits();
  setTimeout(() => {
    window.location.href = page;
  }, 3000); // 3-second animation before page changes
}

/* Falling fruits animation */
function createFruits() {
  const fruitColors = ["#ff4d4d", "#ffcc00", "#66cc33", "#ff6600"];
  for (let i = 0; i < 20; i++) {
    const fruit = document.createElement("div");
    fruit.style.position = "fixed";
    fruit.style.top = "-50px";
    fruit.style.left = Math.random() * window.innerWidth + "px";
    fruit.style.width = "20px";
    fruit.style.height = "20px";
    fruit.style.backgroundColor = fruitColors[Math.floor(Math.random() * fruitColors.length)];
    fruit.style.borderRadius = "50%";
    fruit.style.opacity = Math.random();
    fruit.style.zIndex = 9999;
    document.body.appendChild(fruit);

    const fallDuration = 3000 + Math.random() * 2000;
    fruit.animate(
      [
        { transform: "translateY(0)" },
        { transform: `translateY(${window.innerHeight + 50}px)` }
      ],
      { duration: fallDuration, iterations: 1 }
    );

    setTimeout(() => {
      fruit.remove();
    }, fallDuration);
  }
}
