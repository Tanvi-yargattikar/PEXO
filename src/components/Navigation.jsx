import { useEffect, useRef, useState } from 'react';
import { Wordmark } from './Brand';
import './navigation.css';

export default function Navigation({ onJoin }) {
    const [open, setOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const previousScrollY = useRef(0);
    const close = () => setOpen(false);

    useEffect(() => {
      previousScrollY.current = window.scrollY;
      let accumulatedScroll = 0;

      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        const scrollDelta = currentScrollY - previousScrollY.current;

        if (currentScrollY <= 0) {
          setVisible(true);
          accumulatedScroll = 0;
        } else if (scrollDelta !== 0) {
          accumulatedScroll = scrollDelta > 0
            ? Math.max(accumulatedScroll, 0) + scrollDelta
            : Math.min(accumulatedScroll, 0) + scrollDelta;

          if (accumulatedScroll > 6) {
            setVisible(false);
            accumulatedScroll = 0;
          } else if (accumulatedScroll < -6) {
            setVisible(true);
            accumulatedScroll = 0;
          }
        }

        previousScrollY.current = currentScrollY;
      };
      const handleClick = () => setVisible(true);

      window.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('click', handleClick);
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('click', handleClick);
      };
    }, []);

    return (<header className={`site-header${visible ? '' : ' site-header-hidden'}`}>
      <div className="nav-shell">
        <Wordmark />
        <button className="mobile-menu-toggle" type="button" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>
          <span /><span />
        </button>
        <nav id="main-navigation" className={`main-nav${open ? ' nav-open' : ''}`} aria-label="Main navigation">
          <a href="#explore" onClick={close}>Explore campus<span className="nav-spark">✳</span></a>
          <a href="#people" onClick={close}>Find teammates</a>
          <a href="#events" onClick={close}>Events</a>
          <button type="button" className="button button-small button-ink nav-join" onClick={() => { close(); onJoin(); }}>Join PEXO <span aria-hidden="true">↗</span></button>
        </nav>
      </div>
    </header>);
}
