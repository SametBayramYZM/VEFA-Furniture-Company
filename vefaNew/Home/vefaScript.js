var header = document.getElementsByClassName("header");
var stop = header.offsetTop;

function navShow() {
  document.getElementById("nav-side").classList.toggle("nav-show");
  document.body.style.background = "#dcdcdc";
}

window.onscroll = function (e) {
  var scrollTop =
    window.scrollY !== undefined
      ? window.scrollY
      : (document.documentElement || document.body.parentNode || document.body)
        .scrollTop;
  if (scrollTop >= stop) {
    header.className = "hdr-stk";
  } else {
    header.className = "";
  }
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
}

document.getElementById("src-inp").addEventListener("focus",srcOut);

function srcOut () {
  document.getElementById("src-inp").style.outline = "2px solid #0058a3";
}

document.getElementById("src-inp").addEventListener("blur", revOut);

function revOut () {
  document.getElementById("src-inp").style.outline = "none";
}