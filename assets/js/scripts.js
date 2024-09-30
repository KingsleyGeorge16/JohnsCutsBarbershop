'use strict';

// add event on element
const addEventOnElem = function(elem, type, callback){
    if(elem.length > 1){
        for(let i = 0; i < elem.length; i++){
            elem[i].addEventListener(type, callback);
        }
    } else{
        elem.addEventListener(type, callback)
    }
}


// Navbar Toggle
const navbar = document.querySelector("[data-nav]");
const navToggler = document.querySelector("[data-nav-btn]");
const navLinks = document.querySelectorAll("[data-nav-links]");

const toggleNavbar = () => navbar.classList.toggle("active");

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = () => navbar.classList.remove("active");

addEventOnElem(navLinks, "click", closeNavbar);


// Header & Back To The Top Btn active when scroll down to 100px
const head = document.querySelector("[data-head]");
const backToTopBtn = document.querySelector("[data-back-to-top-btn]");

const headActive = function(){
    if(window.scrollY > 100){
        head.classList.add("active");
        backToTopBtn.classList.add("active");
    } else{
        head.classList.remove("active");
        backToTopBtn.classList.remove("active");
    }
}

addEventOnElem(window, "scroll", headActive);


// Pricing Btn
const pricingBtns = document.querySelectorAll("[data-pricing-btn]");
const pricingItems = document.querySelectorAll("[data-filter]");

let lastClickedPricingBtn = pricingBtns[0];

const filter = function(){
    lastClickedPricingBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedPricingBtn = this;

    for(let i = 0; i < pricingItems.length; i++){
        if(this.dataset.pricingBtn == pricingItems[i].dataset.filter || 
           this.dataset.pricingBtn == "all"){

            pricingItems[i].style.display = "block";
            pricingItems[i].classList.add("active");

        } else{

            pricingItems[i].style.display = "none";
            pricingItems[i].classList.remove("active");

        }
    }
}

addEventOnElem(pricingBtns, "click", filter);


// Back To The Top
