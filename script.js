// ===========================
// Typing Animation
// ===========================

const typingElement = document.getElementById("typing");

const words = [
    "Frontend Developer",
    "Web Designer",
    "JavaScript Developer",
    "Freelancer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length)
                wordIndex = 0;
        }
    }

    setTimeout(typeEffect, deleting ? 50 : 120);
}

typeEffect();


// ===========================
// Scroll Animation
// ===========================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.2
});

document.querySelectorAll("section").forEach(sec=>{

sec.classList.add("hidden");

observer.observe(sec);

});


// ===========================
// Navbar Active Link
// ===========================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

if(scrollY>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


// ===========================
// Navbar Background
// ===========================

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

header.classList.toggle("sticky",window.scrollY>50);

});


// ===========================
// Back To Top Button
// ===========================

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ===========================
// Skill Animation
// ===========================

const skillSection = document.querySelector("#skills");
const bars = document.querySelectorAll(".skill-fill");

let started = false;

window.addEventListener("scroll",()=>{

const sectionTop = skillSection.offsetTop - 350;

if(window.scrollY >= sectionTop && !started){

bars.forEach(bar=>{

const width = bar.style.width;

bar.style.width = "0";

setTimeout(()=>{

bar.style.width = width;

},300);

});

started = true;

}

});

const form = document.getElementById("contact-form");
const result = document.getElementById("result");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    result.innerHTML = "⏳ Sending Message...";
    result.style.color = "#ffffff";

    const formData = new FormData(form);

    try {

        const response = await fetch(form.action, {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {

            result.innerHTML = `
            <div class="success-box">
                <div class="success-check">✓</div>
                <h2>Thank You!</h2>
                <p>Your message has been sent successfully.</p>
            </div>
            `;

            form.reset();

            setTimeout(() => {
                result.innerHTML = "";
            }, 4000);

        } else {

            result.innerHTML = "❌ Failed to send message.";
            result.style.color = "red";

        }

    } catch (error) {

        result.innerHTML = "❌ Network Error";
        result.style.color = "red";

    }

});

// Mobile Navbar

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {

            navLinks.classList.toggle("active");

            if (navLinks.classList.contains("active")) {
                menuToggle.innerHTML = "✕";
            } else {
                menuToggle.innerHTML = "☰";
            }

        });

        // Menu link click hone par menu close hoga
        const links = navLinks.querySelectorAll("a");

        links.forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("active");
                menuToggle.innerHTML = "☰";

            });

        });

    } else {

        console.log("Mobile navbar elements not found");

    }

});