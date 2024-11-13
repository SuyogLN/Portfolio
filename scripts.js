document.addEventListener("DOMContentLoaded", function() {
    const text = "Welcome to the Dark Side of Cybersecurity...\n[Access Denied] Intruder Detected!";
    let i = 0;
    const element = document.querySelector(".intro-text");
    
    function typeWriter() {
        if (i < text.length) {
            // Add the next character to the text
            element.innerHTML = text.substring(0, i + 1);
            i++;
            setTimeout(typeWriter, 80); // Typing speed
        } else {
            // Once typing finishes, show "Access Denied" message or other hacking effects
            setTimeout(() => {
                element.innerHTML += "\n[Warning: System Breach Detected]";
            }, 800); // Delay before showing warning
        }
    }

    typeWriter();

    // Matrix effect
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    document.querySelector('.matrix-background').appendChild(canvas);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Black background with transparency
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#0F0'; // Green text
        ctx.font = fontSize + 'px monospace';

        for (let x = 0; x < drops.length; x++) {
            const text = characters.charAt(Math.floor(Math.random() * characters.length));
            ctx.fillText(text, x * fontSize, drops[x] * fontSize);
            drops[x]++;
            if (drops[x] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[x] = 0;
            }
        }
    }

    setInterval(draw, 33); // Draw every 33ms

    // Toggle section visibility
    window.toggleSection = function(sectionId) {
        const sections = ['about', 'projects', 'certifications', 'skills'];
        sections.forEach(id => {
            const section = document.getElementById(id);
            if (id === sectionId) {
                // Toggle the active class to show/hide the section
                section.classList.toggle('active');
                // Show the section if it has the active class, otherwise hide it
                section.style.display = section.classList.contains('active') ? 'block' : 'none';
            } else {
                section.classList.remove('active'); // Remove active class from other sections
                section.style.display = 'none'; // Hide other sections
            }
        });
    };
});
