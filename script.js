const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

noBtn.addEventListener('mouseover', () => {
  const i = Math.floor(Math.random() * 300);
  const j = Math.floor(Math.random() * 300);
  noBtn.style.position = 'absolute';
  noBtn.style.top = `${i}px`;
  noBtn.style.left = `${j}px`;
});

yesBtn.addEventListener('click', () => {
  document.querySelector('.container').innerHTML = `
    <h1>💍 Yes! I Love You Too 💖</h1>
    <img src="https://media.tenor.com/qQwFcVmIbY0AAAAC/gojo-hug.gif" alt="hug" width="300" style="border-radius: 16px; margin-top: 20px;"/>
    <p style="margin-top: 20px; font-size: 1.2em;">Your forever — VENKATESH 🌌</p>
  `;
});
