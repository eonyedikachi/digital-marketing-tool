//Header
document.querySelector(".header").classList.add("sticky-top");
document.querySelector(".header").innerHTML = `
<div class="container">
  <nav class="navbar navbar-expand-md navbar-light p-2">
    <a class="navbar-brand" href="../index.html"><img class ="logo-nav" src="../images/MartReach logo.png"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto ml-auto">
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
        <a class="btn mr-4" data-toggle="modal" data-target="#signIn">Login</a>
        <a href="../Register.html" class="btn">Sign up</a>
      </div>
    </div>
  </nav>
</div>`;

// Footer
document.querySelector(".footer").innerHTML = `
<div class="container">
    <div class="footer-content d-flex justify-content-around">
      <div class="company-info d-flex flex-column my-5">
        <div class="footer-logo mb-4">
          <img style="width:300px" class ="logo-nav mb-4" src="../images/MartReach logo dark.png">
          <p style="font-family:'Rubik', sans-serif;">
            We help small and medium business to grow their audience reach.
          </p>
        </div>
        <div class="copyright mb-3">
          <p style="font-family:'Rubik', sans-serif;" class="font-weight-lighter">MartReach &copy; 2020, All Rights Reserved.</p>
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
          <p class="font-weight-bold">Company</p>
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
          <p class="font-weight-bold">Support</p>
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
        <p class="font-weight-bold">Stay up to date</p>
        <form class="subscribe" name="subscribe" method="POST" data-netlify="true">
          <input type="email" name="email" id="footerEmail" placeholder="Enter Email Address" required />
          <button type="submit"><i class="fas fa-paper-plane"></i></button>
        </form>
        </div>        
        </div>
      </div>      
    </div>`;

// Sign in Modal
let modal = document.createElement("div");
modal.setAttribute("class", "modal");
modal.setAttribute("id", "signIn");
modal.setAttribute("tabindex", "-1");
modal.setAttribute("aria-labelledby", "signInLabel");
modal.setAttribute("aria-hidden", "true");
modal.classList.add("fade");

modal.innerHTML = `<div class="modal-dialog">
      <div class="modal-content">
        <div class="login-modal-header modal-header">
          <h5 class="modal-title">Sign In</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="center-form" onsubmit=" return validate() ">
      <div class="container d-flex justify-content-center .align-items-center">
        <div class="register d-flex flex-column .align-items-center p-4">
          <div class="signin d-flex justify-content-end align-items-center my-3">
            Don't have an account yet?
            <a class="ml-2" href="./register.html">Sign Up</a>
          </div>
          <h1 class="login-title font-weight-bold">Welcome back to <span>MartReach!</span></h1>
          <form class="d-flex flex-column" onsubmit="validate()">
            <p id="error"></p>
            <div class="input-field my-4"><span>
                <input placeholder="Username" class="d-block w-100" type="text" id="use" />
              </span>
            </div>
            <div class="input-field my-4"><span>
                <input placeholder="Password" class="d-block w-100" type="password" id="pass" />
              </span>
            </div>
            <div class="pass">
              <a href="forgotpassword.html"> Forgot Password?</a>
            </div>
            <input class="login-btn btn my-3" type="submit" id="Login" value="Login" />
            <div class="signup_link">
              Not a member? <a href="./register.html">Signup</a>

              <div class="create d-flex align-items-center mt-4">
                Sign in with:
                <div class="socials d-flex align-items-center">
                  <a class="mx-3" href="#"><i class="fab fa-google"></i></a>
                  <a class="mx-3" href="#"><i class="fab fa-facebook-f"></i></a>
                  <a class="mx-3" href="#"><i class="fab fa-linkedin-in"></i></a>
                  <a class="mx-3" href="#"><i class="fab fa-twitter"></i></a>
                </div>
              </div>
            </div>
          </form>
        </div>
        </div>
      </div>
    </div>`;

document.body.appendChild(modal);
