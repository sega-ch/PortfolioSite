const brg = document.querySelector(".burger-btn");
const line = document.querySelectorAll(".line");
const header = document.querySelector(".header");
const link = document.querySelector(".link");
let isOpen = false;

brg.addEventListener("click", function () {

    if (isOpen) {

        header.style = "transform: translateX(-500px); transition: transform .5s";
        line[1].style = "opacity: 1; transform: translateY(10px); transition: transform .5s";
        line[0].style = " transform: rotate(0deg) translateY(0px); transition: transform .5s";
        line[2].style = " transform: rotate(0deg)  translateY(20px); transition: transform .5s";
        isOpen = false;
    } else {
        header.style = "transform: translateX(500px); transition: transform .5s";
        line[1].style = "opacity: 0";
        line[0].style = " transform: rotate(45deg); transition: transform .5s";
        line[2].style = " transform: rotate(-45deg); transition: transform .5s";
        isOpen = true;
    }

    

})

link.addEventListener("click", function () {
    line[1].style = "opacity: 1; transform: translateY(10px); transition: transform .5s";
    line[0].style = " transform: rotate(0deg) translateY(0px); transition: transform .5s";
    line[2].style = " transform: rotate(0deg)  translateY(20px); transition: transform .5s";
    isOpen = false;

})
