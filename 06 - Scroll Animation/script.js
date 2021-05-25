const boxes = document.querySelectorAll(".box");

// Fire on scroll
window.addEventListener("scroll", checkBoxes);

// Fire it once at start
checkBoxes();

function checkBoxes() {
    // Trigger at bottom 80%
    const triggerBottom = (window.innerHeight / 5) * 4;

    boxes.forEach((box) => {
        // Get top of box
        const boxTop = box.getBoundingClientRect().top;

        // If top of box is above trigger point, show it
        if (boxTop < triggerBottom) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    });
}
