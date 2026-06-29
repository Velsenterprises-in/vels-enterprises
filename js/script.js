// ==============================
// MAYIL ORGANICS
// by VELS ENTERPRISES
// ==============================

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){
            target.scrollIntoView({
                behavior:'smooth'
            });
        }
    });
});

// Sticky Header Shadow
window.addEventListener("scroll", function(){

    const header = document.querySelector("header");

    if(window.scrollY > 50){

        header.style.boxShadow="0 10px 30px rgba(0,0,0,.12)";

    }else{

        header.style.boxShadow="0 5px 20px rgba(0,0,0,.06)";

    }

});

// Fade-in Animation
const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(
".product-card,.feature-box,.category-card,.testimonial-card,.about-home"
).forEach((el)=>{

    observer.observe(el);

});

// Product Hover Effect
document.querySelectorAll(".product-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});

// Floating WhatsApp Pulse
const whatsapp=document.querySelector(".floating-whatsapp");

setInterval(()=>{

    whatsapp.classList.toggle("pulse");

},1000);

console.log("Mayil Organics Website Loaded Successfully");
