import './home.css'
import Button from '../button/button';

export default function Home() {
    return (
        <section className="home" id="home">
        <div className="container-md">
          <div className="img">
          </div>
          <div className="row">
              <div className="col-xl-5 col-lg-12 mt-5">
                <div className="text">
                  <span>BEST SELLER BOOK OF THE WEEK</span>
                  <h2>Clue Of The Wooden Cottage</h2>
                  <p>A small river named Duden flows by their place and supplies it 
                      with the necessary regelialia. It is a paradisematic country, 
                      in which roasted parts of sentences fly into your mouth.</p>
                    <div className="btn">
                        <Button source="Buy Now for $22.78" />   
                    </div>  
                </div>
              </div>
              <div className="imge col-xl-7 col-lg-12">
                  <img src="images/undraw_book_lover_mkck.svg" alt="" />
              </div>
          </div>
          <div className="icons">
            <div className="row g-3">
              <div className="col-xl col-lg-12">
                <img src="images/xpartner-1.png.pagespeed.ic.b7FlbbQVdf.png" alt="" />
              </div>  
              <div className="col-xl col-lg-12">
                <img src="images/xpartner-2.png.pagespeed.ic.4tCtqXfPLh.png" alt="" />
              </div>  
              <div className="col-xl col-lg-12">
                <img src="images/xpartner-3.png.pagespeed.ic.K6b-CsdlC4.png" alt="" />
              </div>  
              <div className="col-xl col-lg-12">
                <img src="images/xpartner-4.png.pagespeed.ic.DaTQYymmyu.png" alt="" />
              </div>  
              <div className="col-xl col-lg-12">
                <img src="images/xpartner-5.png.pagespeed.ic.A4xeUmT9Fd.png" alt="" />
              </div>  
            </div> 
          </div>
        </div>
      </section>
 
    )
}