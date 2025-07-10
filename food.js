const ham = document.querySelector("#ham")
const nav = document.querySelector(".nav")

ham.addEventListener("click", (e) => {
   e.preventDefault();
   console.log("Hello");
   nav.classList.toggle ("show");
});

// const hamburger = document.getElementById("#ham");
// const navMenu = document.getElementById("nav");

// hamburger.addEventListener("click", () => {
//   navMenu.classList.toggle(".show");
// });


let cartItems = [];
let totalAmount = 0;

function addToCart(itemName, itemPrice) {
  cartItems.push({ name: itemName, price: itemPrice });
  totalAmount += itemPrice;
  updateCart();
}

function updateCart() {
  const cart = document.getElementById("cart");
  cart.innerHTML = "";

  cartItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₦${item.price}`;
    cart.appendChild(li);
  });

  document.getElementById("total").textContent = `Total: ₦${totalAmount}`;
}

function placeOrder() {
  if (cartItems.length === 0) {
    alert("Your cart is empty. Please add items first.");
    return;
  }

  let message = "Hello, I would like to place an order:\n\n";
  cartItems.forEach((item, index) => {
    message += `${index + 1}. ${item.name} - ₦${item.price}\n`;
  });
  message += `\nTotal: ₦${totalAmount}\nThank you!`;

  const encodedMessage = encodeURIComponent(message);
  const phoneNumber = "2349059774050"; // Your WhatsApp number
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  // Redirect to WhatsApp
  window.open(whatsappURL, "_blank");

  // Optional: Clear cart after placing order
  cartItems = [];
  totalAmount = 0;
  updateCart();
}

//  function callNumber(select) {
//     const number = select.value;
//     if (number) {
//       window.location.href = number;
//     }
//   }
