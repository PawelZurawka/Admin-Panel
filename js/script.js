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
var onLoad = function() { //dlaczego jak miałem zapisane onLoad jako samą zmienną, a nie funkcję to przy odpalaniu na dużym ekranie dodawało klasę active-menu,ale na małym nie usuwało?
  document.querySelector('body').classList.add('active-menu');
};

if (window.screen.width > 767) {
  onLoad();
}

//CHANGE MENU SIZE (RESIZE) problem na komórce(jak się przewija rozwinięte menu to się odrazu zwija)
//window.addEventListener('resize', function() {
 // if (window.screen.width < 767) {
 //   document.querySelector('body').classList.remove('active-menu');
 // }
 // else { 
 //   document.querySelector('body').classList.add('active-menu');
 // }
//});

//MODALS
var quitBtn = document.getElementById('quit-btn');
var loginBtn = document.getElementById('login-btn');
var chatBtn = document.getElementById('chat-btn')

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
//OPEN MODAL
function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    modal.classList.remove('show');
  });
  document.querySelector('#overlay').classList.add ('show');
  document.querySelector(modal).classList.add('show');
}
//QUIT MODAL
quitBtn.addEventListener('click', function() {
  openModal('#quitModal');
});
//LOGIN MODAL
loginBtn.addEventListener('click', function() {
  openModal('#loginModal');
});
//CHAT MODAL
chatBtn.addEventListener('click', function() {
  openModal('#chatModal');
});'use strict';

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
var quitBtn = document.getElementById('quit-btn');
var loginBtn = document.getElementById('login-btn');
var chatBtn = document.getElementById('chat-btn')

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
//OPEN MODAL
function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    modal.classList.remove('show');
  });
  document.querySelector('#overlay').classList.add ('show');
  document.querySelector(modal).classList.add('show');
}

//"QUIT" MODAL
quitBtn.addEventListener('click', function() {
  openModal('#quitModal');
});
//LOGIN MODAL
loginBtn.addEventListener('click', function() {
  openModal('#loginModal');
});
//CHAT MODAL
chatBtn.addEventListener('click', function() {
  openModal('#chatModal');
});

/*var modalButtons = document.querySelectorAll('.open-modal-btn');
for (var i = 0; i < modalButtons.length; i++) {
  var self = modalButtons[i];

  self.addEventListener('click', function (event) {
    event.preventDefault();
    openModal(this);
  }, false);
}
console.log(modalButtons);*/