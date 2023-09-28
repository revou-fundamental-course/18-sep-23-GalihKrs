document.getElementById("button").addEventListener("click",function() {
    let name = document.forms['content-form']['your-name'].value;
    let email = document.forms['content-form']['email'].value;
    let interest = document.forms['content-form']['interest'].value;

    if (!name){
        document.getElementById("name-error").innerText = "Name Cannot Be Blank!"
    }
    else {
        document.getElementById("name-error").innerText = "";
    }
    if (!email){
        document.getElementById("email-error").innerText = "Email Cannot Be Blank!"
    }
    else {
        document.getElementById("email-error").innerText = "";
    }
        if (!interest){
        document.getElementById("interest-error").innerText = "Interest Cannot Be Blank!"
    }
    else {
        document.getElementById("interest-error").innerText = "";
    }

});

const CarouselSlides = document.querySelectorAll(".image");
let CurrentIndex = 0;
let Interval = 3000;

function nextSlide() {
    CarouselSlides[CurrentIndex].classList.remove("active");
    CurrentIndex = (CurrentIndex + 1) % CarouselSlides.length;
    CarouselSlides[CurrentIndex].classList.add("active");
}

function startSlide() {
    setInterval (nextSlide, Interval);
}

(function() {
    startSlide();
})()