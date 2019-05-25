'use strict';

//CHANGE MENU SIZE WHEN CLICK TO HAMBURGER
function toggleMenu(visible) {
  document.querySelector('body').classList.toggle('active-menu', visible);
}

document.querySelector('#hamburger').addEventListener('click', function(i) {
  i.preventDefault();
  toggleMenu();
});

//CHANGE MENU SIZE (ONLOAD)
var onLoad = function() {
  document.querySelector('body').classList.add('active-menu');
};

if (window.screen.width > 767) {
  onLoad();
}

//CHANGE MENU SIZE (RESIZE)
window.addEventListener('resize', function() {
  if (window.screen.width < 767) {
    document.querySelector('body').classList.remove('active-menu');
  }
  else { 
    document.querySelector('body').classList.add('active-menu');
  }
});

//MODALS
function closeModal() {
  document.getElementById('overlay').classList.remove('show')
}
//CLOSE MODAL ON CLICK BUTTON
document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    closeModal();
  });
});
//CLOSE MODAL ON CLICK OVERLAY
document.querySelector('#overlay').addEventListener('click', function(e) {
  if(e.target === this) {
    closeModal();
  }
});
//CLOSE MODAL ESC BUTTON
document.addEventListener('keyup', function(e) {
  if(e.keyCode === 27) {
    closeModal();
  }
});

//LOOP FOR OPEN MODAL BUTTONS
var modals = document.querySelectorAll('.modal');
var overlay = document.querySelector('#overlay');

var showModal = function(event) {
  event.preventDefault();
  for (var i = 0; i < modals.length; i++) {
    modals[i].classList.remove('show');
  }
  document.querySelector(this.getAttribute('href')).classList.add('show');
  overlay.classList.add('show');
};

var buttons = document.querySelectorAll('.open-modal-btn');

for(var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', showModal);
}