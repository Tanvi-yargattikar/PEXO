import { useState } from 'react';
import { categories } from '../data/demoContent';
import { ArrowIcon, Reveal } from './Brand';
export default function CampusDecoded() {
    const [active, setActive] = useState(categories[0].id);
    const selected = categories.find((category) => category.id === active) ?? categories[0];
    return (<section id="explore" data-story-chapter="5" className="section-campus section-shell">
      <Reveal className="section-heading campus-heading">
        <div><h2>Campus,<br /><span className="handline">decoded.</span></h2></div>
      </Reveal>
      <Reveal className="categories-board" delay={80}>
        <div className="categories-list" role="group" aria-label="Explore campus categories">
          {categories.map((category) => (<button key={category.id} type="button" className={`category-card category-${category.color}${active === category.id ? ' category-active' : ''}`} aria-pressed={active === category.id} onClick={() => setActive(category.id)}>
              <span className="category-number">{category.number} / CAMPUS</span>
              <span className="category-symbol" aria-hidden="true">{category.symbol}</span>
              <strong>{category.name.split('\n').map((line, index) => <span key={line}>{line}{index === 0 && <br />}</span>)}</strong>
              <span className="category-detail">{category.detail}</span>
              <span className="category-open" aria-hidden="true"><ArrowIcon diagonal/></span>
            </button>))}
        </div>
        <div className="categories-foot"><span className="categories-foot-mark">✳</span><p><b>{selected.name.replace('\n', ' ')}</b> <span>has a place here. Tap another tab to see what fits your campus.</span></p><span className="fictional-tag">CAMPUS DEMO</span></div>
      </Reveal>
    </section>);
}
