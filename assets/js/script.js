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
const modalText = document.querySelector(".testimonials-modal .content-full");

// modal toggle function
const testimonialsModalFunc = () => {
  modalContainer.classList.toggle("active");
  modalOverlay.classList.toggle("active");
}

// add click event to all modal items
testimonialsItem.forEach(item => {
  item.addEventListener("click", () => {
    modalImg.src = item.querySelector(".profile .avatar").src;
    modalImg.alt = item.querySelector(".profile .avatar").alt;
    modalTitle.innerHTML = item.querySelector(".profile .title").innerHTML;
    modalSubtitle.innerHTML = item.querySelector(".profile .subtitle").innerHTML;
    modalText.innerHTML = item.querySelector(".content").innerHTML;
    testimonialsModalFunc();
  });
});

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
modalOverlay.addEventListener("click", testimonialsModalFunc);

// custom select variables
const select = document.querySelector(".filter-select");
const selectItems = document.querySelectorAll(".select-item button");
const selectValue = document.querySelector(".select-value");
const filterBtn = document.querySelectorAll(".filter-item button");

select.addEventListener("click", () => elementToggleFunc(select));

// add event in all select items
selectItems.forEach(item => {
  item.addEventListener("click", () => {
    let selectedValue = item.innerText.toLowerCase();
    selectValue.innerText = item.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
});

// item variables
const filterItems = document.querySelectorAll(".project-item");
const serviceItems = document.querySelectorAll(".service-item");

[...filterItems, ...serviceItems].forEach(item => {
  item.addEventListener("click", () => {
    const item2 = item.querySelector(".spoiler");
    item2.hasAttribute('open') ? item2.removeAttribute('open') : item2.setAttribute('open', true);
  });
  item.querySelector(".spoiler").addEventListener("click", (evt) => {
    evt.preventDefault();
  });
});

const filterFunc = (selectedValue) => {
  filterItems.forEach(item => {
    if (selectedValue === "all") {
      item.classList.add("active");
    } else {
      const a = item.dataset.category.split(",");
      if (a.includes(selectedValue)) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    }
  });
}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

filterBtn.forEach(btn => {
  btn.addEventListener("click", () => {
    let selectedValue = btn.innerText.toLowerCase();
    selectValue.innerText = btn.innerText;
    filterFunc(selectedValue);
    lastClickedBtn.classList.remove("active");
    btn.classList.add("active");
    lastClickedBtn = btn;
  });
});

// contact form variables
const form = document.querySelector(".contact-form");
const formInputs = document.querySelectorAll(".form-input");
const formBtn = document.querySelector(".form-btn");

// add event to all form input field
formInputs.forEach(input => {
  input.addEventListener("input", () => {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
});

// page navigation variables
const navigationLinks = document.querySelectorAll(".navbar-link");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
navigationLinks.forEach(link => {
  link.addEventListener("click", () => {
    pages.forEach((page, i) => {
      if (link.innerHTML.toLowerCase() === page.getAttribute("data-page")) {
        page.classList.add("active");
        link.classList.add("active");
        window.scrollTo(0, 0);
      } else {
        page.classList.remove("active");
        navigationLinks[i].classList.remove("active"); // for that particular link
      }
    });
  });
});