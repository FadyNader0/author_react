import './footer.css'


export default function Footer() {  
    return (
        <footer>
        <div class="container-md">
          <div class="row g-3">
            <div class="col-lg-3 col-md-6 col-sm-12">
              <div class="about_f">
                <h4>About</h4>
                <p>Far far away, behind the word mountains, 
                  far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <i class="fa-brands fa-facebook-f"></i>
                  <i class="fa-brands fa-twitter"></i>
                  <i class="fa-brands fa-instagram"></i>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12">
              <div class="links_f">
                <h4>Links</h4>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Chapter</a>
                <a href="#">Reviews</a>
                <a href="#">Contact</a>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12">
              <div class="services_f">
                <h4>Services</h4>
                <h6>Experience</h6>
                <h6>Marketing Goals</h6>
                <h6>Targetting Vission</h6>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12">
              <div class="questions_f">
                <h4>Have a Questions?</h4>
                <div class="data">
                  <i class="fa-solid fa-location-dot mr-3"></i>
                  <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
                </div>
                <div class="data">
                  <a href="#">
                    <i class="fa-solid fa-phone mr-3"></i>
                    <p>+2 392 3929 210</p>
                  </a>
                </div>
                <div class="data">
                  <a href="#">
                    <i class="fa-solid fa-paper-plane mr-3"></i>
                    <p>info@yourdomain.com</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <p class="end">Copyright ©2022 All rights reserved | This template is made with by Colorlib</p>
      
      
         </div>
      </footer>
       
    )

}