import './about.css'
import Box from '../box_about/box'

export default function About()  {
    return (
        <section className="about" id="about">
        <div className="container-md">
            <div className="row g-4">
                <div className="imge col-xl-6 col-lg-12">
                    <img src="./images/xbg_1.jpg.pagespeed.ic.XqukVo4x3e.webp" alt="" />
                </div>
                <div className="col-xl-6 col-lg-12 mt-5">
                    <div className="text">
                    <h3>About The Book</h3>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <h4>Award achievements</h4>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    <h4>Read On Any Devices</h4>
                    <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    <h4>Very High Resolution</h4>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                </div>
            </div>
            <div className="boxs">
                <div className="row g-3">
                    <div className="col-xl-3 col-lg-6">
                        <Box tittle="1,100" text="Copies Sold" />
                    </div>
                    <div className="col-xl-3 col-lg-6">
                        <Box tittle="1,200" text="Copies Released" />
                    </div>
                    <div className="col-xl-3 col-lg-6">
                        <Box tittle="340" text="Cup Of Coffee" />
                    </div>
                    <div className="col-xl-3 col-lg-6">
                        <Box tittle="12,300" text="Happy Readers" />
                    </div>
                </div>
            </div>  
        </div>      
      </section>
 
    )

}