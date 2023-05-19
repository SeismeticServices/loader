var ligma = [
  "https://example1.com",
  "https://example2.com",
  "https://example3.com"
];

function ligmaurls() {
  var randomIndex = Math.floor(Math.random() * ligma.length);
  window.location.href = ligma[randomIndex];
}

var seisurl = [
  "https://a1.archivednebulatest.ml/",
	"https://a2.archivednebulatest.ml/",
  "https://a3.archivednebulatest.ml/",
  "https://a4.archivednebulatest.ml/",
  "https://a5.archivednebulatest.ml"
];

function seismetic() {
  var username = localStorage.getItem("username"); // Get username from local storage
  var randomIndex = Math.floor(Math.random() * seisurl.length);
  var url = seisurl[randomIndex] + "/register/login.html#" + username; // Append username to URL
  window.location.href = url;
}


var fp = [
  "https://example1.com",
  "https://example2.com",
  "https://example3.com"
];

function fileproxy() {
  var randomIndex = Math.floor(Math.random() * fp.length);
  window.location.href = fp[randomIndex];
}

var utopia = [
  "https://utop.desmondsmp.gq"
];

function utop() {
  var randomIndex = Math.floor(Math.random() * utopia.length);
  window.location.href = utopia[randomIndex];
}

var int = [
  "https://pleasebubgivememod.hahalol15.online/"
];

function interstellar() {
  var randomIndex = Math.floor(Math.random() * int.length);
  window.location.href = int[randomIndex];
}
