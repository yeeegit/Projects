document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggleButton");
    const menuIcon = document.getElementById("menuIcon");
    const closeIcon = document.getElementById("closeIcon");
    const liElements = document.querySelectorAll(".menu li");

    toggleButton.addEventListener("click", () => {
        liElements.forEach((li, index) => {
            setTimeout(() => {
                li.classList.toggle("active");
            }, index * 65);
        });

        menuIcon.style.display = menuIcon.style.display === "none" ? "block" : "none";
        closeIcon.style.display = closeIcon.style.display === "none" ? "block" : "none";
    });

    const slideUpCards = document.querySelectorAll(".slide-up");

    const checkSlide = () => {
        slideUpCards.forEach((card) => {
            const slideInAt = (window.scrollY + window.innerHeight) - card.clientHeight / 2;
            const cardBottom = card.offsetTop + card.clientHeight;

            const isHalfShown = slideInAt > card.offsetTop;
            const isNotScrolledPast = window.scrollY < cardBottom;

isHalfShown && isNotScrolledPast ? card.classList.add("active") : card.classList.remove("active");
        });
    };

    window.addEventListener("scroll", checkSlide);
});
