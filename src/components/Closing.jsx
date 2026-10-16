import { ArrowIcon, Wordmark, Reveal } from './Brand';
export default function Closing({ onJoin }) {
    return (<>
      <section className="final-cta section-shell" id="join" data-story-chapter="9">
        <Reveal className="final-cta-inner">
          <div className="final-cta-decoration" aria-hidden="true"><span className="final-spark">✳</span><span className="final-star">★</span><span className="final-loop">∞</span></div>
          <h2>YOUR CAMPUS HAS<br /><span>MORE TO OFFER.</span></h2>
          <p>Find your people. Discover your next opportunity. Stay in the loop.</p>
          <div className="final-cta-actions flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <button type="button" className="button button-ink final-cta-button" onClick={onJoin}>GET INTO PEXO <span className="button-arrow"><ArrowIcon /></span></button>
            <a href="#scene-5" className="button button-outline final-cta-secondary">EXPLORE THE EXPERIENCE <span className="button-arrow"><ArrowIcon diagonal/></span></a>
          </div>
          <span className="cta-small-note">A CAMPUS-SIZED IDEA, STILL IN DEMO MODE</span>
        </Reveal>
      </section>
      <footer className="site-footer">
        <div className="footer-main">
          <Wordmark footer/><p>Good things grow<br />in groups.</p>
          <div className="footer-links"><span>YOUR CAMPUS, ON LOOP</span><a href="#explore">Explore campus <ArrowIcon /></a><a href="#people">Find teammates <ArrowIcon /></a><a href="#events">Campus events <ArrowIcon /></a></div>
          <div className="footer-sticker">MADE FOR<br />THE WHAT'S<br />NEXT CROWD <b>✳</b></div>
        </div>
        <div className="footer-bottom"><span>© PEXO · CONCEPT LANDING PAGE</span><span>ALL PEOPLE, POSTS & EVENTS SHOWN ARE FICTIONAL DEMO CONTENT.</span><button type="button" onClick={onJoin}>COME SAY HI ↗</button></div>
      </footer>
    </>);
}
