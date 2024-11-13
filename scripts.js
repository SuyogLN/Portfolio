document.addEventListener("DOMContentLoaded", function() {
    const text = "Welcome to My Cybersecurity Domain...\n[Access Denied] Intruder Detected!";
    let i = 0;
    const element = document.querySelector(".intro-text");
    const cursor = document.createElement("span");
    cursor.classList.add("cursor");
    element.appendChild(cursor);
    
    // Adds flickering effect to text
    element.classList.add("flicker-animation");

    function typeWriter() {
        if (i < text.length) {
            // Add the next character to the text
            element.innerHTML = text.substring(0, i + 1);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            // Once typing finishes, show "Access Denied" message or other hacking effects
            setTimeout(() => {
                element.innerHTML += "\n[Warning: System Breach Detected]";
            }, 1000);
        }
    }

    typeWriter();
});
