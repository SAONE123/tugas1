var nama = document.getElementById("nama");
var role = document.getElementById("role");
var avability = document.getElementById("avability");
var age = document.getElementById("age");
var lokasi = document.getElementById("lokasi");
var years = document.getElementById("years");
var email = document.getElementById("email");
function input() {
  document.getElementById("input_nama").innerText = nama.value;
  document.getElementById("input_role").innerText = role.value;
  document.getElementById("input_avability").innerText = avability.value;
  document.getElementById("input_age").innerText = age.value + " " + "tahun";
  document.getElementById("input_lokasi").innerText = lokasi.value;
  document.getElementById("input_years").innerText = years.value;
  document.getElementById("input_email").innerText = email.value;
}

if(nama).style.value = true{
  Text.style.size = ("20px");
}else{
  Text.style.size = ("30px");
}
