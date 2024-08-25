var closebtns = document.getElementsByClassName("close");
var i;

for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function () {
    this.parentElement.style.display = "none";
  });
}

var header = document.getElementById("header");
var stop = header.offsetTop - 60;

window.onscroll = function (e) {
  var scrollTop =
    window.scrollY !== undefined
      ? window.scrollY
      : (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;
  if (scrollTop >= stop) {
    header.className = "stick";
  } else {
    header.className = "";
  }
};

// let burger = document.querySelectorAll(".burger");
// let leftNav = document.querySelector(".leftNav");

// for (i = 0; i < burger.length; i++) {
//   burger[i].onclick = function () {
//     leftNav.classList.toggle("active");
//   };
// }

// let body = document.querySelector(".body");
// for (i = 0; i < body.length; i++) {
//   body[i].onclick = function () {
//     leftNav.classList.toggle("leftNav");
//   };
// }
/*
var navToggled = false;

function toggleNav() {
  if (navToggled) {
    openNav();
    navToggled = false;
  } else {
    closeNav();
    navToggled = true;
  }
}

// document.querySelector(".burger").addEventListener("click", openNav);
// document.querySelector(".body").addEventListener("click", closeNav);

// function openNav() {
//   document.getElementsByClassName("leftNav").style.width = "25.2%";
// }

// function closeNav() {
//   document.getElementsByClassName("leftNav").style.width = "0%";
// }
*/

function openNav() {
    const sideBarWidth = document.getElementById("leftNav").style.marginLeft;

    if (!sideBarWidth || sideBarWidth == "0px") {
        document.getElementById("leftNav").style.marginLeft = "0%";
    } else if (sideBarWidth !== "0px") {
        document.getElementById("leftNav").style.marginLeft = "-22.5%"
    }
}