$(document).ready(function () {
  jQuery(`.sidenav`).sidenav();
  jQuery(".materialbox").materialbox();
  jQuery(".parallax").parallax();
});

var pop = document.getElementById("photos");
var popin = false;
function viewpic() {
  if (popin) {
    pop.style.display = "none";
  } else {
    pop.style.display = "block";
    alert("please click again for close photos windows");
  }
  popin = !popin;
}
