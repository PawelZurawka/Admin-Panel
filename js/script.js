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
var quitBtn = document.getElementById('quitBtn');

function closeModal() {
  document.getElementById('overlay').classList.remove('show')
}

document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    closeModal();
  });
});

document.querySelector('#overlay').addEventListener('click', function(e) {
  if(e.target === this) {
    closeModal();
  }
});

document.addEventListener('keyup', function(e) {
  if(e.keyCode === 27) {
    closeModal();
  }
});

function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    modal.classList.remove('show');
  });
  document.querySelector('#overlay').classList.add ('show');
  document.querySelector(modal).classList.add('show');
}

quitBtn.addEventListener('click', function() {
  openModal('#myModal');
});

//quitBtn.onclick = function() {
//	openModal('#myModal');
//};


/*var name = this.getAttribute("href");
     document.querySelector(name).classList.add('show');

document.querySelectorAll('.modal').forEach(function(modal){
  modal.classList.remove('show');
});*/


/*
$(window).on('resize', function() {
  var win = $(this);
  if (window.screen.width <= 767) {

    $('body').removeClass('active-menu');

  } else {
    $('body').addClass('active-menu');
  }
});

function toggleMenu(visible) {
  document.querySelector('body').classList.toggle('active-menu', visible);
}

var mq = window.matchMedia( "(max-width: 767px)" );

if (mq == true) {
  toogleMenu();
}



document.getElementById("hamburger").addEventListener("click", function () {
  
  document.querySelector(".sidebar").classList.toggle("sidebar-narrow");
  
  document.querySelector(".sidebar__logo-wrapper").classList.toggle("sidebar-narrow__logo-wrapper");

  document.querySelector(".sidebar__logo").classList.toggle("sidebar-narrow__logo");
  
  document.querySelector(".sidebar__hamburger-icon").classList.toggle("sidebar-narrow__hamburger-icon");

  document.querySelector(".sidebar__manager-header").classList.toggle("sidebar-narrow__manager-header");

  document.querySelector(".sidebar__manager-photo").classList.toggle("sidebar-narrow__manager-photo");

  document.querySelector(".sidebar__manager-name").classList.toggle("sidebar-narrow__manager-name");


  //document.querySelector(".sidebar__icon").classList.toggle("sidebar-narrow__icon");
  var sideBar = document.querySelectorAll(".sidebar__icon");
  for (var i = 0; i < sideBar.length; i++) {
    sideBar[i].classList.toggle("sidebar-narrow__icon");
  }

  //document.querySelector(".sidebar__tab-name").classList.toggle("sidebar-narrow__tab-name");
  var listName = document.querySelectorAll(".sidebar__tab-name");
  for (var e = 0; e < listName.length; e++) {
    listName[e].classList.toggle("sidebar-narrow__tab-name");
  }

  //document.querySelector(".container").classList.toggle("container--narrow-menu");
  var containerFluid = document.querySelectorAll(".container--fluid");
  for (var f = 0; f < containerFluid.length; f++) {
    containerFluid[f].classList.toggle("container--fluid-narrow-menu");
  }

});*/