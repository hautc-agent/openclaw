function showAnswer(answer) {
    const modal = document.getElementById('answer-modal');
    const modalMessage = document.getElementById('modal-message');
    
    if (answer === 'yes') {
        modalMessage.innerHTML = `
            <h2 style="color: #ff6b6b; font-family: 'Dancing Script', cursive; font-size: 2.5rem; margin-bottom: 20px;">
                🎉 YÊU! 🎉
            </h2>
            <p style="color: white; font-size: 1.2rem; line-height: 1.6;">
                Em đã làm anh hạnh phúc nhất thế gian!<br><br>
                <strong>Ngày hôm nay sẽ là khởi đầu cho<br>
                một câu chuyện tình yêu đẹp nhất.</strong><br><br>
                💕 Anh sẽ luôn yêu em! 💕
            </p>
            <div style="margin: 30px 0;">
                <div class="heart" style="width: 80px; height: 72px;"></div>
            </div>
            <button class="btn yes" onclick="closeModal()" style="margin-top: 20px;">
                Cùng Viết Tiếp Câu Chuyện ❤️
            </button>
        `;
    } else {
        modalMessage.innerHTML = `
            <h2 style="color: #74b9ff; font-family: 'Dancing Script', cursive; font-size: 2.5rem; margin-bottom: 20px;">
                💭 Cảm Ơn Em...
            </h2>
            <p style="color: white; font-size: 1.2rem; line-height: 1.6;">
                Anh hiểu và tôn trọng quyết định của em.<br><br>
                <strong>Thời gian sẽ trả lời tất cả,<br>
                và trái tim anh sẽ luôn chờ đợi.</strong><br><br>
                💝 Anh vẫn luôn ở đây bên em 💝
            </p>
            <div style="margin: 30px 0;">
                <div style="font-size: 3rem;">⏰</div>
            </div>
            <button class="btn no" onclick="closeModal()" style="margin-top: 20px;">
                Cảm Ơn Em
            </button>
        `;
    }
    
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('answer-modal');
    modal.style.display = 'none';
    
    // Add some sparkle effect when closing
    createSparkles();
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('answer-modal');
    if (event.target == modal) {
        closeModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Create sparkle effect
function createSparkles() {
    const sparkleCount = 20;
    const container = document.querySelector('.container');
    
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.style.position = 'absolute';
        sparkle.style.width = '4px';
        sparkle.style.height = '4px';
        sparkle.style.background = '#fff';
        sparkle.style.borderRadius = '50%';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '999';
        
        // Random position
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        
        container.appendChild(sparkle);
        
        // Animate sparkle
        sparkle.style.animation = `sparkle 1s ease-out forwards`;
        
        // Remove sparkle after animation
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 1000);
    }
}

// Add sparkle animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkle {
        0% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
        }
        50% {
            opacity: 1;
            transform: scale(1) rotate(180deg);
        }
        100% {
            opacity: 0;
            transform: scale(0) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// Add floating animation to hearts
document.addEventListener('DOMContentLoaded', function() {
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach((heart, index) => {
        heart.style.animationDelay = (index * 0.5) + 's';
    });
});

// Add typing effect to the message
document.addEventListener('DOMContentLoaded', function() {
    const messageElement = document.querySelector('.message');
    const originalText = messageElement.innerHTML;
    messageElement.innerHTML = '';
    
    let charIndex = 0;
    function typeWriter() {
        if (charIndex < originalText.length) {
            messageElement.innerHTML += originalText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 50);
        }
    }
    
    // Start typing effect after a short delay
    setTimeout(typeWriter, 1000);
});

// Add background music toggle (optional)
function toggleMusic() {
    // This is a placeholder for music functionality
    // You can add background music if desired
    console.log('Music toggle functionality would go here');
}

// Add love counter (optional)
function updateLoveCounter() {
    const loveCounter = document.querySelector('.love-counter') || createLoveCounter();
    const currentCount = parseInt(localStorage.getItem('loveCounter') || '0');
    const newCount = currentCount + 1;
    localStorage.setItem('loveCounter', newCount.toString());
    loveCounter.textContent = newCount;
}

function createLoveCounter() {
    const counter = document.createElement('div');
    counter.className = 'love-counter';
    counter.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(255, 255, 255, 0.2);
        color: white;
        padding: 10px 15px;
        border-radius: 20px;
        font-size: 0.9rem;
        z-index: 1000;
    `;
    counter.textContent = 'Lần đầu: 1';
    document.body.appendChild(counter);
    return counter;
}

// Initialize love counter on page load
document.addEventListener('DOMContentLoaded', updateLoveCounter);