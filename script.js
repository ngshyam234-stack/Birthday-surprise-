
/* =====================================
   BIRTHDAY DATE - INDIA TIME
===================================== */

// Midnight on 17 November 2026 in India
const birthday = new Date(
    "2026-11-16T18:30:00Z"
).getTime();


/* =====================================
   PHASE CONTROL
===================================== */

const preBirthday = document.getElementById("preBirthday");

const birthdayPage = document.getElementById("birthdayPage");

const birthdayGallery = document.getElementById("birthdayGallery");

const surpriseScreen = document.getElementById("surpriseScreen");

const countdown = {
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    minutes: document.getElementById("minutes"),
    seconds: document.getElementById("seconds")
};

let birthdayUnlocked = false;

function showBirthdayPage() {

    if (birthdayUnlocked) return;

    birthdayUnlocked = true;

    // Hide the secret countdown page
    preBirthday.classList.add("hidden");

    // Show the actual birthday website
    birthdayPage.classList.remove("hidden");

    birthdayGallery.classList.remove("hidden");

    // Start birthday celebration
    createConfetti(100);
    createHearts(25);

    setTimeout(() => {
        createFireworks();
    }, 500);
}


/* =====================================
   LIVE COUNTDOWN
===================================== */

function updateCountdown() {

    const now = Date.now();

    const difference = birthday - now;

    if (difference <= 0) {

        showBirthdayPage();

        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    countdown.days.textContent = String(days).padStart(2, "0");

    countdown.hours.textContent = String(hours).padStart(2, "0");

    countdown.minutes.textContent = String(minutes).padStart(2, "0");

    countdown.seconds.textContent = String(seconds).padStart(2, "0");

}

function checkBirthday() {

    if (Date.now() >= birthday) {

        showBirthdayPage();

    } else {

        updateCountdown();

    }

}

// Check immediately when the website opens
checkBirthday();

// Update every second
setInterval(checkBirthday, 1000);


/* =====================================
   SURPRISE BUTTON
===================================== */

const surpriseBtn = document.getElementById("surpriseBtn");

const closeSurprise = document.getElementById("closeSurprise");

surpriseBtn.addEventListener("click", function() {

    // Open full-screen surprise
    surpriseScreen.classList.remove("hidden");

    document.body.style.overflow = "hidden";

    // BIG CELEBRATION!
    createConfetti(180);

    createHearts(50);

    createFireworks();

});

closeSurprise.addEventListener("click", function() {

    surpriseScreen.classList.add("hidden");

    document.body.style.overflow = "";

});


/* =====================================
   CONFETTI EXPLOSION
===================================== */

function createConfetti(amount) {

    const colors = [
        "#ff0080",
        "#ffffff",
        "#ffd700",
        "#ff69b4",
        "#a855f7",
        "#00ffff"
    ];

    for (let i = 0; i < amount; i++) {

        const piece = document.createElement("div");

        piece.className = "confetti";

        piece.style.left = Math.random() * 100 + "vw";

        piece.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        piece.style.animationDuration =
            (2 + Math.random() * 4) + "s";

        piece.style.animationDelay =
            Math.random() * 2 + "s";

        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        document.body.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 7000);

    }

}


/* =====================================
   FLOATING HEARTS
===================================== */

function createHearts(amount) {

    const emojis = [
        "💗",
        "💕",
        "💖",
        "❤️",
        "🌸",
        "✨",
        "💝"
    ];

    for (let i = 0; i < amount; i++) {

        const heart = document.createElement("div");

        heart.className = "floating-heart";

        heart.innerHTML =
            emojis[Math.floor(Math.random() * emojis.length)];

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.animationDuration =
            (3 + Math.random() * 4) + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 7000);

    }

}


/* =====================================
   FIREWORKS CELEBRATION
===================================== */

function createFireworks() {

    const fireworks = document.getElementById("fireworks");

    for (let i = 0; i < 8; i++) {

        setTimeout(() => {

            const firework = document.createElement("div");

            firework.className = "firework";

            firework.style.left =
                (10 + Math.random() * 80) + "%";

            firework.style.top =
                (10 + Math.random() * 70) + "%";

            fireworks.appendChild(firework);

            setTimeout(() => {
                firework.remove();
            }, 1600);

        }, i * 350);

    }

}


/* =====================================
   AUTOMATIC FLOATING HEARTS
===================================== */

setInterval(() => {

    // Do not create extra hearts before the birthday
    if (!birthdayUnlocked) return;

    const heart = document.createElement("div");

    heart.className = "floating-heart";

    heart.innerHTML = "💗";

    heart.style.left = Math.random() * 100 + "vw";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);

}, 1500);
