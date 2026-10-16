import { useMemo, useState } from 'react';
import { events } from '../data/demoContent';
import { ArrowIcon, Reveal } from './Brand';
const eventFilters = ['All campus', 'Hackathon', 'Workshop', 'Club', 'Opportunity', 'Deadline'];
export default function Events() {
    const [filter, setFilter] = useState('All campus');
    const [expanded, setExpanded] = useState(null);
    const shown = useMemo(() => filter === 'All campus' ? events : events.filter((event) => event.filter === filter), [filter]);
    return (<section id="events" data-story-chapter="5" className="section-events section-shell">
      <Reveal className="events-heading">
        <div><h2>What's happening<br /><span className="handline">on campus?</span></h2></div>
      </Reveal>
      <Reveal className="event-wall" delay={80}>
        <div className="event-toolbar"><div className="event-filters" role="group" aria-label="Filter demo events">{eventFilters.map((item) => <button key={item} type="button" aria-pressed={filter === item} className={`event-filter${filter === item ? ' event-filter-active' : ''}`} onClick={() => { setFilter(item); setExpanded(null); }}>{item}</button>)}</div><span className="events-demo-label"><span /> FICTIONAL EVENT WALL</span></div>
        <div className="event-posters">{shown.map((event, index) => <article key={event.id} className={`event-card ${event.color}${expanded === event.id ? ' event-card-open' : ''}`} style={{ '--poster-index': index }}>
          <button className="event-card-trigger" type="button" aria-expanded={expanded === event.id} onClick={() => setExpanded(expanded === event.id ? null : event.id)}>
            <div className="event-card-top"><span>{event.type}</span><span>{event.date}</span></div><div className="event-mark" aria-hidden="true">{event.mark}</div><div className="event-poster-type">STUDENT<br />CULTURE<br />DEPT. <b>✳</b></div><h3>{event.title.split('\n').map((line) => <span key={line}>{line}<br /></span>)}</h3><div className="event-card-bottom"><span>{event.tag}</span><span className="event-open-arrow"><ArrowIcon diagonal/></span></div>
          </button>
          {expanded === event.id && <div className="event-details"><p>{event.details}</p><span>FICTIONAL EVENT · DEMO CONTENT</span></div>}
        </article>)}</div>
        <div className="event-wall-footer"><span>MAKE SPACE FOR THE THINGS YOU HAVEN’T HEARD ABOUT YET.</span><a href="#assistant">ASK PEXO AI <ArrowIcon diagonal/></a></div>
      </Reveal>
    </section>);
}
