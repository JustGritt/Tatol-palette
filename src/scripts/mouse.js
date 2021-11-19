console.log("mouse.js ready ! 👍")

// Mouse variables
const currInner = document.querySelector('.cursor-dot');
const currOutter = document.querySelector('.cursor-circle');

// Mouse event listener
document.addEventListener('mousemove', e => {
    currInner.style.cssText = currOutter.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});
