const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// Make the No button run away!
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

// Show final message on Yes
yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div class="stars"></div>
    <div style="text-align: center; margin-top: 20vh; font-family: 'Orbitron'; color: #00ffff;">
      <h1>💍 You said YES! 💙</h1>
      <p>Welcome to our anime love story.</p>
      <img src="https://media.tenor.com/nXavly-hHvcAAAAC/gojo-satoru.gif" width="250" />
    </div>
  `;
});
