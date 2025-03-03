// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// Ketika menu di klik
document.querySelector('#hamburger-menu').onclick = (e) => {
  e.preventDefault();
  navbarNav.classList.toggle("active");
};

// Toggle class active search
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
};

// Klik diluar
const hamburger = document.querySelector("#hamburger-menu");
const search = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!search.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }
});

// Modal Box
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    const modalId = btn.getAttribute('data-modal');
    const itemDetailModal = document.querySelector(`#${modalId}`);
    itemDetailModal.style.display = 'flex';
    e.preventDefault();
  };
});

// klik tombol close modal
document.querySelectorAll('.modal .close-icon').forEach((closeBtn) => {
  closeBtn.onclick = (e) => {
    closeBtn.closest('.modal').style.display = 'none';
    e.preventDefault();
  };
});

// klik di luar modal
window.onclick = (e) => {
  if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
  }
};