const envelope = document.querySelector('.envelope');
const envelopeContainer = document.getElementById('envelope-container');
const letterContainer = document.getElementById('letter-container');
const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const questionArea = document.getElementById('question-area');
const successMessage = document.getElementById('success-message');
const heartRainContainer = document.getElementById('heart-rain-container');

// খাম খোলার প্রথম ক্লিক ফাংশন
function openLetter() {
    envelope.classList.add('open');
    
    // ১.৫ সেকেন্ড পর খামের স্ক্রিন থেকে চিঠির স্ক্রিনে নিয়ে যাবে
    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
        letterContainer.classList.remove('hidden');
    }, 1500);
}

// 'No' বাটনের লাফানোর ম্যাজিক
const moveButton = () => {
    // মোবাইল স্ক্রিন ও ডেক্সটপ বক্সের সীমানার ভেতরে বাটনটি লাফাবে
    const wrapper = document.querySelector('.desktop-wrapper');
    const rect = wrapper.getBoundingClientRect();
    
    // বক্সের ভেতরের র‍্যান্ডম পজিশন নির্ণয়
    const x = Math.random() * (rect.width - 100);
    const y = Math.random() * (rect.height - 100);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
};

noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // ফোনে টাচ ধরলে যেন জুম বা স্ক্রল না হয়
    moveButton();
});

// ৫ সেকেন্ড পর নো বাটন উধাও করে দেওয়ার টাইমার
setTimeout(() => {
    noBtn.style.display = 'none';
}, 5000);

// 'Yes' বাটনে ক্লিক করলে ভালোবাসার অ্যানিমেশন
function celebrateLove() {
    questionArea.classList.add('hidden');
    successMessage.classList.remove('hidden');
    
    // ভালোবাসার লাভ হার্ট বৃষ্টি (Heart Confetti) শুরু
    for (let i = 0; i < 100; i++) {
        createHeart();
    }
}

// প্রতিটি হার্ট তৈরি করার মেকানিজম
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('falling-heart');
    heart.innerHTML = '❤️';
    
    // স্ক্রিনের যেকোনো জায়গা থেকে হার্ট পড়া শুরু হবে
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 2 + 3) + 's'; // ৩ থেকে ৫ সেকেন্ডের মাঝে পড়বে
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px'; // একেক হার্ট একেক সাইজের হবে
    
    heartRainContainer.appendChild(heart);
    
    // নিচে পড়ে যাওয়ার পর মেমোরি খালি করতে হার্টটি ডিলিট করে দেওয়া হবে
    setTimeout(() => {
        heart.remove();
    }, 5000);
}
