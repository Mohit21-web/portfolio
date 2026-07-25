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
const popup = document.getElementById("success-popup");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    await fetch("https://formsubmit.co/ajax/mohitsingh675787@gmail.com", {
        method: "POST",
        body: data
    });

    popup.classList.add("show");

    form.reset();

    setTimeout(() => {
        popup.classList.remove("show");
        window.location.href = "#home";
    }, 3000);
});

const form = document.getElementById("contact-form");
const result = document.getElementById("result");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    result.innerHTML = "Sending...";

    const formData = new FormData(form);

    const response = await fetch(form.action, {
        method: "POST",
        body: formData
    });

    const data = await response.json();

    if (data.success) {
        result.innerHTML = "✅ Message sent successfully!";
        result.style.color = "#00E5FF";
        form.reset();

        setTimeout(() => {
            result.innerHTML = "";
        }, 4000);

    } else {
        result.innerHTML = "❌ Failed to send message.";
        result.style.color = "red";
    }
});