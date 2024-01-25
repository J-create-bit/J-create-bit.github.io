 // Código para el efecto parallax
 window.addEventListener('scroll', function() {
    let offset = window.pageYOffset;
    let parallax = document.querySelector('.parallax');
    parallax.style.backgroundPositionY = offset * 0.7 + 'px';
});

function scrollToAnimation() {
    const animationDiv = document.getElementById("animacion");
    animationDiv.scrollIntoView({ behavior: "smooth" });
    animationDiv.animate(
        [
            { transform: "scale(0.5)", opacity: 0 },
            { transform: "scale(1)", opacity: 1 },
        ],
        {
            duration: 1000,
            easing: "ease-in-out",
            fill: "forwards",
        }
    );
}

function scrollToAnimation2() {
    const animationDiv = document.getElementById("awa");
    animationDiv.scrollIntoView({ behavior: "smooth" });
    animationDiv.animate(
        [
            { transform: "scale(0.5)", opacity: 0 },
            { transform: "scale(1)", opacity: 1 },
        ],
        {
            duration: 1000,
            easing: "ease-in-out",
            fill: "forwards",
        }
    );
}