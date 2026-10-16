import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Check, Code2, Figma, Github, Linkedin, Plus, Wrench } from 'lucide-react';
import { profiles } from '../../data/demoContent';
const roles = ['AI / ML', 'Frontend', 'Design', 'Hardware'];
const colors = ['bg-[#f6e984]', 'bg-[#9be4c1]', 'bg-[#ffb8a9]'];
const roleTracks = { 'AI / ML': 'AI/ML', Frontend: 'Web Development', Design: 'Design', Hardware: 'Robotics' };
export default function TeamProblemScene() {
    const [role, setRole] = useState('AI / ML');
    const [teamFound, setTeamFound] = useState(false);
    const reduce = useReducedMotion();
    const matchingProfiles = profiles.filter((person) => person.track === roleTracks[role]);
    const displayedProfiles = teamFound
        ? [...matchingProfiles, ...profiles.filter((person) => person.track !== roleTracks[role])].slice(0, 3)
        : profiles.slice(0, 3);
    return (<section id="scene-3" aria-labelledby="team-problem-title" className="relative overflow-hidden bg-[#ff795d] px-5 py-20 text-[#171821] sm:px-8 md:min-h-[92svh] md:px-12 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-end gap-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-12">
          <div>
            <h2 id="team-problem-title" className="max-w-3xl font-display text-[clamp(2.75rem,6.5vw,5.6rem)] font-black leading-[.88] tracking-[-.08em]">YOUR NEXT BIG IDEA <span className="text-[#fffcf5]">DESERVES</span> BETTER TEAMMATES.</h2>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-[#3e2827]/85">The hackathon is easy to find. The teammate who can ship the thing with you? Not so much. Meet people through the work they’ve actually made.</p>
            <div className="mt-7 flex flex-wrap items-center gap-2" role="group" aria-label="Select a demo team role">
              <span className="mr-1 text-[8px] font-black uppercase tracking-widest">Open role</span>
              {roles.map((item) => <button key={item} type="button" aria-pressed={role === item} onClick={() => { setRole(item); setTeamFound(false); }} className={`rounded-full border-2 border-[#171821] px-3 py-1.5 text-[9px] font-bold transition-all hover:-translate-y-0.5 ${role === item ? 'bg-[#171821] text-white' : 'bg-[#fffcf5]/65'}`}>{item}</button>)}
            </div>
            <button type="button" onClick={() => setTeamFound(true)} className="mt-6 inline-flex min-h-12 items-center gap-3 rounded-xl border-2 border-[#171821] bg-[#171821] px-5 text-xs font-black text-white shadow-[4px_5px_0_#fffcf5] transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[1px_2px_0_#fffcf5] focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#2455ff]">
              {teamFound ? 'A demo crew is taking shape' : 'Find my crew'} <ArrowRight size={16}/>
            </button>
          </div>

          <div className="relative mx-auto w-full max-w-2xl pb-3 pt-2">
            <div className="mx-auto mb-4 flex w-fit -rotate-2 flex-col rounded-xl border-2 border-[#171821] bg-[#2455ff] px-4 py-2 text-white shadow-[5px_5px_0_#171821]">
              <b className="font-display text-sm font-black leading-none tracking-tight sm:text-base">THE LOOP HACKATHON</b>
              <span className="mt-1 text-[7px] font-black uppercase tracking-[.16em] text-white/80">24 HOURS · DEMO EVENT · OCT 24–25</span>
            </div>
            <div className="absolute left-[11%] right-[11%] top-1/2 hidden h-px border-t-2 border-dashed border-[#171821]/50 md:block" aria-hidden="true"/>
            <div className="relative grid gap-3 sm:grid-cols-3 sm:gap-2">
              {displayedProfiles.map((person, index) => {
            const Icon = index === 0 ? Code2 : index === 1 ? Figma : Wrench;
            return (<motion.article layout key={person.id} initial={reduce ? false : { opacity: 0, y: 30, rotate: index % 2 ? 4 : -5 }} whileInView={{ opacity: 1, y: 0, rotate: index % 2 ? 2 : -2 }} viewport={{ once: true, amount: 0.25 }} whileHover={reduce ? undefined : { y: -7, rotate: 0, scale: 1.025 }} transition={{ duration: 0.42, delay: reduce ? 0 : index * 0.1 }} className={`relative z-[1] rounded-2xl border-2 border-[#171821] ${colors[index]} p-3 shadow-[5px_5px_0_#171821]`}>
                    <div className="flex items-center justify-between text-[7px] font-black tracking-widest"><span>DEMO PROFILE · 0{index + 1}</span><span className="grid h-7 w-7 place-items-center rounded-full border border-[#171821] bg-[#fffcf5]/65"><Icon size={14}/></span></div>
                    <div className="mt-3 flex items-center gap-2"><span className={`grid h-10 w-10 place-items-center rounded-full border-2 border-[#171821] ${colors[index]} font-display text-[10px] font-black`}>{person.initials}</span><span className="min-w-0"><b className="block truncate font-display text-[11px]">{person.name}</b><small className="block text-[7px]">{person.branch} · {person.year}</small></span></div>
                    <div className="mt-3 flex flex-wrap gap-1">{person.skills.slice(0, 2).map((skill) => <span key={skill} className="rounded-md border border-[#171821]/50 bg-[#fffcf5]/65 px-1.5 py-1 text-[7px] font-semibold">{skill}</span>)}</div>
                    <p className="mb-0 mt-2 min-h-9 border-t border-[#171821]/20 pt-2 text-[8px] font-semibold leading-snug">{person.project}</p>
                    <div className="mt-2 flex items-center justify-between border-t border-[#171821]/20 pt-2"><span className="text-[7px] font-black uppercase tracking-wide">ROLE FIT: {teamFound ? (person.track === roleTracks[role] ? 'MATCHED' : 'CREW MEMBER') : (person.track === roleTracks[role] ? role : index === 1 ? '??' : 'MISSING')}</span><span className="flex gap-1"><Github size={12}/><Linkedin size={12}/></span></div>
                    <a href="#people" className="mt-2 inline-flex items-center gap-1 rounded-md border border-[#171821]/50 bg-white/60 px-1.5 py-1 text-[7px] font-black uppercase tracking-wide text-[#171821] hover:bg-white" aria-label="Browse fictional portfolios in Find Your People"><span>PORTFOLIO DEMOS</span><ArrowUpRight size={10}/></a>
                    {index === 1 && <div className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full border-2 border-[#171821] bg-[#f6e984]">{teamFound ? <Check size={14}/> : <Plus size={14}/>}</div>}
                  </motion.article>);
        })}
            </div>
          </div>
        </div>
      </div>
    </section>);
}
