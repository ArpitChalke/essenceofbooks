window.onload = function () {
  const numberElement = document.getElementById('number');
  let currentNumber = 1;
  const duration = 1250; // 1.25 seconds
  const targetNumber = 50;
  const interval = duration / targetNumber; // Time between each increment

  function incrementNumber() {
    currentNumber++;
    numberElement.textContent = currentNumber + "+";
    if (currentNumber < targetNumber) {
      setTimeout(incrementNumber, interval);
    }
  }

  incrementNumber();
}

// console.log("Let's write JavaScript");

// async function main(){
//   let a = await fetch("http://127.0.0.1:5500/review/");
//   let response = await a.text();
//   console.log(response);
//   let div = document.createElement("div");
//   div.innerHTML = response;
// }

// DOM HTML Editing

// NAVBAR FOR MOBILE SCREEN

document.addEventListener("DOMContentLoaded", function () {
  // Select the navbar element
  const navbar = document.getElementsByClassName("navbar")[0];

  if (navbar) {
    // Create the HTML content
    const navContent = `
      <div id="logo">
          <img src="imgs/logo.webp" alt="Logo">
      </div>
      <div class="menu-button" id="menuButton">☰</div>
      <div class="dropdown-menu" id="dropdownMenu">
        <a href="/" class="dropdown-item">HOME</a>
        <a href="review.html" class="dropdown-item">REVIEWS</a>
        <a href="poems.html" class="dropdown-item">POEMS</a>
        <a href="aboutus.html" class="dropdown-item">ABOUT US</a>
      </div>
  `;

    // Insert the HTML inside the navbar
    navbar.innerHTML = navContent;
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menuButton');
  const dropdownMenu = document.getElementById('dropdownMenu');

  menuButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
  });

  // Onclick event listener for the dropdown menu items

  document.addEventListener('click', (event) => {
    if (!menuButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
      dropdownMenu.classList.remove('show');
    }
  });

  dropdownMenu.addEventListener('mouseleave', () => {
    dropdownMenu.classList.remove('show');
  });
});

// NAVBAR FOR PC

document.addEventListener("DOMContentLoaded", function () {
  // Select the navbar element
  const navbar = document.getElementById("nav");

  if(navbar){
  // Create the HTML content
  const navContent = `
      <ul class="menu poppins-semibold" id="menu1">
            <li style="border-bottom: 3px solid gold;"><a href="/">HOME</a></li>
            <li><a href="/review.html">REVIEWS</a></li>
            <li><a href="/poems.html">POEMS</a></li>
            <li><a href="/aboutus.html">ABOUT US</a></li>
        </ul>
        <div id="logo">
            <img src="imgs/logo.webp" alt="Logo">
        </div>
  `;

  // Insert the HTML inside the navbar
  navbar.innerHTML = navContent;
  }
});

