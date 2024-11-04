document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    const texts = document.querySelectorAll('.floating-text');
    
    texts.forEach((text, index) => {
        const moveX = (mouseX - windowWidth / 2) * (0.02 + index * 0.01);
        const moveY = (mouseY - windowHeight / 2) * (0.02 + index * 0.01);
        
        text.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});
