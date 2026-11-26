// MOBILE MENU

function toggleMenu() {

    const nav = document.getElementById("navLinks");

    nav.classList.toggle("active");

}

// GLITTER PARTICLES

const particleContainer = document.getElementById("particles");

for (let i = 0; i < 80; i++) {

    const sparkle = document.createElement("div");

    sparkle.classList.add("sparkle");

    sparkle.style.left = Math.random() * 100 + "%";

    sparkle.style.top = Math.random() * 100 + "%";

    sparkle.style.animationDelay = Math.random() * 4 + "s";

    sparkle.style.animationDuration =
        (2 + Math.random() * 4) + "s";

    particleContainer.appendChild(sparkle);

}

// CLOSE MOBILE MENU AFTER CLICK

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        document.getElementById("navLinks")
            .classList.remove("active");

    });

});

// CONSOLE MESSAGE

console.log(
    "Welcome to Vembu Jaishankar's Portfolio!"
);