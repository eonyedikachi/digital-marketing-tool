//Header
document.querySelector(".header").innerHTML = `
<div class="container">
      <div class="logo">
        <p>MartReach</p>
        <button type="button" class="hamburger" aria-label="Toggle Navigation">
          <span class="hamburger-box">
            <span class="hamburger-list hamburger-list1"></span>
            <span class="hamburger-list hamburger-list2"></span>
            <span class="hamburger-list hamburger-list3"></span>
          </span>
        </button>
      </div>
      <nav>
        <ul class="nav-list">
          <li class="nav-items">
            <a class="nav1" href="index.html">HOME</a>
          </li>
          <li class="nav-items">
            <a class="nav2" href="services.html">SERVICES</a>
          </li>
          <li class="nav-items">
            <a class="nav3" href="pricing.html">PRICING</a>
          </li>
          <li class="nav-items">
            <a class="nav4" href="about.html">ABOUT</a>
          </li>
          <li class="nav-items">
            <a class="nav5" href="contact.html">CONTACT</a>
          </li>
          <li class="nav-items">
            <a class="nav6" href="signin.html">SIGN IN</a>
          </li>
        </ul>
      </nav>
    </div>`;

// Footer
document.querySelector(".footer").innerHTML = `
<div class="container">
      <div class="footer-content">
        <div class="foot footer-logo">
          <p>MartReach</p>
          <p>
            We help small and large business to grow their audience reach.
          </p>
        </div>
        <div class="foot support">
          <h2>Support</h2>
          <ul>
            <li>
              <a href="./contact.html">Contact Us</a>
            </li>
            <li>
              <a href="./support.html">Support</a>
            </li>
            <li>
              <a href="FAQ.html">FAQ</a>
            </li>
            <li>
              <a href="pricing.html">Pricing</a>
            </li>
            <li>
              <a href="services.html">Services</a>
            </li>
          </ul>
        </div>
        <div class="foot socials">
          <h2>Connect</h2>
          <a href="#"><i class="fas fa-phone-alt"></i></a>
          <a href="#"><i class="far fa-envelope"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-facebook-f"></i></a>
        </div>
      </div>
      <div class="copyright">
        <p>MartReach &copy; 2020, All Rights Reserved.</p>
      </div>
    </div>`;

// Hamburger Menu
const hamburger = document.querySelector(".hamburger-box");
const nav = document.querySelector(".nav-list");
let menuOpen = false;
hamburger.addEventListener("click", () => {
  if (!menuOpen) {
    hamburger.classList.add("open");
    nav.classList.add("show");
    menuOpen = true;
  } else {
    hamburger.classList.remove("open");
    nav.classList.remove("show");
    menuOpen = false;
  }
});
<<<<<<< Updated upstream
=======



// Toggle Password
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function (e) {
  // toggle the type attribute
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  // toggle the eye slash icon
  this.classList.toggle("fa-eye-slash");
});
>>>>>>> Stashed changes
