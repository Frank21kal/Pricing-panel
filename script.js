const toggle = document.getElementById("pricing-toggle");
const prices = document.querySelectorAll(".pricing-price");

toggle.addEventListener("change", function () {

  if (toggle.checked) {
    prices[1].textContent = "$1200.00";
    prices[2].textContent = "$3000.00";
  } else {
    prices[1].textContent = "$150.00";
    prices[2].textContent = "$400.00";
  }

});