function scrollToAudioBook() {
    document.getElementById("Audiobook").scrollIntoView();
}

// DOM HTML Editing

// NAVBAR FOR MOBILE SCREEN

document.addEventListener("DOMContentLoaded", function () {
    // Select the navbar element
    const navbar = document.getElementsByClassName("navbar")[0];
  
    if (navbar) {
      // Create the HTML content
      const navContent = `
        <div id="logo">
            <img src="/imgs/logo.webp" alt="Logo">
        </div>
        <div class="menu-button" id="menuButton">☰</div>
        <div class="dropdown-menu" id="dropdownMenu">
          <a href="/" class="dropdown-item">HOME</a>
          <a href="/review.html" class="dropdown-item">REVIEWS</a>
          <a href="/poems.html" class="dropdown-item">POEMS</a>
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
              <li><a href="/">HOME</a></li>
              <li><a href="/review.html">REVIEWS</a></li>
              <li style="border-bottom: 3px solid gold;"><a href="/poems.html">POEMS</a></li>
              <li><a href="/aboutus.html">ABOUT US</a></li>
          </ul>
          <div id="logo">
              <img src="/imgs/logo.webp" alt="Logo">
          </div>
    `;
    
  // Insert the HTML inside the navbar
  navbar.innerHTML = navContent;
}
});

// FOOTER

document.addEventListener("DOMContentLoaded", function () {
    // Select the footer element
    const footer = document.getElementById("footer");

    // Create the HTML content
    const footerContent = `
          <div id="footer-logo">
                  <h2>Essence Of Books</h2>
                  <p>Dhanashree Patil</p>
              </div>
              <div id="footer-dir">
                  <div><i class="fa-regular fa-copyright"></i>2024 EssenceOfBooks.All Rights</div>
                  <div>
                      <ul>
                          <li><a href="/aboutus.html">About Us</a></li>
                          <li><a href="">Contacts</a></li>
                          <li><a href="">Edititors Choices</a></li>
                      </ul>
                  </div>
                  <div id="footer-socialmedia">
                      <ul style="width: 100px;">
                          <li><a target="_blank" href="https://www.instagram.com/_ugavta_tara__29/"><i class="fa-brands fa-instagram"><span>_ugavta_tara__29</span></i></a></li>
                          <!-- <li><a href=""><i class="fa-brands fa-facebook"></i></a></li>
                          <li><a href=""><i class="fa-brands fa-twitter"></i></a></li> -->
                      </ul>
                  </div>
              </div>
      `;

    // Insert the HTML inside the footer
    footer.innerHTML = footerContent;
});
