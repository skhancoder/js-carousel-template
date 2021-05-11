let left_btn = document.querySelector(".left");
let right_btn = document.querySelector(".right");
let carousel_items = document.querySelectorAll(".carousel-items");
let carousel = document.querySelector(".carousel");

let i = 0;
let angle = 100;

left_btn.addEventListener("click", function () {
    if (angle == carousel_items.length * 100) {
        angle -= 200;
        right_btn.classList.remove("disabled");
        left_btn.classList.remove("disabled");
        carousel.style.transform = "translateX(" + "-" + angle + "%" + ")";

    } else {
        if (angle == 0) {
            left_btn.classList.add("disabled");
        } else {
            right_btn.classList.remove("disabled");
            angle -= 100;
            left_btn.classList.remove("disabled");
            carousel.style.transform = "translateX(" + "-" + angle + "%" + ")";
            if (angle == 0) {
                left_btn.classList.add("disabled");
            }
        }
    }
    console.log(angle);
})


right_btn.addEventListener("click", function () {
    if (angle == carousel_items.length * 100) {
        right_btn.classList.add("disabled");
    } else {
        right_btn.classList.remove("disabled");
        left_btn.classList.remove("disabled");
        carousel.style.transform = "translateX(" + "-" + angle + "%" + ")";
        angle += 100;
        if (angle == carousel_items.length * 100) {
            right_btn.classList.add("disabled");
        }
    }
    console.log(angle);
})