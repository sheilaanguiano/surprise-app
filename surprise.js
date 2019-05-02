const surpriseSection = document.getElementById('surprise');



//This generates a random value between one and zero
const randomTime = Math.random() * 4000;

setTimeout( () => surpriseSection.textContent = '🎉 Surprise! 🎉', randomTime);
