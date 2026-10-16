import { useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, BookOpenText, CalendarCheck2, Check, FileCheck2, Sparkles, UsersRound } from 'lucide-react';
import { useStoryScroll } from '../../hooks/useStoryScroll';
import StudentCharacter from './StudentCharacter';
const steps = [
    { icon: CalendarCheck2, text: 'Discovers a hackathon before the deadline.' },
    { icon: UsersRound, text: 'Finds teammates with the skills she needs.' },
    { icon: Sparkles, text: 'Explores portfolios and projects first.' },
    { icon: BookOpenText, text: 'Opens the right campus document.' },
    { icon: FileCheck2, text: 'Gets the answer—with its source attached.' },
];
const animateClarity = (timeline, root) => {
    const fragments = root.querySelectorAll('.confidence-clutter');
    if (fragments.length)
        timeline.to(fragments, { x: (index) => index % 2 ? 48 : -48, y: -20, rotation: (index) => index % 2 ? 15 : -14, autoAlpha: 0.12, scale: 0.8, stagger: 0.06, duration: 0.4, ease: 'power2.in' }, 0.12);
    const path = root.querySelector('.confidence-journey-path');
    if (path)
        timeline.fromTo(path, { strokeDashoffset: 270 }, { strokeDashoffset: 0, duration: 0.8, ease: 'none' }, 0.12);
    const items = root.querySelectorAll('.confidence-step');
    if (items.length)
        timeline.fromTo(items, { x: 34, autoAlpha: 0.35 }, { x: 0, autoAlpha: 1, stagger: 0.11, duration: 0.25, ease: 'power2.out' }, 0.28);
    const student = root.querySelector('.confidence-student');
    if (student)
        timeline.fromTo(student, { scale: 0.92, y: 8 }, { scale: 1.04, y: -7, duration: 0.65, ease: 'power2.out' }, 0.32);
};
export default function ConfidenceScene() {
    const root = useRef(null);
    const reduce = useReducedMotion();
    useStoryScroll(root, animateClarity, '+=115%');
    return (<section ref={root} id="scene-8" aria-labelledby="confidence-title" className="relative bg-[#9be4c1] px-5 text-[#171821] sm:px-8">
      <div data-story-pin className="relative mx-auto flex min-h-svh max-w-7xl flex-col justify-center">
        <div className="grid items-center gap-7 md:grid-cols-[.95fr_1.05fr] md:gap-12">
          <div>
            <h2 id="confidence-title" className="font-display text-[clamp(2.45rem,5.2vw,5rem)] font-black leading-[.88] tracking-[-.085em]">LESS SEARCHING.<br /><span className="text-[#2455ff]">MORE CREATING.</span><br />BETTER CAMPUS CONNECTIONS.</h2>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-[#171821]/75">Same student. Same big idea. Now the important pieces are in one loop—so Mira can get back to making something.</p>
            <motion.a href="#join" whileHover={reduce ? undefined : { x: 3, y: -2 }} whileTap={reduce ? undefined : { scale: 0.98 }} className="mt-6 inline-flex min-h-11 items-center gap-3 rounded-xl border-2 border-[#171821] bg-[#171821] px-5 text-xs font-black text-white shadow-[4px_5px_0_#fffcf5]">Ready for the reveal? <ArrowRight size={15}/></motion.a>
          </div>
          <div className="relative grid min-h-[330px] items-center gap-4 rounded-[2rem] border-2 border-[#171821] bg-[#f8f5ed] p-5 shadow-[7px_8px_0_#171821] sm:grid-cols-[.68fr_1.32fr] sm:p-7">
            <div aria-hidden="true" className="absolute inset-0 overflow-hidden rounded-[inherit]">
              <span className="confidence-clutter absolute left-[7%] top-[11%] rotate-[-12deg] rounded-lg border border-[#171821] bg-[#ff795d] px-2 py-1 text-[7px] font-black">LOST PDF</span>
              <span className="confidence-clutter absolute right-[8%] top-[13%] rotate-[9deg] rounded-lg border border-[#171821] bg-[#c8b4ff] px-2 py-1 text-[7px] font-black">OLD POSTER</span>
              <span className="confidence-clutter absolute bottom-[12%] left-[18%] rotate-[7deg] rounded-lg border border-[#171821] bg-[#f6e984] px-2 py-1 text-[7px] font-black">MISSED? DEADLINE</span>
              <svg className="absolute left-[25%] top-[23%] h-[58%] w-[44%] opacity-35" viewBox="0 0 200 200" aria-hidden="true"><path className="confidence-journey-path" d="M10 160C50 24 145 40 178 12" fill="none" stroke="#2455ff" strokeWidth="4" strokeLinecap="round" strokeDasharray="270" strokeDashoffset="270"/></svg>
            </div>
            <div className="confidence-student relative z-[1] mx-auto w-36 sm:w-full sm:max-w-[180px]">
              <StudentCharacter mood="confident" label="Mira, the same fictional student, now confidently building with her team" className="h-auto w-full drop-shadow-[4px_6px_0_rgba(23,24,33,.15)]"/>
              <span className="mx-auto mt-1 block w-fit rounded-full border border-[#171821]/40 bg-white/75 px-2.5 py-1 text-[7px] font-black uppercase tracking-widest">Mira · same demo student</span>
            </div>
            <ol className="relative z-[1] flex flex-col gap-2.5">
              {steps.map(({ icon: Icon, text }) => <li key={text} className="confidence-step flex items-center gap-3 rounded-xl border border-[#171821]/15 bg-white/80 p-2.5 shadow-[2px_2px_0_rgba(23,24,33,.12)] sm:p-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-[#171821] bg-[#f6e984]"><Icon size={15}/></span><span className="flex-1 text-[8px] font-bold leading-snug sm:text-[9px]">{text}</span><span className="grid h-5 w-5 place-items-center rounded-full bg-[#9be4c1]"><Check size={12}/></span>
              </li>)}
            </ol>
          </div>
        </div>
        <p className="mb-0 mt-5 text-right text-[7px] font-bold uppercase tracking-[.15em] text-[#171821]/55">One continuous demo story · all content is fictional</p>
      </div>
    </section>);
}
