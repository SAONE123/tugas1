var avability = document.getElementById("avability");
var age = document.getElementById("age");
var lokasi = document.getElementById("lokasi");
var years = document.getElementById("years");
var email = document.getElementById("email");
function input() {
  document.getElementById("input_avability").innerText = avability.value;
  document.getElementById("input_age").innerText = age.value + " " + "tahun";
  document.getElementById("input_lokasi").innerText = lokasi.value;
  document.getElementById("input_years").innerText = years.value;
  document.getElementById("input_email").innerText = email.value;
}
