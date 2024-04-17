


document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleButton");
    const menuIcon = document.getElementById("menuIcon");
    const closeIcon = document.getElementById("closeIcon");
    const liElements = document.querySelectorAll(".menu li");

    toggleButton.addEventListener("click", function () {
        liElements.forEach(function (li, index) {
            setTimeout(function () {
                li.classList.toggle("active");
            }, index * 65);
        });
        
        
        menuIcon.style.display = menuIcon.style.display === "none" ? "block" : "none";
        closeIcon.style.display = closeIcon.style.display === "none" ? "block" : "none";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const slideUpCards = document.querySelectorAll(".slide-up");

    function checkSlide() {
        slideUpCards.forEach(function (card) {
            const slideInAt = (window.scrollY + window.innerHeight) - card.clientHeight / 2;
            const cardBottom = card.offsetTop + card.clientHeight;

            const isHalfShown = slideInAt > card.offsetTop;
            const isNotScrolledPast = window.scrollY < cardBottom;

            if (isHalfShown && isNotScrolledPast) {
                card.classList.add("active");
            } else {
                card.classList.remove("active");
            }
        });
    }

    window.addEventListener("scroll", checkSlide);
});
