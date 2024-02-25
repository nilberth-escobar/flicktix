

document.addEventListener("DOMContentLoaded", function () {
    // navbar using JavaScript template
    const navbarTemplate = `
        <header class="navigation-header">
            <nav>
                <div class="logo-container">
                    <a href="./index.html"> FlickTix
                        <img src="/src/images/logo.jpg" alt="Flicktix logo" width="60px">
                    </a> 
                </div>
                <div class="navigation-items" id="navigation-items">
                    <a href=""><i class="bi bi-person-lines-fill"></i>
                    </a>
                    <a href=""><i class="bi bi-person"></i></a>
                    <a href=""><i class="bi bi-cart2"></i></a>
                </div>
                <div class="hamburger">
                    <span id="openHam">&#9776;</span>
                    <span id="closeHam">&#x2716;</span>
                </div>
            </nav>
        </header>
    `;

    // Append the navbar template to the body
    document.body.insertAdjacentHTML('afterbegin', navbarTemplate);

    // Add event listeners for hamburger menu
    let openHam = document.querySelector('#openHam');
    let closeHam = document.querySelector('#closeHam');
    let navigationItems = document.querySelector('#navigation-items');

    const hamburgerEvent = (navigation, close, open) => {
        navigationItems.style.display = navigation;
        closeHam.style.display = close;
        openHam.style.display = open;
    };

    openHam.addEventListener('click', () => hamburgerEvent("flex", "block", "none"));
    closeHam.addEventListener('click', () => hamburgerEvent("none", "none", "block"));
});
