document.addEventListener('DOMContentLoaded', function() {
    // Add animation delay to list items
    const items = document.querySelectorAll('.section ul li');
    items.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });

    // Matrix effect
    const matrix = document.createElement('div');
    matrix.className = 'matrix';
    document.body.appendChild(matrix);

    const columns = Math.floor(window.innerWidth / 20);
    const drops = Array(columns).fill(0);

    function drawMatrix() {
        matrix.innerHTML = '';
        drops.forEach((y, index) => {
            const text = String.fromCharCode(Math.random() * 128);
            const span = document.createElement('span');
            span.textContent = text;
            span.style.left = `${index * 20}px`;
            span.style.top = `${y * 20}px`;
            matrix.appendChild(span);

            if (y * 20 > window.innerHeight && Math.random() > 0.975) {
                drops[index] = 0;
            } else {
                drops[index]++;
            }
        });
    }

    setInterval(drawMatrix, 50);

    // Example: Toggle visibility of a section
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle Skills';
    toggleButton.style.position = 'fixed';
    toggleButton.style.bottom = '20px';
    toggleButton.style.right = '20px';
    document.body.appendChild(toggleButton);

    const skillsSection = document.querySelector('.section');
    toggleButton.addEventListener('click', function() {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
        } else {
            skillsSection.style.display = 'none';
        }
    });

    // Typing effect adjustment
    const typingEffect = document.querySelector('.typing-effect');
    const text = typingEffect.textContent;
    typingEffect.textContent = '';

    let index = 0;
    function type() {
        if (index < text.length) {
            typingEffect.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100); // Adjust typing speed here
        } else {
            // Ensure the cursor stops at the end of the text
            typingEffect.style.borderRight = '2px solid #82c9ff';
        }
    }

    type();
}); 