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

// Mobile navigation toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if(menuToggle && navLinks){
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Sticky Header Shadow
window.addEventListener("scroll", function(){

    const header = document.querySelector("header");

    if(header){
        if(window.scrollY > 50){
            header.style.boxShadow="0 10px 30px rgba(0,0,0,.12)";
        }else{
            header.style.boxShadow="0 5px 20px rgba(0,0,0,.06)";
        }
    }

});

// Reveal-on-scroll animation
const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }

    });

});

document.querySelectorAll(
".product-card,.feature-box,.category-card,.testimonial-card,.about-home,.section-title,.hero-left,.hero-right"
).forEach((el)=>{
    el.classList.add('reveal');
    observer.observe(el);
});

// Product Hover Effect
document.querySelectorAll(".product-card, .premium-product-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{
        card.style.transform="translateY(-12px)";
    });

    card.addEventListener("mouseleave",()=>{
        card.style.transform="translateY(0px)";
    });

    const href = card.getAttribute("data-href");
    if(href){
        card.style.cursor = "pointer";
        card.addEventListener("click", (event)=>{
            if(event.target.closest("a")) return;
            window.location.href = href;
        });
    }

});

// Page loading animation
window.addEventListener('load', () => {
    const loader = document.querySelector('.page-loading');
    if(loader){
        loader.classList.add('fade-out');
        setTimeout(() => loader.remove(), 350);
    }
    document.body.style.opacity = '1';
});

// Search modal
const searchBtn = document.querySelector('.search-btn');
const searchModal = document.querySelector('.search-modal');
const searchInput = document.querySelector('.search-modal input');
const searchResults = document.querySelector('.search-results');

const products = [
    {title:'Karuppu Kavuni Rice', url:'karuppu-kavuni.html'},
    {title:'Mappillai Samba Rice', url:'mappillai-samba.html'},
    {title:'Thinai', url:'thinai.html'},
    {title:'Kuthiraivali', url:'kuthiraivali.html'},
    {title:'Sivapu Solam', url:'sivapu-solam.html'}
];

function renderSearchResults(query) {
    const value = query.toLowerCase();
    const matches = products.filter(product => product.title.toLowerCase().includes(value));
    if(!searchResults) return;
    if(!value){ searchResults.innerHTML=''; return; }
    searchResults.innerHTML = matches.length ? matches.map(product => `<a href="${product.url}">${product.title}</a>`).join('') : '<a href="products.html">No match found. View all products</a>';
}

if(searchBtn && searchModal && searchInput && searchResults){
    searchBtn.addEventListener('click', () => {
        searchModal.classList.add('active');
        searchInput.focus();
    });

    document.querySelector('.search-modal .close').addEventListener('click', () => {
        searchModal.classList.remove('active');
    });

    searchModal.addEventListener('click', (event) => {
        if(event.target === searchModal){ searchModal.classList.remove('active'); }
    });

    searchInput.addEventListener('input', (event) => renderSearchResults(event.target.value));
}

// Floating WhatsApp Pulse
const whatsapp=document.querySelector('.floating-whatsapp');

if(whatsapp){
    setInterval(()=>{
        whatsapp.classList.toggle('pulse');
    },1000);
}

console.log('Mayil Organics Website Loaded Successfully');
