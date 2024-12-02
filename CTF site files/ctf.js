setTimeout(function () {
  document.body.classList.remove("right");
}, 5000); // 5000ms = 5 seconds

function revealDownloadPage() {
  document.getElementById("hiddenLink").style.visibility = "visible";
}
