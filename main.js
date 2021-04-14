var ramadan = document.getElementById("ramadan");
var crescent = document.getElementById("crescent");

document.addEventListener("scroll", (e) => {
  var scrollY = window.pageYOffset;

  ramadan.style.top = scrollY * 0.6 + "px";
  crescent.style.top = scrollY * 0.5 + "px";
  crescent.style.right = -scrollY * 0.2 + "px";
});
