//Header
document.querySelector(".header").innerHTML = `
<div class="container">
      <nav class="navbar navbar-expand-md navbar-light p-2">
      <a class="navbar-brand" href="../index.html">MartReach</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto ml-3">
      <li class="nav-item mr-2">
        <a class="nav-link nav1" href="../index.html">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item mr-2">
        <a class="nav-link nav2" href="../services.html">Services</a>
      </li>
      <li class="nav-item mr-2">
        <a class="nav-link nav3" href="../pricing.html">Pricing</a>
      </li>
      <li class="nav-item mr-2">
        <a class="nav-link nav4" href="../about.html">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link nav5" href="../contact.html">Contact</a>
      </li>
    </ul>
    <div class="right-nav">
    <a href="../signin.html" class="btn mr-4">Login</a>
    <a href="../Register.html" class="btn">Sign up</a>
    </div>
  </div>
      </nav>
    </div>`;

// Footer
document.querySelector(".footer").innerHTML = `
<div class="container">
    <div class="footer-content d-flex justify-content-between">
      <div class="company-info d-flex flex-column my-5">
        <div class="footer-logo mb-4">
          <h1 class="font-weight-bold">MartReach</h1>
          <p>
            We help small and large business to grow their audience reach.
          </p>
        </div>
        <div class="copyright mb-3">
          <p class="font-weight-lighter">MartReach &copy; 2020, All Rights Reserved.</p>
        </div>
        <div class="socials">
          <a class="mr-4" href="#"><i class="fas fa-phone-alt"></i></a>
          <a class="mr-4" href="#"><i class="far fa-envelope"></i></a>
          <a class="mr-4" href="#"><i class="fab fa-twitter"></i></a>
          <a class="mr-4" href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-facebook-f"></i></a>
        </div>
      </div>
        <div class="links d-flex my-5 justify-content-around">
          <div class="company mr-5">
          <p style="font-size:20px" class="font-weight-bold">Company</p>
          <ul>
            <li class="my-4">
              <a href="../about.html">About Us</a>
            </li>
            <li class="my-4">
              <a href="../contact.html">Contact Us</a>
            </li>
            <li class="my-4">
              <a href="pricing.html">Pricing</a>
            </li>
            <li>
              <a href="services.html">Services</a>
            </li>
          </ul>
        </div>
        <div class="support mr-5">
          <p style="font-size:20px" class="font-weight-bold">Support</p>
          <ul>
            <li class="my-4">
              <a href="./support.html">Support</a>
            </li>
            <li>
              <a href="FAQ.html">FAQ</a>
            </li>
          </ul>
        </div>
        <div class="newsletter">
        <p style="font-size:20px" class="font-weight-bold">Stay up to date</p>
        <form class="subscribe" name="subscribe" method="POST" data-netlify="true">
          <input type="email" name="email" id="email" placeholder="Enter Email Address" required />
          <input type="submit" value="Subscribe" />
        </form>
        </div>        
        </div>
      </div>      
    </div>`;

// Hamburger Menu
// const hamburger = document.querySelector(".hamburger-box");
// const nav = document.querySelector(".nav-list");
// let menuOpen = false;
// hamburger.addEventListener("click", () => {
//   if (!menuOpen) {
//     hamburger.classList.add("open");
//     nav.classList.add("show");
//     menuOpen = true;
//   } else {
//     hamburger.classList.remove("open");
//     nav.classList.remove("show");
//     menuOpen = false;
//   }
// });
