// Select all navigation buttons
const buttons = document.querySelectorAll("nav button");

buttons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    const targetPage = btn.getAttribute("data-page");

    // Prevent reloading the current page
    if (window.location.pathname.endsWith(targetPage)) return;

    // Start falling fruits animation
    startFallingFruits();

    // Navigate to new page after it fully loads
    // Use window.location (animation continues until browser loads next page)
    window.location.href = targetPage;
  });
});

function startFallingFruits() {
  const fruitColors = ["#ff4d4d", "#ffcc00", "#66cc33", "#ff6600"];
  
  // Create fruits continuously
  const interval = setInterval(() => {
    const fruit = document.createElement("div");
    fruit.style.position = "fixed";
    fruit.style.top = "-30px";
    fruit.style.left = Math.random() * window.innerWidth + "px";
    fruit.style.width = "15px";
    fruit.style.height = "15px";
    fruit.style.backgroundColor = fruitColors[Math.floor(Math.random() * fruitColors.length)];
    fruit.style.borderRadius = "50%";
    fruit.style.zIndex = 9999;
    document.body.appendChild(fruit);

    const fallDuration = 1000 + Math.random() * 500; // ~1-1.5s

    fruit.animate(
      [
        { transform: "translateY(0)" },
        { transform: `translateY(${window.innerHeight + 50}px)` }
      ],
      { duration: fallDuration, iterations: 1, easing: "linear" }
    );

    setTimeout(() => {
      fruit.remove();
    }, fallDuration);
  }, 100); // 1 fruit every 0.1s
}
