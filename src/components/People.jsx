import { useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, BriefcaseBusiness, Github, Linkedin, UsersRound } from 'lucide-react';
import { profiles } from '../data/demoContent';
import { ArrowIcon, Reveal } from './Brand';
const filters = ['All', 'AI/ML', 'Web Development', 'Design', 'Robotics', 'Data Science'];
export default function People() {
    const [filter, setFilter] = useState('All');
    const [selectedId, setSelectedId] = useState(profiles[0].id);
    const [notice, setNotice] = useState('');
    const reduce = useReducedMotion();
    const visibleProfiles = useMemo(() => filter === 'All' ? profiles : profiles.filter((profile) => profile.track === filter), [filter]);
    const selectedProfile = profiles.find((profile) => profile.id === selectedId);
    const selectFilter = (next) => {
        setFilter(next);
        if (next !== 'All')
            setSelectedId(profiles.find((profile) => profile.track === next)?.id ?? profiles[0].id);
        else
            setSelectedId(profiles[0].id);
    };
    const openDemoNetwork = (profile, network) => setNotice(`${profile.name}'s ${network} is a demo placeholder. No real external profile or portfolio is connected.`);
    return (<section id="people" data-story-chapter="6" className="section-people section-shell">
      <div className="people-head">
        <Reveal><h2>LESS GUESSING.<br /><span>MORE BUILDING TOGETHER.</span></h2></Reveal>
      </div>
      <Reveal className="profile-discovery" delay={120}>
        <div className="filters-wrap"><span className="filter-label">WHO ARE YOU LOOKING FOR?</span><div className="profile-filters" role="group" aria-label="Filter profiles by skill area">{filters.map((item) => <button key={item} type="button" className={`filter-chip${filter === item ? ' filter-selected' : ''}`} aria-pressed={filter === item} onClick={() => selectFilter(item)}>{item === 'All' ? 'Everyone' : item}</button>)}</div></div>
        <div className="profiles-layout">
          <div className="profile-list" role="list" aria-label="Fictional student profile demos">
            {visibleProfiles.map((profile, index) => <motion.button key={profile.id} type="button" role="listitem" className={`profile-row${selectedId === profile.id ? ' profile-row-active' : ''}`} aria-pressed={selectedId === profile.id} onClick={() => { setSelectedId(profile.id); setNotice(''); }} initial={reduce ? false : { opacity: 0, x: index % 2 ? 24 : -24, rotate: index % 2 ? 1 : -1 }} whileInView={{ opacity: 1, x: 0, rotate: 0 }} viewport={{ once: true, amount: 0.25 }} whileHover={reduce ? undefined : { x: 4 }} transition={{ duration: 0.36, delay: reduce ? 0 : index * 0.045 }}>
              <span className={`profile-avatar avatar-${profile.color}`} aria-hidden="true">{profile.initials}<i>✳</i></span><span className="profile-row-copy"><b>{profile.name}</b><small>{profile.branch} · {profile.year}</small></span><span className="profile-track">{profile.track}</span><span className="profile-list-arrow"><ArrowIcon diagonal/></span><span className="profile-demo-index">DEMO {String(index + 1).padStart(2, '0')}</span>
            </motion.button>)}
            {visibleProfiles.length === 0 && <p className="no-profiles">No one in that circle just yet. Try another skill.</p>}
            <a href="#events" className="mt-4 flex items-center justify-between gap-3 rounded-xl border-2 border-[#171821] bg-[#f6e984] px-3 py-3 text-[#171821] shadow-[4px_4px_0_#171821] transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[1px_1px_0_#171821]">
              <span className="flex items-center gap-2"><UsersRound size={17}/><span><b className="block text-[9px] font-black uppercase tracking-wide">HACKATHON TEAM BOARD · DEMO</b><small className="block text-[8px]">{selectedProfile ? `ROLE FILLED: ${selectedProfile.name} · ${selectedProfile.track}` : 'Choose a profile to fill a demo team role'}</small></span></span><ArrowUpRight size={16}/>
            </a>
          </div>
          {selectedProfile && <motion.article key={selectedProfile.id} className="profile-feature" aria-live="polite" initial={reduce ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28 }}>
            <div className="feature-topline"><span className="feature-badge">FICTIONAL PROFILE · DEMO</span><span className="feature-dot">✳</span></div>
            <div className="feature-person"><div className={`feature-avatar avatar-${selectedProfile.color}`}>{selectedProfile.initials}<span className="avatar-spark">✳</span></div><div><p className="feature-hello">GOOD THINGS GROW IN GROUPS</p><h3>{selectedProfile.name}<span>.</span></h3><p>{selectedProfile.branch} · {selectedProfile.year}</p></div></div>
            <div className="feature-block"><span>THE TOOLKIT</span><div className="skill-pills">{selectedProfile.skills.map((skill, index) => <motion.span key={skill} initial={reduce ? false : { opacity: 0, y: 7 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.24, delay: reduce ? 0 : index * 0.06 }}>{skill}</motion.span>)}</div></div>
            <motion.div id={`portfolio-${selectedProfile.id}`} className="project-highlight" aria-label={`Fictional portfolio preview: ${selectedProfile.portfolio}`} initial={reduce ? false : { opacity: 0.6, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: reduce ? 0 : 0.1 }}><div className="project-highlight-header"><span>✳ PROJECT SPOTLIGHT</span><span className="project-mini-label">DEMO</span></div><h4>{selectedProfile.project}</h4><p>{selectedProfile.projectNote}</p></motion.div>
            <div className="feature-bottom"><div><span className="feature-small-label">INTO</span><p>{selectedProfile.interests.join(' · ')}</p></div><div><span className="feature-small-label">HACKATHONS</span><p>{selectedProfile.hackathons}</p></div></div>
            <div className="profile-links !grid !grid-cols-3"><button type="button" aria-label={`Open ${selectedProfile.name}'s demo GitHub profile`} onClick={() => openDemoNetwork(selectedProfile, 'GitHub')}><Github size={14}/> GitHub <i>DEMO</i></button><button type="button" aria-label={`Open ${selectedProfile.name}'s demo LinkedIn profile`} onClick={() => openDemoNetwork(selectedProfile, 'LinkedIn')}><Linkedin size={14}/> LinkedIn <i>DEMO</i></button><a className="profile-portfolio-link" href={`#portfolio-${selectedProfile.id}`} aria-label={`Jump to ${selectedProfile.portfolio}`}><BriefcaseBusiness size={14}/> Portfolio <i>DEMO</i></a></div>
          </motion.article>}
        </div>
        <div className={`profile-notice${notice ? ' profile-notice-visible' : ''}`} role="status" aria-live="polite">{notice || 'Every face + portfolio here is fictional demo content. Social buttons do not link to real accounts.'}</div>
      </Reveal>
    </section>);
}
