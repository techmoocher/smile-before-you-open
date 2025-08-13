document.addEventListener('DOMContentLoaded', function() {
    const initialCard = document.getElementById('initialCard');
    const hiddenCard = document.getElementById('hiddenCard');
    const bgMusic = document.getElementById('bgMusic');
    const leavesContainer = document.querySelector('.falling-leaves');
    
    // Create falling leaves with more variety
    function createLeaves() {
        const colors = ['#f39c12', '#e74c3c', '#e67e22', '#d35400', '#c0392b', '#ff7979', '#ffbe76'];
        
        for (let i = 0; i < 40; i++) {
            const leaf = document.createElement('div');
            leaf.classList.add('leaf');
            
            // Random position, size, and rotation
            const leftPos = Math.random() * 100;
            const size = Math.random() * 30 + 10;
            const delay = Math.random() * 20;
            const duration = Math.random() * 15 + 10;
            const rotationStart = Math.random() * 360;
            
            // Apply random styles
            leaf.style.left = leftPos + 'vw';
            leaf.style.width = size + 'px';
            leaf.style.height = size + 'px';
            leaf.style.animation = `fallingLeaves ${duration}s linear ${delay}s infinite`;
            leaf.style.transform = `rotate(${rotationStart}deg)`;
            leaf.style.opacity = Math.random() * 0.5 + 0.5;
            
            leavesContainer.appendChild(leaf);
        }
    }
    
    // Add decorative elements
    function createDecorations() {
        const decorations = document.querySelectorAll('.card-decoration');
        decorations.forEach(decoration => {
            decoration.innerHTML = '✿';
            decoration.style.position = 'absolute';
            decoration.style.fontSize = '20px';
            decoration.style.color = '#7fb3d5';
            decoration.style.opacity = '0.7';
        });
        
        document.querySelector('.top-left').style.top = '15px';
        document.querySelector('.top-left').style.left = '15px';
        document.querySelector('.top-right').style.top = '15px';
        document.querySelector('.top-right').style.right = '15px';
        document.querySelector('.bottom-left').style.bottom = '15px';
        document.querySelector('.bottom-left').style.left = '15px';
        document.querySelector('.bottom-right').style.bottom = '15px';
        document.querySelector('.bottom-right').style.right = '15px';
    }
    
    // Handle card click with enhanced animations
    initialCard.addEventListener('click', function() {
        initialCard.classList.add('flip');
        
        setTimeout(function() {
            hiddenCard.classList.add('show');
        }, 400);
        
        // Play music
        bgMusic.volume = 0.7;
        bgMusic.play().catch(error => {
            console.log('Auto-play was prevented. Please interact with the document first.', error);
        });
    });
    
    createLeaves();
    createDecorations();
    
    // Add pulsating effect to hint text
    const hint = document.querySelector('.hint');
    if (hint) {
        setInterval(() => {
            hint.style.opacity = hint.style.opacity === '1' ? '0.6' : '1';
        }, 1200);
    }
    
    // // Allow music to be toggled by clicking on the second card
    // hiddenCard.addEventListener('click', function() {
    //     if (bgMusic.paused) {
    //         bgMusic.play();
    //     } else {
    //         bgMusic.pause();
    //     }
    // });
});
