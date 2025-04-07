import './contact.css'
import Button from '../button/button';

export default function Contact() {
    return (
        <section class="contact" id="contact">
        <div class="container-md">
          <div class="tittle">
            <h4>Contact Me</h4>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
          <div class="row g-3">
            <div class="box col-lg-3 col-md-6">
              <div class="cards">
                <i class="fa-solid fa-location-dot"></i>
                <div class="card-body">
                  <h5 class="card-title">Address</h5>
                  <p class="card-text">198 West 21th Street, Suite 721 New York NY 10016</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="cards">
                <i class="fa-solid fa-phone"></i>
                <div class="card-body">
                  <h5 class="card-title">Contact Number</h5>
                  <p class="card-text"><a href="#">+ 1235 2355 98</a></p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="cards">
                <i class="fa-solid fa-paper-plane"></i>
                <div class="card-body">
                  <h5 class="card-title">Email Address</h5>
                  <p class="card-text"><a href="#">info@yoursite.com</a></p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="cards">
                <i class="fa-solid fa-earth-americas"></i>
                <div class="card-body">
                  <h5 class="card-title">Website</h5>
                  <p class="card-text"><a href="#">yoursite.com</a></p>
                </div>
              </div>
            </div>
            
          </div>

          <div class="form">
            <div class="row g-3">
              <div class="col-lg-6 col-md-12">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.661466756302!2d31.250687376053083!3d29.960414722546233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145847bc875403c5%3A0x66aeabf6a7306995!2sItsharks!5e0!3m2!1sen!2seg!4v1739752427362!5m2!1sen!2seg" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>

              </div>
              <div class="inputs col-lg-6 col-md-12">
                <form>
                  <div class="mb-3">
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name" />
                  </div>
                  <div class="mb-3">
                    <input type="email" class="form-control" id="exampleInputPassword1" placeholder="Your Email" />
                  </div>
                  <div class="mb-3">
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Subject" />
                  </div>
                  <div class="mb-3">
                    <input type="text" class="message form-control" id="exampleInputPassword1"placeholder="Message" />
                  </div>
                  <Button source="SEND MESSAGE" />   
                </form>

              </div>
            </div>  
            </div>

        </div>
      </section>

    )
}