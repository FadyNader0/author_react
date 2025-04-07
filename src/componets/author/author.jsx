import './author.css'
import Button from '../button/button';
export default function Author() {
    return(
        <section class="author" id="author">
        <div class="container-md">
          <div class="row">
            <div class="img col-lg-6 col-md-12 col-sm-12">
              <img src="./images/xabout.jpg.pagespeed.ic.-j2kfNwXDg.webp" alt="" />
            </div>
            <div class="text col-lg-6 col-md-12 col-sm-12">
              <span>Know More About The Author</span>
              <h3>Franklin Henderson</h3>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              <div class="contacts">
                <div class="list">
                  <ul class="d-flex align-items-center">
                    <div class="adress">
                      <li>Name:</li>
                      <li>Date of birth:</li>
                      <li>Address:</li>
                      <li>Zip code:</li>
                      <li>Email:</li>
                      <li>Phone:</li>
                    </div>
                    <div class="data ms-2">
                        <li>Franklin Henderson</li>
                        <li>November 28, 1980</li>
                        <li>San Francisco CA 97987 USA</li>
                        <li>1000</li>
                        <li>franklinsample@gmail.com</li>
                        <li>+1-2234-5678-9-0</li>
                    </div>
                  </ul>
                </div>

              </div>
              <Button source="120 View All Books" />   
            </div>

          </div>

        </div>
      </section>

    )
}