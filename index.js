const products = [
  {
    id: 1,
    title: "Product 1",
    image: "product1.jpg",
    price: 19.99,
    description: "This is the description for Product 1.",
    specs: {
      dimensions: "10x10x10",
      capacity: "100ml",
    },
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    id: 2,
    title: "Product 2",
    image: "product2.jpg",
    price: 19.99,
    description: "This is the description for Product 2.",
    specs: {
      dimensions: "10x10x10",
      capacity: "100ml",
    },
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    id: 3,
    title: "Product 3",
    image: "product3.jpg",
    price: 19.99,
    description: "This is the description for Product 3.",
    specs: {
      dimensions: "10x10x10",
      capacity: "100ml",
    },
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    id: 4,
    title: "Product 4",
    image: "product4.jpg",
    price: 19.99,
    description: "This is the description for Product 4.",
    specs: {
      dimensions: "10x10x10",
      capacity: "100ml",
    },
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    id: 5,
    title: "Product 5",
    image: "product5.jpg",
    price: 19.99,
    description: "This is the description for Product 5.",
    specs: {
      dimensions: "10x10x10",
      capacity: "100ml",
    },
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    id: 6,
    title: "Product 6",
    image: "product6.jpg",
    price: 29.99,
    description: "This is the description for Product 6.",
    specs: {
      dimensions: "15x12x8",
      capacity: "200ml",
    },
    features: ["Feature 1", "Feature 4", "Feature 5"],
  },
];

const productsCards = document.getElementById("products");
var cart = [];

function showProducts() {
  for (let i = 0; i < products.length; i++) {
    productsCards.innerHTML += `<div class="card" id=${products[i].id}>
          <img src="./assets/${products[i].image}" loading="lazy" alt="${products[i].title}" />
          <h1>${products[i].title}</h1>
          <p class="price">$${products[i].price}</p>
          <p>${products[i].description}</p>
          <p>Dimensions: ${products[i].specs.dimensions}</p>
          <p>Capacity: ${products[i].specs.capacity}</p>
          <div class="quantity">Quantity : <input type="number" id="quantity" value=1 /></div>
          <button onClick="addToCart(${products[i].id})">Add to Cart</button>
        </div>`;
  }
}

function addToCart(id) {
  const quantity = parseInt(document.getElementById("quantity").value);
  const cartItem = {
    productId: id,
    quantity: quantity,
  };
  var prod = false;

  for (let i = 0; i < cart.length; i++) {
    if (cart[i]["productId"] == id) {
      cart[i]["quantity"] += quantity;
      prod = true;
    }
  }

  if (!prod) {
    cart.push(cartItem);
  }

  console.log(cart);
  productCounting();
  viewCart();
}

function viewCart() {
  const cartContainer = document.getElementById("cartValue");
  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = `
    <div class="cartStyle"><p>Your cart is empty.</p></div>`;
    return;
  }

  cart.forEach((item) => {
    cartContainer.innerHTML += `
    <div class="cartStyle" >
      <div class="productCart">
        <p>Product ID: ${item.productId}</p>
        <p>Quantity: ${item.quantity}</p>
        <button class="btnDelete" onClick="deleteProduct(${item.productId})">Delete</button>
      </div>
    </div>`;
  });
}

function deleteProduct(id) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].productId === id) {
      cart.splice(i, 1);
    }
  }
  productCounting();

  viewCart();
}

function productCounting() {
  const count = document.getElementById("productCount");

  count.innerHTML = cart.length;
}

showProducts();
viewCart();
productCounting();
