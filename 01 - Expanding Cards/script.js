// Create node list of all panels
const panels = document.querySelectorAll('.panel');

// Add event listener to each panel
panels.forEach((panel) => {

    panel.addEventListener('click', () => {

        // Remove active class from other elements
        removeActiveClasses();

        // Add active class to clicked element
        panel.classList.add('active');

    })
})


function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}