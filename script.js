document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-link');

    for (const link of links) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust for fixed navbar
                behavior: 'smooth'
            });
        });
    }
});

function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';

    }
}

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("#container ul li a");
    const sections = document.querySelectorAll("section");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetSection = this.getAttribute("data-section");

            sections.forEach(section => {
                section.classList.remove("active");
                if (section.getAttribute("id") === targetSection) {
                    section.classList.add("active");
                }
            });
        });
    });

    // Show the first section by default
    if (sections.length > 0) {
        sections[0].classList.add("active");
    }
});

window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
});
