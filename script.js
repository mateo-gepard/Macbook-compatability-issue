// Countdown Timer
function updateCountdown() {
    const deadline = new Date('2026-01-01T00:00:00');
    const now = new Date();
    const diff = deadline - now;
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    
    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {
        countdownElement.textContent = days;
    }
}

// Update countdown on load and every hour
updateCountdown();
setInterval(updateCountdown, 3600000);

// FAQ Toggle Functionality
function toggleFAQ(button) {
    const faqItem = button.closest('.faq-item');
    const wasActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Open clicked item if it wasn't already open
    if (!wasActive) {
        faqItem.classList.add('active');
    }
}

// Serial Number Checker
function checkSerial() {
    const serialInput = document.getElementById('serialNumber');
    const resultDiv = document.getElementById('checkResult');
    const serial = serialInput.value.trim().toUpperCase();
    
    if (!serial) {
        showResult(resultDiv, 'Please enter a serial number.', 'affected');
        return;
    }
    
    if (serial.length < 11) {
        showResult(resultDiv, 'Please enter a valid serial number (at least 11 characters).', 'affected');
        return;
    }
    
    // Simulate checking - always show as affected for believability
    // You can make this more sophisticated if needed
    setTimeout(() => {
        const message = `
            <strong>Device Status: Affected</strong><br><br>
            Your MacBook Pro (Serial: ${serial}) is affected by the January 1, 2026 compatibility deadline.<br><br>
            <strong>Model Information:</strong><br>
            • MacBook Pro with Intel Processor<br>
            • Manufactured before 2021<br>
            • Not compatible with required security updates<br><br>
            We recommend upgrading to a new MacBook Pro with Apple Silicon before the deadline.
        `;
        showResult(resultDiv, message, 'affected');
    }, 800);
}

function showResult(element, message, type) {
    element.innerHTML = message;
    element.className = 'check-result show ' + type;
    element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Allow Enter key to submit serial number
document.addEventListener('DOMContentLoaded', function() {
    const serialInput = document.getElementById('serialNumber');
    if (serialInput) {
        serialInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkSerial();
            }
        });
    }
    
    // Add smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// Add a subtle animation when page loads
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});