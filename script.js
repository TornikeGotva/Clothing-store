"use strict";

const clotheImgs = document.querySelectorAll(".clothe_img");
const clotheBtn = document.querySelectorAll(".clothe_button");
const jeansBtn = document.querySelector(".navigation_list_jeans");
const jeanstoggle = document.querySelectorAll(".jeans_hidden");
const newsletterBtn = document.getElementById("newsletter");
const popUp = document.querySelector(".popup");
const boxImg = document.querySelector(".box");
const clothesBox = document.querySelector(".clothes");
const footerBox = document.querySelector(".footer");
const popupIcon = document.getElementById("icon");
const popupOverlay = document.querySelector(".overlay");
const subscribeBtn = document.getElementById("subscribe");
const subscribeScroll = document.getElementById("subscribeScroll");
const contactScroll = document.getElementById("contactScroll");
const footerInfo = document.querySelector(".footer_info");

// Display jeans
jeansBtn.addEventListener("click", function () {
  jeanstoggle.forEach((el) => {
    el.style.display = el.style.display === "none" ? "block" : "none";
  });
});

// Close popup and overlay while clicking outside
function closePopup(e) {
  const id = e.target;
  if (id == popupOverlay) {
    popUp.classList.add("popup_hidden");
    popupOverlay.classList.add("overlay_hidden");
  }
}

// Display popup and overlay
function displayNewsletter() {
  popUp.classList.remove("popup_hidden");
  popupOverlay.classList.remove("overlay_hidden");
}

// Close popup and overlay
function closeNewsletter() {
  popUp.classList.add("popup_hidden");
  popupOverlay.classList.add("overlay_hidden");
}

function scrollView() {
  footerInfo.scrollIntoView({ behavior: "smooth" });
}

newsletterBtn.addEventListener("click", displayNewsletter);
popupIcon.addEventListener("click", closeNewsletter);
popupOverlay.addEventListener("click", closePopup);
subscribeBtn.addEventListener("click", closeNewsletter);
contactScroll.addEventListener("click", scrollView);
subscribeScroll.addEventListener("click", scrollView);
