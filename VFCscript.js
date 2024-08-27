var closebtns = document.getElementsByClassName("close");
var i;

for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function () {
    this.parentElement.style.display = "none";
  });
}

var header = document.getElementById("header");
var stop = header.offsetTop;

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
function leftNav() {
  document.getElementById("leftNav").classList.toggle("showLeftNav");
  document.body.style.background = "#DCDCDC";
}

function searchDrop() {
  document.getElementById("searchDrop").classList.toggle("show");
  document.body.style.background = "#DCDCDC";
}

window.onclick = function (event) {
  if (!event.target.matches(".burger")) {
    var leftNavs = document.getElementsByClassName("leftNav");
    var j;
    for (j = 0; j < leftNavs.length; j++) {
      var openLeftNav = leftNavs[j];
      if (openLeftNav.classList.contains("showLeftNav")) {
        openLeftNav.classList.remove("showLeftNav");
        document.body.style.background = "#FFF";
      }
    }
  }
  if (!event.target.matches(".searchDiv")) {
    var dropdowns = document.getElementsByClassName("searchDrop");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
        document.body.style.background = "#FFF";
      }
    }
  }
};
