const efficiency = document.querySelector(".sidebar__efficiency__item");
const percent = document.querySelector(".percent");
const longBtn = document.querySelector(".long__btn");
const shortBtn = document.querySelector(".short__btn");
const winBtn = document.querySelector(".win__btn");
const lossBtn = document.querySelector(".loss__btn");

efficiency.addEventListener("input", () => {
    percent.innerHTML = `${efficiency.value}%`;
    efficiency.style.background = `linear-gradient(141deg, rgba(0,169,126,1) 0%, rgba(221,221,221,1) ${efficiency.value}%)`
})

longBtn.addEventListener("click", () => {
    longBtn.classList.toggle("long-active");
    if (shortBtn.classList.contains("short-active")) {
        shortBtn.classList.remove("short-active");
    }
})
shortBtn.addEventListener("click", () => {
    shortBtn.classList.toggle("short-active");
    if (longBtn.classList.contains("long-active")) {
        longBtn.classList.remove("long-active");
    }
    
})
winBtn.addEventListener("click", () => {
    winBtn.classList.toggle("win-active");
    if (lossBtn.classList.contains("loss-active")) {
        lossBtn.classList.remove("loss-active");
    }
})
lossBtn.addEventListener("click", () => {
    lossBtn.classList.toggle("loss-active");
    if (winBtn.classList.contains("win-active")) {
        winBtn.classList.remove("win-active");
    }
    
})





// accordion
let acc = document.querySelectorAll(".accordion");
let panel = document.querySelectorAll(".panel");
let neg = document.querySelectorAll(".neg");



for (let i = 0; i < acc.length; i++) {

    acc[i].addEventListener("click", function () {
        // REPLACING TAILWIND CLASSES
        // if (panel[i].classList.contains("flex")) {
        //   neg[i].innerText = "+"
        //   neg[i].classList.replace("text-red-700", "text-blue-700");
        //   panel[i].classList.replace("flex", "hidden");
        // } else if (panel[i].classList.contains("hidden")) {
        //     neg[i].innerText = "-"
        //     neg[i].classList.replace("text-blue-700", "text-red-700");
        //     panel[i].classList.replace("hidden", "flex");
        // }
        if (panel[i].classList.contains("hidden")) {
            // panel[i].style.display = "flex";
            panel[i].style.height = "100%";
            neg[i].innerText = "-";
            neg[i].style.color = "red";
        }
    
  });
}