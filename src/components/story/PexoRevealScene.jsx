import { useRef } from 'react';
import { ArrowDown, ArrowUpRight, BookOpenText, CalendarDays, Cpu, FileText, Github, MessageCircle, UsersRound } from 'lucide-react';
import { useStoryScroll } from '../../hooks/useStoryScroll';
import { LogoMark } from '../Brand';
const categories = [
    { icon: CalendarDays, label: 'Campus events', tone: 'bg-[#f6e984]' },
    { icon: Cpu, label: 'Hackathons', tone: 'bg-[#ff795d]' },
    { icon: FileText, label: 'Academic docs', tone: 'bg-[#9be4c1]' },
    { icon: BookOpenText, label: 'Internships', tone: 'bg-[#c8b4ff]' },
    { icon: Github, label: 'Portfolios', tone: 'bg-[#fffcf5]' },
    { icon: UsersRound, label: 'Projects + clubs', tone: 'bg-[#93b5ff]' },
    { icon: MessageCircle, label: 'AI campus answers', tone: 'bg-[#f6e984]' },
];
const animateReveal = (timeline, root) => {
    const mark = root.querySelector('.reveal-centerpiece');
    if (mark)
        timeline.fromTo(mark, { scale: 0.42, rotation: -14, autoAlpha: 0.3 }, { scale: 1, rotation: 0, autoAlpha: 1, duration: 0.55, ease: 'none' }, 0.15);
    const tokens = root.querySelectorAll('.reveal-token');
    tokens.forEach((token, index) => timeline.fromTo(token, { x: index % 2 ? 150 : -150, y: index % 3 ? 50 : -60, rotation: index % 2 ? 16 : -14, autoAlpha: 0.2 }, { x: 0, y: 0, rotation: index % 2 ? 3 : -3, autoAlpha: 1, duration: 0.34, ease: 'none' }, 0.18 + index * 0.045));
    const orbit = root.querySelector('.reveal-orbit');
    if (orbit)
        timeline.fromTo(orbit, { scale: 0.7, rotation: -40 }, { scale: 1.08, rotation: 20, duration: 0.65, ease: 'none' }, 0);
};
export default function PexoRevealScene() {
    const root = useRef(null);
    useStoryScroll(root, animateReveal, '+=80%');
    return (<section ref={root} id="scene-4" aria-labelledby="pexo-reveal-title" className="relative bg-[#2455ff] text-white">
      <div data-story-pin className="relative flex min-h-svh items-center overflow-hidden py-8 md:py-10">
        <div aria-hidden="true" className="reveal-orbit pointer-events-none absolute left-1/2 top-1/2 h-[94vw] max-h-[760px] w-[94vw] max-w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20"/>
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[76vw] max-h-[610px] w-[76vw] max-w-[610px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#f6e984]/45"/>
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-8 px-5 sm:px-8 md:grid-cols-[1.03fr_.97fr] md:gap-12 lg:px-12">
          <div>
            <h2 id="pexo-reveal-title" className="font-display text-[clamp(2.7rem,6.2vw,6rem)] font-black leading-[.84] tracking-[-.095em]">MEET<br /><span className="text-[#f6e984]">PEXO.</span><br />YOUR ENTIRE CAMPUS,<br /><span className="text-[#ffb8a9]">IN ONE LOOP.</span></h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/80 md:text-base">Scattered campus info moves together. Your events, documents, projects, people and AI-powered campus answers finally have one place to meet.</p>
            <a href="#scene-5" className="mt-6 inline-flex min-h-12 items-center gap-3 rounded-xl border-2 border-[#171821] bg-[#f6e984] px-5 font-display text-xs font-black text-[#171821] shadow-[4px_5px_0_#171821] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[1px_2px_0_#171821]">Explore the loop <ArrowDown size={16}/></a>
          </div>
          <div className="relative mx-auto flex min-h-[320px] w-full max-w-[540px] items-center justify-center sm:min-h-[400px]">
            <div className="reveal-centerpiece relative z-[2] flex h-40 w-40 flex-col items-center justify-center rounded-[2.3rem] border-[3px] border-[#171821] bg-[#f6e984] text-[#171821] shadow-[8px_9px_0_#171821] sm:h-52 sm:w-52 sm:rounded-[2.8rem]">
              <LogoMark /><span className="mt-2 font-display text-4xl font-black tracking-[-.12em] sm:text-5xl">PEXO</span><span className="mt-1 text-[7px] font-black uppercase tracking-[.2em]">YOUR CAMPUS · ONE LOOP</span>
            </div>
            {categories.map(({ icon: Icon, label, tone }, index) => (<div key={label} className={`reveal-token absolute z-[3] flex items-center gap-2 rounded-xl border-2 border-[#171821] ${tone} px-3 py-2 text-[#171821] shadow-[3px_4px_0_#171821] ${['left-[0%] top-[9%] sm:left-[4%] sm:top-[10%]', 'right-[0%] top-[8%] sm:right-[4%] sm:top-[8%]', 'left-[0%] top-[40%] sm:left-[0%] sm:top-[42%]', 'right-[0%] top-[42%] sm:right-[0%] sm:top-[42%]', 'bottom-[7%] left-[4%] sm:bottom-[8%] sm:left-[9%]', 'bottom-[7%] right-[1%] sm:bottom-[8%] sm:right-[6%]', 'left-[3%] top-[27%] sm:left-[33%] sm:top-[3%]'][index]}`}>
                  <Icon size={16} strokeWidth={2.5}/><span className="text-[8px] font-black sm:text-[9px]">{label}</span><ArrowUpRight size={12}/>
              </div>))}
            <div className="absolute bottom-[1%] left-1/2 -translate-x-1/2 whitespace-nowrap text-[7px] font-bold uppercase tracking-[.16em] text-white/55">Sample campus categories · illustrative concept</div>
          </div>
        </div>
      </div>
    </section>);
}
