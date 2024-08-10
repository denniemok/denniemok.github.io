'use strict';

// element toggle function
const elementToggleFunc = (elem) => elem.classList.toggle("active");

// testimonials variables
const testimonialsItem = document.querySelectorAll(".testimonials-list .testimonials-item");
const modalContainer = document.querySelector(".modal-container");
const modalCloseBtn = document.querySelector(".modal-close-btn");
const modalOverlay = document.querySelector(".modal-overlay");

// modal variable
const modalImg = document.querySelector(".testimonials-modal .profile .avatar");
const modalTitle = document.querySelector(".testimonials-modal .profile .title");
const modalSubtitle = document.querySelector(".testimonials-modal .profile .subtitle");
const modalText = document.querySelector(".testimonials-modal .text-full");

// modal toggle function
const testimonialsModalFunc = () => {
  modalContainer.classList.toggle("active");
  modalOverlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", (evt) => {
    modalImg.src = evt.currentTarget.querySelector(".profile .avatar").src;
    modalImg.alt = evt.currentTarget.querySelector(".profile .avatar").alt;
    modalTitle.innerHTML = evt.currentTarget.querySelector(".profile .title").innerHTML;
    modalSubtitle.innerHTML = evt.currentTarget.querySelector(".profile .subtitle").innerHTML;
    modalText.innerHTML = evt.currentTarget.querySelector(".text").innerHTML;
    testimonialsModalFunc();
  });
}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
modalOverlay.addEventListener("click", testimonialsModalFunc);

// custom select variables
const select = document.querySelector(".filter-select");
const selectItems = document.querySelectorAll(".select-item button");
const selectValue = document.querySelector(".select-value");
const filterBtn = document.querySelectorAll(".filter-item button");

select.addEventListener("click", (evt) => elementToggleFunc(evt.currentTarget));

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", (evt) => {
    let selectedValue = evt.currentTarget.innerText.toLowerCase();
    selectValue.innerText = evt.currentTarget.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll(".project-item");

for (let i = 0; i < filterItems.length; i++) {
  filterItems[i].addEventListener("click", (evt) => {
    evt.currentTarget.querySelector(".spoiler summary a").click();
  });
}

const serviceItems = document.querySelectorAll(".service-item");

for (let i = 0; i < serviceItems.length; i++) {
  serviceItems[i].addEventListener("click", (evt) => {
    evt.currentTarget.querySelector(".spoiler summary a").click();
  });
}

const filterFunc = (selectedValue) => {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else {
      const a = filterItems[i].dataset.category.split(",");
      if (a.includes(selectedValue)) {
        filterItems[i].classList.add("active");
      } else {
        filterItems[i].classList.remove("active");
      }
    }
  }
}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", (evt) => {
    let selectedValue = evt.currentTarget.innerText.toLowerCase();
    selectValue.innerText = evt.currentTarget.innerText;
    filterFunc(selectedValue);
    lastClickedBtn.classList.remove("active");
    evt.currentTarget.classList.add("active");
    lastClickedBtn = evt.currentTarget;
  });
}

// contact form variables
const form = document.querySelector(".contact-form");
const formInputs = document.querySelectorAll(".form-input");
const formBtn = document.querySelector(".form-btn");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", () => {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll(".navbar-link");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", (evt) => {
    for (let i = 0; i < pages.length; i++) {
      if (evt.currentTarget.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}