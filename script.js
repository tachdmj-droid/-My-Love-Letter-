function openLetter() {
    document.querySelector('.wrapper').classList.add('open');
}

const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const successMessage = document.getElementById('success-message');
const questionArea = document.getElementById('question-area');

// মোবাইলে টাচ করলে বা কম্পিউটারে মাউস নিলেই নো বাটন পালাবে
function moveNoButton() {
    // স্ক্রিনের সাইজ অনুযায়ী বাটনটি কতটুকু সরতে পারবে তা হিসাব করা
    const padding = 20;
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    // রান্ডম পজিশন তৈরি করা
    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

    // বাটনটিকে স্ক্রিনের যেকোনো জায়গায় পাঠিয়ে দেওয়া
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    noBtn.style.zIndex = '9999';
}

// মাউস এবং টাচ দুটোর জন্যই ইভেন্ট যোগ করা হলো
noBtn.addEventListener('mouseenter', moveNoButton);
noBtn.addEventListener('touchstart', function(e) {
    e.preventDefault(); // টাচ করলে যেন ক্লিক না হয়ে বাটনটি পালায়
    moveNoButton();
});

// ইয়েস বাটনে ক্লিক করলে যা হবে
yesBtn.addEventListener('click', () => {
    questionArea.classList.add('hidden');
    successMessage.classList.remove('hidden');
    
    // ইয়েস চাপার পর নো বাটন উধাও করে দেওয়া
    noBtn.style.display = 'none'; 
});
