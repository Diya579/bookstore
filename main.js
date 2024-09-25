// Sample data for cart and wishlist
let cart = [];
let wishlist = [];

// Function to add book to cart
function addToCart(bookTitle) {
    if (!cart.includes(bookTitle)) {
        cart.push(bookTitle);
        alert(bookTitle + " has been added to your cart!");
    } else {
        alert(bookTitle + " is already in your cart.");
    }
    updateCart();
}

// Function to add book to wishlist
function addToWishlist(bookTitle) {
    if (!wishlist.includes(bookTitle)) {
        wishlist.push(bookTitle);
        alert(bookTitle + " has been added to your wishlist!");
    } else {
        alert(bookTitle + " is already in your wishlist.");
    }
    updateWishlist();
}

// Function to update cart display
function updateCart() {
    const cartList = document.getElementById("cart");
    cartList.innerHTML = ""; // Clear existing items
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        cartList.appendChild(li);
    });
}

// Function to update wishlist display
function updateWishlist() {
    const wishlistList = document.getElementById("wishlist");
    wishlistList.innerHTML = ""; // Clear existing items
    wishlist.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        wishlistList.appendChild(li);
    });
}

// Update cart and wishlist on page load if needed
window.onload = function() {
    updateCart();
    updateWishlist();
};
