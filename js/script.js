var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {
    // 1
    type: 'bar',
    data: {
        // 2
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
        // 3
        datasets: [{
            // 4
            label: "Signups",
            // 5
            backgroundColor: '#8DBEC8',
            borderColor: '#8DBEC8',
            // 6
            data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
        },
        {
            label: "FTD",
            backgroundColor: '#F29E4E',
            borderColor: '#F29E4E',
            data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
        },
        {
            label: "Earned",
            backgroundColor: '#71B374',
            borderColor: '#71B374',
            data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
            // 7
            hidden: true,
        }]
    },
});

function toggleMenu(visible) {
  document.querySelector('body').classList.toggle('active-menu', visible);
}

document.querySelector('#hamburger').addEventListener('click', function(i) {
  i.preventDefault();
  toggleMenu();
});



/*document.getElementById("hamburger").addEventListener("click", function () {
  
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