document.addEventListener("DOMContentLoaded", function() {
    const text = "CyberSecurity Engineer || Ethical Hacker || Red Teaming";
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
                element.innerHTML += "<br>[Warning: System Breach Detected]";
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

    // New functions and intervals added below
    function updateCounter(id, max, unit = '') {
        const counter = document.getElementById(id);
        let count = parseInt(counter.innerText);
        count += Math.floor(Math.random() * 5);
        if (count > max) count = max;
        counter.innerText = count + unit;
    }

    function updateBreachLevel() {
        const breachBar = document.getElementById('breach-bar');
        const newWidth = Math.random() * 100;
        breachBar.style.width = `${newWidth}%`; // Fixed template literal syntax
    }

    const exploits = [
        "SQL Injection", "Cross-Site Scripting (XSS)", "Buffer Overflow",
        "Man-in-the-Middle", "Denial of Service (DoS)", "Rootkit",
        "Ransomware", "Keylogger", "Zero-Day Exploit", "Phishing Attack",
        "Malware Injection", "Brute Force Attack", "Backdoor Exploit"
    ];
    
    function updateExploitList() {
        const exploitList = document.getElementById('exploit-list');
        exploitList.innerHTML = '';
        const numExploits = Math.floor(Math.random() * 5) + 1;
        for (let i = 0; i < numExploits; i++) {
            const exploit = exploits[Math.floor(Math.random() * exploits.length)];
            exploitList.innerHTML += `<div>→ ${exploit}</div>`; // Fixed template literal syntax
        }
    }

    function updateExfilCounter() {
        const counter = document.getElementById('exfil-counter');
        let count = parseFloat(counter.innerText);
        count += Math.random() * 0.5;
        counter.innerText = count.toFixed(2) + ' GB';
    }

    function updateNetworkMap() {
        const mapVisual = document.getElementById('network-map-visual');
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff']; // Array of colors
        const numNodes = 5; // Number of nodes
        const nodes = Array(numNodes).fill().map((_, i) => {
            const color = colors[Math.floor(Math.random() * colors.length)]; // Random color for each node
            return `
                <circle cx="${10 + i * 15}%" cy="${50 + Math.sin(i) * 10}" r="5" fill="${color}" />
                <line x1="${10 + i * 15}%" y1="${50 + Math.sin(i) * 10}" x2="${10 + (i + 1) * 15}%" y2="${50 + Math.sin(i + 1) * 10}" stroke="${color}" />
            `;
        }).join('');

        mapVisual.innerHTML = `<svg width="100%" height="100" xmlns="http://www.w3.org/2000/svg">${nodes}</svg>`;
    }

    function updateVulnScanner() {
        const scanProgress = document.getElementById('vuln-scan-progress');
        const progress = Math.floor(Math.random() * 101);
        scanProgress.innerHTML = `<progress value="${progress}" max="100"></progress> ${progress}%`; // Fixed template literal syntax
    }

    function updateSocialEngineering() {
        const successRate = document.getElementById('social-engineering-rate');
        const rate = Math.floor(Math.random() * 101);
        successRate.innerText = `${rate}% Success Rate`; // Fixed template literal syntax
    }

    function updateDarkWebActivity() {
        const tracker = document.getElementById('dark-web-tracker');
        const activity = Math.floor(Math.random() * 1000);
        tracker.innerText = `${activity} Transactions`; // Fixed template literal syntax
    }

    function updateDataExfilGraph() {
        const graphContainer = document.getElementById('data-exfil-graph');
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff']; // Array of colors
        const numNodes = 5; // Number of nodes
        const nodes = Array(numNodes).fill().map((_, i) => {
            const color = colors[Math.floor(Math.random() * colors.length)]; // Random color for each node
            return `
                <circle cx="${10 + i * 15}%" cy="${50 + Math.sin(i) * 10}" r="5" fill="${color}" />
                <line x1="${10 + i * 15}%" y1="${50 + Math.sin(i) * 10}" x2="${10 + (i + 1) * 15}%" y2="${50 + Math.sin(i + 1) * 10}" stroke="${color}" />
            `;
        }).join('');

        graphContainer.innerHTML = `<svg width="100%" height="100" xmlns="http://www.w3.org/2000/svg">${nodes}</svg>`;
    }

    // Set intervals for updating metrics
    setInterval(() => updateCounter('compromise-counter', 1000), 3000);
    setInterval(updateBreachLevel, 5000);
    setInterval(updateExploitList, 7000);
    setInterval(updateExfilCounter, 2000);
    setInterval(() => updateCounter('botnet-counter', 10000), 4000);
    setInterval(() => updateCounter('ddos-counter', 50), 6000);
    setInterval(() => updateCounter('zeroday-counter', 10), 10000);
    setInterval(() => updateCounter('ransomware-counter', 100), 8000);
    setInterval(updateNetworkMap, 5000);
    setInterval(updateVulnScanner, 3000);
    setInterval(updateSocialEngineering, 7000);
    setInterval(updateDarkWebActivity, 5000);
    setInterval(updateDataExfilGraph, 5000);

    // Call this function to update the graph
    updateNetworkMap();
});
