import './chapter.css'

import Box from '../box_about/box'

export default function Chapter() {
    return (
        <section className="chapter" id="chapter">
        <div className="container-md">
          <div className="tittle">

            <h3>What's Inside The Book</h3>
          </div>
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div id="simple-list-example" className="d-flex flex-column gap-2 simple-list-example-scrollspy">
                <a className="p-1 rounded pb-3" href="#title_page">title page</a>
                <a className="p-1 rounded pb-3" href="#copyright">copyright</a>
                <a className="p-1 rounded pb-3" href="#table_content">table of content</a>
                <a className="p-1 rounded pb-3" href="#dedication">dedication</a>
                <a className="p-1 rounded pb-3" href="#foreword">foreword</a>
                <a className="p-1 rounded pb-3" href="#prologue">prologue</a>
                <a className="p-1 rounded pb-3" href="#epilogue">epilogue</a>
                <a className="p-1 rounded pb-3" href="#epigraph">epigraph</a>
              </div>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12">
              <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" className="scrollspy-example">
                <div className="texts" id="title_page">
                  <h4>Title Page</h4>
                  <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
                </div>
                <div className="texts" id="copyright">
                  <h4>Copyright</h4>
                  <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
                </div>
                <div className="texts" id="table_content">
                  <h4>Table of Contents</h4>
                  <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
                </div>
                <div className="texts" id="dedication">
                  <h4>Dedication</h4>
                  <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
                </div>
                <div className="texts" id="foreword">
                  <h4>Foreword</h4>
                  <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
                </div>
                <div className="texts" id="prologue">
                  <h4>Prologue</h4>
                  <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
                </div>
                <div className="texts" id="epilogue">
                  <h4>Epilogue</h4>
                  <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
                </div>
                <div className="texts" id="epigraph">
                  <h4>Epigraph</h4>
                  <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}