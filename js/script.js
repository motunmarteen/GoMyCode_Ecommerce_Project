// Array of products 3Ms is displaying to users
let products = [
  {
    image:
      "https://www.lafemmefashion.com/sites/default/files/styles/dress_315x500/public/dresses_images/royal-blue-prom-dress-1-32278.jpg?itok=F_-oVx41",
    nameOfProduct: "Dresses",
    price: 15000,
    isLiked: false,
    quantity: 0,
  },
  {
    image:
      "https://www.cartrollers.com/wp-content/uploads/2022/02/Stylish-Long-Sleeved-Sweat-Tops-For-Women-Size-14-e1644917311230.jpeg",
    nameOfProduct: "Tops",
    price: 7500,
    isLiked: false,
    quantity: 0,
  },
  {
    image:
      "https://i5.walmartimages.com/seo/Tdoqot-Women-s-Cargo-Pants-with-Pockets-High-weight-Casual-Fashion-Straight-Leg-Pants-Brown-Size-M_ddc8caf8-677e-44c4-9498-7478a12b3681.13065f724ee61d2e9c1bc817ec520de0.jpeg",
    nameOfProduct: "Pants",
    price: 10000,
    isLiked: false,
    quantity: 0,
  },
  {
    image:
      "https://www.refinery29.com/images/11491661.jpg?format=webp&width=720&height=864&quality=85&crop=5%3A6",
    nameOfProduct: "Skirts",
    price: 8500,
    isLiked: false,
    quantity: 0,
  },
  {
    image:
      "https://images.unsplash.com/photo-1627140290942-7c8f9f56e870?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFtYm9yZ2hpbmklMjB1cnVzfGVufDB8fDB8fHww",
    nameOfProduct: "Jeans",
    price: 18000,
    isLiked: false,
    quantity: 0,
  },
  {
    image:
      "https://images.unsplash.com/photo-1613061527119-56ad37b8a581?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFza2V0fGVufDB8fDB8fHww",
    nameOfProduct: "T-shirts",
    price: 3500,
    isLiked: false,
    quantity: 0,
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1664302318670-29dee41e85e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c29ja3N8ZW58MHx8MHx8fDA%3D",
    nameOfProduct: "Blazers",
    price: 20000,
    isLiked: false,
    quantity: 0,
  },
  {
    image:
      "https://images.unsplash.com/photo-1575032617751-6ddec2089882?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJhZ3xlbnwwfHwwfHx8MA%3D%3D",
    nameOfProduct: "Sweaters",
    price: 12000,
    isLiked: false,
    quantity: 0,
  },
  {
    image:
      "https://images.unsplash.com/photo-1602351447937-745cb720612f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNha2V8ZW58MHx8MHx8fDA%3D",
    nameOfProduct: "Shorts",
    price: 6500,
    isLiked: false,
    quantity: 0,
  },
  {
    image:
      "https://images.unsplash.com/photo-1627140290942-7c8f9f56e870?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFtYm9yZ2hpbmklMjB1cnVzfGVufDB8fDB8fHww",
    nameOfProduct: "Jackets",
    price: 25000,
    isLiked: false,
    quantity: 0,
  },
  {
    image:
      "https://images.unsplash.com/photo-1613061527119-56ad37b8a581?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFza2V0fGVufDB8fDB8fHww",
    nameOfProduct: "Coats",
    price: 30000,
    isLiked: false,
    quantity: 0,
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1664302318670-29dee41e85e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c29ja3N8ZW58MHx8MHx8fDA%3D",
    nameOfProduct: "Hoodies",
    price: 15000,
    isLiked: false,
    quantity: 0,
  },
  {
    image:
      "https://images.unsplash.com/photo-1575032617751-6ddec2089882?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJhZ3xlbnwwfHwwfHx8MA%3D%3D",
    nameOfProduct: "Cardigans",
    price: 10000,
    isLiked: false,
    quantity: 0,
  },
  {
    image:
      "https://images.unsplash.com/photo-1602351447937-745cb720612f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNha2V8ZW58MHx8MHx8fDA%3D",
    nameOfProduct: "Jumpsuits",
    price: 22000,
    isLiked: false,
    quantity: 0,
  },
  {
    image:
      "https://images.unsplash.com/photo-1627140290942-7c8f9f56e870?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFtYm9yZ2hpbmklMjB1cnVzfGVufDB8fDB8fHww",
    nameOfProduct: "Rompers",
    price: 14000,
    isLiked: false,
    quantity: 0,
  },
  {
    image:
      "https://images.unsplash.com/photo-1613061527119-56ad37b8a581?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFza2V0fGVufDB8fDB8fHww",
    nameOfProduct: "Bodysuits",
    price: 9500,
    isLiked: false,
    quantity: 0,
  },
  {
    image:
      "https://images.unsplash.com/photo-1627140290942-7c8f9f56e870?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFtYm9yZ2hpbmklMjB1cnVzfGVufDB8fDB8fHww",
    nameOfProduct: "Shift dresses",
    price: 12500,
    isLiked: false,
    quantity: 0,
  },
  {
    image:
      "https://images.unsplash.com/photo-1613061527119-56ad37b8a581?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFza2V0fGVufDB8fDB8fHww",
    nameOfProduct: "Wrap dresses",
    price: 18000,
    isLiked: false,
    quantity: 0,
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1664302318670-29dee41e85e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c29ja3N8ZW58MHx8MHx8fDA%3D",
    nameOfProduct: "Sheath dresses",
    price: 18000,
    isLiked: false,
    quantity: 0,
  },
  {
    image:
      "https://images.unsplash.com/photo-1575032617751-6ddec2089882?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJhZ3xlbnwwfHwwfHx8MA%3D%3D",
    nameOfProduct: "Bodycon dresses",
    price: 20000,
    isLiked: false,
    quantity: 0,
  },
  {
    image:
      "https://images.unsplash.com/photo-1602351447937-745cb720612f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNha2V8ZW58MHx8MHx8fDA%3D",
    nameOfProduct: "Pencil skirts",
    price: 12000,
    isLiked: false,
    quantity: 0,
  },
  {
    image:
      "https://images.unsplash.com/photo-1627140290942-7c8f9f56e870?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFtYm9yZ2hpbmklMjB1cnVzfGVufDB8fDB8fHww",
    nameOfProduct: "Flared skirts",
    price: 12000,
    isLiked: false,
    quantity: 0,
  },
  {
    image:
      "https://images.unsplash.com/photo-1613061527119-56ad37b8a581?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFza2V0fGVufDB8fDB8fHww",
    nameOfProduct: "Slip dresses",
    price: 12500,
    isLiked: false,
    quantity: 0,
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1664302318670-29dee41e85e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c29ja3N8ZW58MHx8MHx8fDA%3D",
    nameOfProduct: "Leather jackets",
    price: 40000,
    isLiked: false,
    quantity: 0,
  },
  {
    image:
      "https://images.unsplash.com/photo-1575032617751-6ddec2089882?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJhZ3xlbnwwfHwwfHx8MA%3D%3D",
    nameOfProduct: "Bomber jackets",
    price: 30000,
    isLiked: false,
    quantity: 0,
  },
  {
    image:
      "https://images.unsplash.com/photo-1602351447937-745cb720612f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNha2V8ZW58MHx8MHx8fDA%3D",
    nameOfProduct: "Puffer jackets",
    price: 30000,
    isLiked: false,
    quantity: 0,
  },
  {
    image:
      "https://images.unsplash.com/photo-1627140290942-7c8f9f56e870?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFtYm9yZ2hpbmklMjB1cnVzfGVufDB8fDB8fHww",
    nameOfProduct: "Yoruba Demon Fila",
    price: 15000,
    isLiked: false,
    quantity: 0,
  },
];

const cardDiv = document.getElementById("list-products");
const totalBody = document.querySelector(".total");
let sum = 0;

// This function below updates the total price of products bought on the webpage then Calculates the total price by multiplying the price and quantity of each product, then summing them up and Updates the total price displayed on the webpage
const updatePrice = () => {
  sum = products.reduce((total, product) => total + product.price * product.quantity, 0);
  totalBody.textContent = `₦${sum}`;
};

// This function increases the quantity of a products to be bought on the webpage by one and also clear the current product list display, it updates the total price and updates the UI to reflect the changes made on the webpage.
const incrementQuantity = (product) => {
  product.quantity++;
  cardDiv.innerHTML = "";
  updatePrice();
  updateUi();
};

// This function decreases the quantity of a products to be bought on the webpage by one and also clear the current product list display, it updates the total price and updates the UI to reflect the changes made on the webpage.
const decrementQuantity = (product) => {
  // An if statement to check if the quantity is greater than zero before decreasing
  if (product.quantity > 0) {
    product.quantity--;
    cardDiv.innerHTML = "";
    updatePrice();
    updateUi();
  }
};

// This function deletes the quantity and price of a products selected to be bought on the webpage and also clear the current product list display, it updates the total price and updates the UI to reflect the changes made on the webpage.
const deleteProduct = (product) => {
    product.quantity = 0;
    cardDiv.innerHTML = "";
    updatePrice();
    updateUi();
};

// This Function updates the UI of the webpage, while we loop through the products in the product array. I also created a new div element for the product card and set the HTML content of the product card
function updateUi() {
  for (let product in products) {
    const cardBody = document.createElement("div");
    cardBody.innerHTML = `
      <div class="card-body">
        <div class="card" style="width: 18rem">
          <img src=${products[product].image} class="card-img-top" alt="socks" />
          <div class="card-body">
            <h5 class="card-title">${products[product].nameOfProduct}</h5>
            <p class="card-text">Product Description: ${products[product].nameOfProduct} are premium product of 3Ms</p>
            <h4 class="unit-price">₦${products[product].price}</h4>
            <div>
              <i id="plus" class="fas fa-plus-circle"></i>
              <span class="quantity">${products[product].quantity}</span>
              <i id="minus" class="fas fa-minus-circle"></i>
            </div>
            <div>
              <i class="fas fa-trash-alt"></i>
              <i class="fas fa-heart" id="heart-icon"></i>
            </div>
          </div>
        </div>
      </div>
    `;

    // Get the plus, minus, heart and trash icons from the product card
    const plus = cardBody.querySelector("#plus"); // Plus button
    const minus = cardBody.querySelector("#minus"); // Minus button
    const trash = cardBody.querySelector(".fa-trash-alt"); // Delete icon
    const heart = cardBody.querySelector("#heart-icon"); // Heart icon

    // Added EVent listener
    plus.addEventListener("click", () => incrementQuantity(products[product]));
    minus.addEventListener("click", () => decrementQuantity(products[product]));
    trash.addEventListener("click", () => deleteProduct(products[product]));
    
    heart.addEventListener("click", () => {
      if (products[product].isLiked) {
        products[product].isLiked = false;
        heart.style.color = "black";
      } else {
        products[product].isLiked = true;
        heart.style.color = "red";
      }
    });

    // Append the product card to the card container
    cardDiv.appendChild(cardBody);
  }
}

// Invoke the function to update the UI initially
updateUi();