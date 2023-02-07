const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".menu-button");
const closeIcon= document.querySelector(".closeIcon");
const menuButton = document.querySelector(".menu-button");
const menuIcon = document.querySelector(".menu-icon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    menuIcon.classList.remove("showMenu");
    menuButton.style.color = "black";
    menuButton.style.border = "1px solid #000";
    menuIcon.style.backgroundColor = "black";
    menuIcon.style.setProperty('--black', 'black');
  } else {
    menu.classList.add("showMenu");
    menuIcon.classList.add("showMenu");
    menuButton.style.color = "white";
    menuButton.style.border = "1px solid #fff";
    menuIcon.style.backgroundColor = "white";
    menuIcon.style.setProperty('--black', 'white');
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)

let currentImg = document.getElementById("current-img");
let prevBtn = document.getElementById("prev-btn");
let nextBtn = document.getElementById("next-btn");
let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightbox-img");
let lightboxPrev = document.getElementById("lightbox-prev");
let lightboxNext = document.getElementById("lightbox-next");
let lightboxClose = document.getElementById("lightbox-close");
let viewAll = document.getElementById("view-all");

let images = ["./assets/images/hori.jpg", "./assets/images/vertical.jpg"];
let currentIndex = 0;

currentImg.addEventListener("click", function() {
  lightboxImg.src = currentImg.src;
  lightbox.style.display = "block";
});

viewAll.addEventListener("click", function() {
  lightboxImg.src = currentImg.src;
  lightbox.style.display = "block";
});

lightboxClose.addEventListener("click", function() {
  lightbox.style.display = "none";
});

prevBtn.addEventListener("click", function() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  currentImg.src = images[currentIndex];
});

nextBtn.addEventListener("click", function() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  currentImg.src = images[currentIndex];
});

lightboxPrev.addEventListener("click", function() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  lightboxImg.src = images[currentIndex];
});

lightboxNext.addEventListener("click", function() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  lightboxImg.src = images[currentIndex];
});


function sendForm() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  if (!name || !phone || !message) {
    alert("Please fill out all the fields before submitting.");
    return;
  }

  if (!/^[a-zA-Z\s]+$/.test(name)) {
    alert("Name can only contain letters and spaces.");
    return;
  }

  if (!/^\d+$/.test(phone)) {
    alert("Phone number can only contain numbers.");
    return;
  }

  emailjs.sendForm('your_email_service', 'your_template_id', 'form_id')
    .then(function(response) {
       console.log('Email successfully sent!')
    }, function(error) {
       console.log('Failed to send email: ' + error);
    });
}