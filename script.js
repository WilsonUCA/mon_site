// Add interactivity or functionality to your website
document.addEventListener('DOMContentLoaded', () => {
    console.log('Website loaded successfully!');

    // Example: Change text when clicking a section
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.addEventListener('click', () => {
            section.style.backgroundColor = section.style.backgroundColor 
                ? '' 
                : '#f0f0f0';
        });
    });
});