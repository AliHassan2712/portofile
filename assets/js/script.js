const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

addEventOnElements(navTogglers, "click", toggleNavbar);

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
  for (let i = 0; i < revealElements.length; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    }
  }
};

for (let i = 0; i < revealDelayElements.length; i++) {
  revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

const progressFills = document.querySelectorAll('.progress-fill');

function animateProgress() {
  const triggerPoint = window.innerHeight;

  progressFills.forEach(fill => {
    const rect = fill.getBoundingClientRect();
    if (rect.top <= triggerPoint) {
      fill.style.width = fill.dataset.prog;
    } else {
      fill.style.width = '0';
    }
  });
}

window.addEventListener('scroll', animateProgress);
window.addEventListener('load', animateProgress);


//Validation for contact form
const contactForm = document.querySelector(".contact-form");

const validateForm = (event) => {
  event.preventDefault();

  const nameInput = contactForm.querySelector('input[name="name"]');
  const emailInput = contactForm.querySelector('input[name="email_address"]');
  const messageInput = contactForm.querySelector('textarea[name="message"]');

  const nameError = nameInput.nextElementSibling;
  const emailError = emailInput.nextElementSibling;
  const messageError = messageInput.nextElementSibling;

  let isValid = true;

  // Clear previous errors
  [nameError, emailError, messageError].forEach((el) => {
    el.textContent = "";
    el.style.display = "none";
  });

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

  if (nameInput.value.trim() === "") {
    nameError.textContent = "Please enter your name.";
    nameError.style.display = "block";
    isValid = false;
  }

  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = "Please enter a valid email.";
    emailError.style.display = "block";
    isValid = false;
  }

  if (messageInput.value.trim() === "") {
    messageError.textContent = "Please enter your message.";
    messageError.style.display = "block";
    isValid = false;
  }

  if (isValid) {
    contactForm.submit(); // Form is valid, proceed to submit
  }
};

contactForm.addEventListener("submit", validateForm);
