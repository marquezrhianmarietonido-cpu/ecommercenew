/* =========================================================
   ROSÉ BEAUTY | E-COMMERCE JAVASCRIPT
   ========================================================= */


/* =========================================================
   CART
========================================================= */

let cartCount = 0;


function addToCart(productName) {

    cartCount++;

    const cart = document.getElementById("cartCount");

    if (cart) {
        cart.textContent = cartCount;
    }

    alert(productName + " has been added to your cart! 💗");
}


/* =========================================================
   PRODUCT SEARCH
========================================================= */

function searchProducts() {

    const searchInput = document.getElementById("productSearch");

    if (!searchInput) {
        return;
    }

    const searchValue = searchInput.value.toLowerCase().trim();

    const products = document.querySelectorAll(".product-card");
    const productArea = document.getElementById("productArea");
    const categoryTitle = document.getElementById("categoryProductTitle");
    const selectedCategory = document.getElementById("selectedCategory");

    let found = false;


    /* -----------------------------------------
       IF SEARCH IS EMPTY
    ----------------------------------------- */

    if (searchValue === "") {

        products.forEach(function(product) {
            product.style.display = "block";
        });

        if (productArea) {
            productArea.style.display = "none";
        }

        if (categoryTitle) {
            categoryTitle.textContent = "ALL PRODUCTS";
        }

        if (selectedCategory) {
            selectedCategory.textContent = "ALL";
        }

        return;
    }


    /* -----------------------------------------
       SEARCH PRODUCTS
    ----------------------------------------- */

    products.forEach(function(product) {

        const productNameElement =
            product.querySelector(".product-name");

        const productCategoryElement =
            product.querySelector(".product-category");


        const productName = productNameElement
            ? productNameElement.textContent.toLowerCase()
            : "";

        const productCategory = productCategoryElement
            ? productCategoryElement.textContent.toLowerCase()
            : "";


        if (
            productName.includes(searchValue) ||
            productCategory.includes(searchValue)
        ) {

            product.style.display = "block";
            found = true;

        } else {

            product.style.display = "none";

        }

    });


    /* -----------------------------------------
       SHOW PRODUCT AREA
    ----------------------------------------- */

    if (productArea) {
        productArea.style.display = "block";
    }


    if (categoryTitle) {
        categoryTitle.textContent = "SEARCH RESULTS";
    }


    if (selectedCategory) {
        selectedCategory.textContent =
            "SEARCH: " + searchInput.value;
    }


    /* -----------------------------------------
       NO RESULTS
    ----------------------------------------- */

    if (!found) {

        alert(
            'No products found for "' +
            searchInput.value +
            '".'
        );

    }


    /* -----------------------------------------
       SCROLL TO RESULTS
    ----------------------------------------- */

    if (productArea) {

        productArea.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}


/* =========================================================
   ENTER KEY FOR SEARCH
========================================================= */

document.addEventListener("DOMContentLoaded", function() {

    const searchInput =
        document.getElementById("productSearch");


    if (searchInput) {

        searchInput.addEventListener("keydown", function(event) {

            if (event.key === "Enter") {

                event.preventDefault();

                searchProducts();

            }

        });

    }

});


/* =========================================================
   SHOW PRODUCT CATEGORY
========================================================= */

function showCategory(category) {

    const productArea =
        document.getElementById("productArea");

    const selectedCategory =
        document.getElementById("selectedCategory");

    const categoryTitle =
        document.getElementById("categoryProductTitle");

    const searchInput =
        document.getElementById("productSearch");

    const products =
        document.querySelectorAll(".product-card");


    /* -----------------------------------------
       CLEAR SEARCH
    ----------------------------------------- */

    if (searchInput) {
        searchInput.value = "";
    }


    /* -----------------------------------------
       SHOW PRODUCT AREA
    ----------------------------------------- */

    if (productArea) {
        productArea.style.display = "block";
    }


    /* -----------------------------------------
       UPDATE CATEGORY TEXT
    ----------------------------------------- */

    if (selectedCategory) {
        selectedCategory.textContent = category;
    }


    if (categoryTitle) {

        if (category === "ALL") {

            categoryTitle.textContent = "ALL PRODUCTS";

        } else {

            categoryTitle.textContent =
                category + " COLLECTION";

        }

    }


    /* -----------------------------------------
       FILTER PRODUCTS
    ----------------------------------------- */

    products.forEach(function(product) {

        const productCategory =
            product.getAttribute("data-category");


        if (
            category === "ALL" ||
            productCategory === category
        ) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });


    /* -----------------------------------------
       SCROLL TO PRODUCTS
    ----------------------------------------- */

    if (productArea) {

        productArea.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}


/* =========================================================
   BACK TO CATEGORIES
========================================================= */

function backToCategories() {

    const productArea =
        document.getElementById("productArea");

    const searchInput =
        document.getElementById("productSearch");


    /* -----------------------------------------
       HIDE PRODUCTS
    ----------------------------------------- */

    if (productArea) {
        productArea.style.display = "none";
    }


    /* -----------------------------------------
       CLEAR SEARCH
    ----------------------------------------- */

    if (searchInput) {
        searchInput.value = "";
    }


    /* -----------------------------------------
       SHOW ALL PRODUCTS AGAIN
    ----------------------------------------- */

    const products =
        document.querySelectorAll(".product-card");


    products.forEach(function(product) {

        product.style.display = "block";

    });


    /* -----------------------------------------
       RETURN TO SHOP SECTION
    ----------------------------------------- */

    const shopSection =
        document.getElementById("shop");


    if (shopSection) {

        shopSection.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =========================================================
   SIGN IN VALIDATION
========================================================= */

function validateSignIn() {

    const email =
        document.getElementById("signinEmail");

    const password =
        document.getElementById("signinPassword");


    if (!email || !password) {
        return false;
    }


    const emailValue =
        email.value.trim();

    const passwordValue =
        password.value.trim();


    /* -----------------------------------------
       EMPTY FIELDS
    ----------------------------------------- */

    if (
        emailValue === "" ||
        passwordValue === ""
    ) {

        alert(
            "Please fill in all required fields."
        );

        return false;

    }


    /* -----------------------------------------
       EMAIL VALIDATION
    ----------------------------------------- */

    if (!isValidEmail(emailValue)) {

        alert(
            "Please enter a valid email address."
        );

        return false;

    }


    /* -----------------------------------------
       PASSWORD VALIDATION
    ----------------------------------------- */

    if (passwordValue.length < 6) {

        alert(
            "Password must be at least 6 characters long."
        );

        return false;

    }


    /* -----------------------------------------
       SUCCESS
    ----------------------------------------- */

    alert(
        "Sign in successful! " +
        "Welcome back to Rosé Beauty. 💗"
    );


    return false;

}


/* =========================================================
   SIGN UP VALIDATION
========================================================= */

function validateSignUp() {

    const name =
        document.getElementById("signupName");

    const email =
        document.getElementById("signupEmail");

    const password =
        document.getElementById("signupPassword");

    const confirmPassword =
        document.getElementById(
            "signupConfirmPassword"
        );


    if (
        !name ||
        !email ||
        !password ||
        !confirmPassword
    ) {

        return false;

    }


    const nameValue =
        name.value.trim();

    const emailValue =
        email.value.trim();

    const passwordValue =
        password.value.trim();

    const confirmPasswordValue =
        confirmPassword.value.trim();


    /* -----------------------------------------
       EMPTY FIELDS
    ----------------------------------------- */

    if (
        nameValue === "" ||
        emailValue === "" ||
        passwordValue === "" ||
        confirmPasswordValue === ""
    ) {

        alert(
            "Please fill in all required fields."
        );

        return false;

    }


    /* -----------------------------------------
       EMAIL VALIDATION
    ----------------------------------------- */

    if (!isValidEmail(emailValue)) {

        alert(
            "Please enter a valid email address."
        );

        return false;

    }


    /* -----------------------------------------
       PASSWORD LENGTH
    ----------------------------------------- */

    if (passwordValue.length < 6) {

        alert(
            "Password must be at least 6 characters long."
        );

        return false;

    }


    /* -----------------------------------------
       PASSWORD MATCH
    ----------------------------------------- */

    if (
        passwordValue !==
        confirmPasswordValue
    ) {

        alert(
            "Passwords do not match."
        );

        return false;

    }


    /* -----------------------------------------
       SUCCESS
    ----------------------------------------- */

    alert(
        "Account created successfully! " +
        "Welcome to Rosé Beauty, " +
        nameValue +
        "! 💗"
    );


    return false;

}


/* =========================================================
   EMAIL VALIDATION
========================================================= */

function isValidEmail(email) {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);

}


/* =========================================================
   INQUIRY / CONTACT FORM
========================================================= */

function validateInquiry() {

    const name =
        document.getElementById("inquiryName");

    const email =
        document.getElementById("inquiryEmail");

    const message =
        document.getElementById("inquiryMessage");


    if (
        !name ||
        !email ||
        !message
    ) {

        return false;

    }


    const nameValue =
        name.value.trim();

    const emailValue =
        email.value.trim();

    const messageValue =
        message.value.trim();


    /* -----------------------------------------
       EMPTY FIELDS
    ----------------------------------------- */

    if (
        nameValue === "" ||
        emailValue === "" ||
        messageValue === ""
    ) {

        alert(
            "Please complete all fields before " +
            "sending your inquiry."
        );

        return false;

    }


    /* -----------------------------------------
       EMAIL VALIDATION
    ----------------------------------------- */

    if (!isValidEmail(emailValue)) {

        alert(
            "Please enter a valid email address."
        );

        return false;

    }


    /* -----------------------------------------
       SUCCESS
    ----------------------------------------- */

    alert(
        "Thank you, " +
        nameValue +
        "! Your inquiry has been submitted successfully. 💗"
    );


    return false;

}


/* =========================================================
   NEWSLETTER
========================================================= */

function subscribeNewsletter() {

    const emailInput =
        document.getElementById("newsletterEmail");


    if (!emailInput) {
        return;
    }


    const emailValue =
        emailInput.value.trim();


    /* -----------------------------------------
       EMPTY EMAIL
    ----------------------------------------- */

    if (emailValue === "") {

        alert(
            "Please enter your email address."
        );

        return;

    }


    /* -----------------------------------------
       EMAIL VALIDATION
    ----------------------------------------- */

    if (!isValidEmail(emailValue)) {

        alert(
            "Please enter a valid email address."
        );

        return;

    }


    /* -----------------------------------------
       SUCCESS
    ----------------------------------------- */

    alert(
        "Thank you for subscribing to " +
        "Rosé Beauty! 💗"
    );


    emailInput.value = "";

}


/* =========================================================
   NAVIGATION
========================================================= */

function goToSection(sectionId) {

    const section =
        document.getElementById(sectionId);


    /* -----------------------------------------
       SECTION EXISTS ON CURRENT PAGE
    ----------------------------------------- */

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

        return;

    }


    /* -----------------------------------------
       SECTION DOES NOT EXIST
       TRY SHOP PAGE
    ----------------------------------------- */

    if (sectionId === "shop") {

        window.location.href =
            "shop.html#shop";

        return;

    }


    /* -----------------------------------------
       SECTION DOES NOT EXIST
       TRY HOME PAGE
    ----------------------------------------- */

    window.location.href =
        "index.html#" + sectionId;

}


/* =========================================================
   HOME BUTTON
========================================================= */

function goHome() {

    /* -----------------------------------------
       IF ALREADY ON TOP
    ----------------------------------------- */

    if (window.location.pathname.endsWith("index.html") ||
        window.location.pathname.endsWith("/")) {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    } else {

        /* -----------------------------------------
           FROM SHOP PAGE → HOME PAGE
        ----------------------------------------- */

        window.location.href =
            "index.html";

    }

}


/* =========================================================
   CLEAR SEARCH
========================================================= */

function clearSearch() {

    const searchInput =
        document.getElementById("productSearch");


    if (searchInput) {
        searchInput.value = "";
    }


    const products =
        document.querySelectorAll(".product-card");


    products.forEach(function(product) {

        product.style.display = "block";

    });


    const productArea =
        document.getElementById("productArea");

    const categoryTitle =
        document.getElementById("categoryProductTitle");

    const selectedCategory =
        document.getElementById("selectedCategory");


    if (productArea) {
        productArea.style.display = "none";
    }


    if (categoryTitle) {
        categoryTitle.textContent =
            "ALL PRODUCTS";
    }


    if (selectedCategory) {
        selectedCategory.textContent =
            "ALL";
    }

}


/* =========================================================
   PAGE LOAD
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {


        /* -----------------------------------------
           PRODUCT AREA
        ----------------------------------------- */

        const productArea =
            document.getElementById(
                "productArea"
            );


        if (productArea) {

            productArea.style.display =
                "none";

        }


        /* -----------------------------------------
           CART
        ----------------------------------------- */

        const cart =
            document.getElementById(
                "cartCount"
            );


        if (cart) {

            cart.textContent =
                cartCount;

        }


        /* -----------------------------------------
           SEARCH
        ----------------------------------------- */

        const searchInput =
            document.getElementById(
                "productSearch"
            );


        if (searchInput) {

            searchInput.value = "";

        }

    }
);