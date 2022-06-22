import { toggleMenu, cartValue } from "./utils.js";

window.addEventListener("DOMContentLoaded", async function () {
  try {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    toggleMenu(hamburgerMenu);
    cartValue();
    const orderPlaced = localStorage.getItem("orderPlace");
    if (orderPlaced) {
      const img = document.querySelector(".confirm-order-image");
      img.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;

      const h3 = document.querySelector(".order-placed");
      h3.innerHTML = `Order Placed Successfully!!`;

      const p = document.querySelector(".confirm-order-para");
      p.innerHTML = `We have sent you an email with the order details`;
    }
    localStorage.clear();
  } catch (error) {
    console.log(`Caught Error ${error}`);
  }
});
