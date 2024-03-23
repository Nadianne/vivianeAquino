// Select The Elements
var toggle_btn;
var big_wrapper;
var hamburger_menu;

document.addEventListener('DOMContentLoaded', function () {
  var openModalContact = document.getElementById('openModalContact');
  var closeModalBtn = document.getElementById('closeModalBtn');
  var modal = document.getElementById('myModal');

  openModalContact.addEventListener('click', function () {
    modal.style.display = 'flex';
    document.body.classList.add('modal-open');
  });

  closeModalBtn.addEventListener('click', function () {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
  });

  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
      document.body.classList.remove('modal-open');
    }
  });

  window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && modal.style.display === 'flex') {
      modal.style.display = 'none';
      document.body.classList.remove('modal-open');
    }
  });
});

function declare() {
  toggle_btn = document.querySelector(".toggle-btn");
  big_wrapper = document.querySelector(".big-wrapper");
  hamburger_menu = document.querySelector(".hamburger-menu");
}

const main = document.querySelector("main");

declare();

let dark = false;

function toggleAnimation() {
  dark = !dark;

  if (dark) {
    big_wrapper.classList.remove("light");
    big_wrapper.classList.add("dark");
  } else {
    big_wrapper.classList.remove("dark");
    big_wrapper.classList.add("light");
  }

  document.body.classList.add("stop-scrolling");

  big_wrapper.addEventListener("transitionend", () => {
    document.body.classList.remove("stop-scrolling");
    // Reset Variables
    declare();
    events();
  });
}

function events() {
  toggle_btn.addEventListener("click", toggleAnimation);
  hamburger_menu.addEventListener("click", () => {
    big_wrapper.classList.toggle("active");
  });
}

events();
