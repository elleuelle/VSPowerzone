document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { name: "Whey 1", img: "whey1.png", category: "whey", description: "Brand: X | Weight: 2lb" },
        { name: "Whey 2", img: "whey2-4.webp", category: "whey", description: "Brand: Y | Weight: 5lb" },
        { name: "Mass Gainer 1", img: "mass1.webp", category: "mass", description: "Brand: Z | Weight: 6lb" },
        { name: "Creatine 1", img: "cre1.png", category: "creatine", description: "Brand: A | Weight: 300g" },
        { name: "Pre-Workout 1", img: "pre1.webp", category: "pre", description: "Brand: B | Energy Boost" },
        { name: "Amino Acid 1", img: "amino1.png", category: "amino", description: "Brand: C | Recovery Support" },
        { name: "Fat Loss 1", img: "fatloss1.png", category: "fatloss", description: "Brand: D | 60 Capsules" },
        { name: "Vitamins", img: "vi.png", category: "vitamins", description: "Brand: E | 90 Tablets" }
    ];

    const productContainer = document.querySelector(".product-container");
    const popup = document.getElementById("product-popup");
    const popupImg = document.getElementById("popup-img");
    const popupTitle = document.getElementById("popup-title");
    const popupDescription = document.getElementById("popup-description");
    const contactBtn = document.getElementById("contact-btn");
    const closeBtn = document.querySelector(".close-btn");

    function displayProducts(category = null) {
        productContainer.innerHTML = "";
        const filteredProducts = category ? products.filter(p => p.category === category) : products;

        filteredProducts.forEach(product => {
            const productEl = document.createElement("div");
            productEl.classList.add("product");
            productEl.innerHTML = `
                <img src="images/${product.img}" alt="${product.name}">
                <h3>${product.name}</h3>
            `;
            productEl.addEventListener("click", () => showPopup(product));
            productContainer.appendChild(productEl);
        });
    }

    function showPopup(product) {
        popupImg.src = `images/${product.img}`;
        popupTitle.textContent = product.name;
        popupDescription.textContent = product.description;
        contactBtn.href = "tel:1234567890";
        popup.style.display = "flex";
    }

    closeBtn.addEventListener("click", () => (popup.style.display = "none"));
    document.querySelectorAll(".filter-btn").forEach(btn =>
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            displayProducts(btn.dataset.category);
        })
    );

    displayProducts(); // Show all by default
});
