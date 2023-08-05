function changeImage(imageName) {
    let img = document.querySelector('.cupcake');
    img.setAttribute('src', imageName);
}

function changeColor(color) {
    let ball = document.querySelector('ball');
    ball.style.background = color;
};



const lines = document.querySelector(".lines");
const meanu = document.querySelector(".navMenu");

lines.addEventListener("click", ()=> {
    lines.classList.toggle("active");
    meanu.classList.toggle("active");
})