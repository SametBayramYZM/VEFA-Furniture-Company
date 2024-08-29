function navShow() {
  document.getElementById("nav-side").classList.toggle("nav-show");
  document.body.style.background = "#dcdcdc";
}

window.onclick = function (event) {
  if (!event.target.matches(".burger")) {
    var sideNav = document.getElementsByClassName("nav-side");
    var j;
    for (j = 0; j < sideNav.length; j++) {
      var openSideNav = sideNav[j];
      if (openSideNav.classList.contains("nav-show")) {
        openSideNav.classList.remove("nav-show");
        document.body.style.background = "#fff";
      }
    }
  }
  if (!event.target.matches(".src-inp")) {
    var dropdowns = document.getElementsByClassName("src-drp");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("drp-shw")) {
        openDropdown.classList.remove("drp-shw");
        document.body.style.background = "#FFF";
      }
    }
  }
}

document.getElementById("src-inp").addEventListener("focus",srcOut);

function srcOut () {
  document.getElementById("src-inp").style.outline = "2px solid #0058a3";
  document.getElementById("body").style.backgroundColor = "#dcdcdc"
}

document.getElementById("src-inp").addEventListener("blur", revOut);

function revOut () {
  document.getElementById("src-inp").style.outline = "none";
  document.getElementById("body").style.background = "none";
}

document.getElementById("sec-log").addEventListener("pointerenter",hovLog);

function hovLog () {
  document.getElementById("user-icon").style.backgroundColor = "#f5f5f5";
}

document.getElementById("sec-log").addEventListener("pointerleave",hovnLog);

function hovnLog () {
  document.getElementById("user-icon").style.background = "none";
}

function srcDrp () {
  document.getElementById("src-drp").classList.toggle("drp-shw");
}