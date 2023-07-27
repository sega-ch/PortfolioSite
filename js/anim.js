const menu = document.querySelector("#nav");
const info = document.querySelector("#info");
const link = document.querySelector(".arrLink");
const home = document.querySelector("#home");
const about = document.querySelector("#about");
const skill = document.querySelector("#skill");
const portf = document.querySelector("#portf");
const contacts = document.querySelector("#contacts");


window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    if (scrollPosition >= 5 && scrollPosition <= 10) {
        
        animation.play();
        menu.style = "background-color: black; margin-top: -5px; padding: 10px";

       

    } if (scrollPosition >= 10) {
        menu.style = "background-color: black; margin-top: -5px; padding: 10px";
    } if (scrollPosition === 0) {
        menu.style = "background-color: none";
        
    }

  });

const animation = menu.animate(
    [
        {opacity: "0"},
        {opacity: "0.25"},
        {opacity: "0.5"},
        {opacity: "0.75"},
        {opacity: "1"}
    ],
    {
        duration: 1000
    }
  );


link.addEventListener('click', function () { 

    window.scrollTo({
        top: document.querySelector(".introduction").getBoundingClientRect().top + window.scrollY,
        behavior: 'smooth'
    });

});

about.addEventListener('click', function () { 

    window.scrollTo({
        top: document.querySelector(".introduction").getBoundingClientRect().top + window.scrollY,
        behavior: 'smooth'
    });



});

home.addEventListener('click', function () { 

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

});

skill.addEventListener('click', function () { 

    window.scrollTo({
        top: document.querySelector(".skills-container").getBoundingClientRect().top + window.scrollY,
        behavior: 'smooth'
    });

});

portf.addEventListener('click', function () { 

    window.scrollTo({
        top: document.querySelector(".portfolio-container").getBoundingClientRect().top + window.scrollY,
        behavior: 'smooth'
    });

});

contacts.addEventListener('click', function () { 

    window.scrollTo({
        top: document.querySelector(".contacts-container").getBoundingClientRect().top + window.scrollY,
        behavior: 'smooth'
    });

});
