// খাম খোলার ফাংশন
function openLetter() {
    const wrapper = document.querySelector('.desktop-wrapper') || document.querySelector('.wrapper');
    if (wrapper) {
        wrapper.classList.add('open');
    }
    
    // envelope-container হাইড করে চিঠি শো করা
    const envelopeContainer = document.getElementById('envelope-container');
    const letterContainer = document.getElementById('letter-container');
    
    if (envelopeContainer && letterContainer) {
        envelopeContainer.style.display = 'none';
        letterContainer.classList.remove('hidden');
    }
}

// খামের ওপর বা হার্ট চিহ্নে ক্লিক করলেই যেন চিঠি খোলে
document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.querySelector('.envelope');
    if (envelope) {
        envelope.addEventListener('click', openLetter);
        envelope.addEventListener('touchstart', function(e) {
            openLetter();
        });
    }
});

const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const successMessage = document.getElementById('success-message');
const questionArea = document.getElementById('question-area');

// মোবাইলে টাচ করলে বা কম্পিউটারে মাউস নিলেই নো বাটন পালাবে
function moveNoButton() {
    const padding = 20;
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    noBtn.style.zIndex = '9999';
}

if (noBtn) {
    noBtn.addEventListener('mouseenter', moveNoButton);
    noBtn.addEventListener('touchstart', function(e) {
        e.preventDefault(); 
        moveNoButton();
    });
}

// ইয়েস বাটনে ক্লিক করলে যা হবে
if (yesBtn) {
    yesBtn.addEventListener('click', () => {
        questionArea.classList.add('hidden');
        successMessage.classList.remove('hidden');
        if (noBtn) noBtn.style.display = 'none'; 
    });
}
