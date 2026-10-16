import { useRef } from 'react';
import { AlarmClock, BellRing, CalendarDays, FileText, GraduationCap, Search, X } from 'lucide-react';
import { useStoryScroll } from '../../hooks/useStoryScroll';
import StudentCharacter from './StudentCharacter';
const papers = [
    { className: 'info-card-circular', title: 'COLLEGE CIRCULAR', detail: 'Fwd: Final copy v7 (USE THIS??)', stamp: 'PDF', icon: FileText, color: 'bg-[#f6e984]', place: 'left-[0%] top-[12%] -rotate-6 md:left-[4%] md:top-[22%]' },
    { className: 'info-card-hackathon', title: 'THE 24-HOUR HACK', detail: 'Registration closes tonight', stamp: 'MISSED?', icon: BellRing, color: 'bg-[#9be4c1]', place: 'right-[0%] top-[4%] rotate-3 md:right-[7%] md:top-[11%]' },
    { className: 'info-card-internship', title: 'INTERNSHIP.pdf', detail: 'Deadline: …is that today?', stamp: '47 PAGES', icon: GraduationCap, color: 'bg-[#c8b4ff]', place: 'left-[0%] bottom-[8%] rotate-3 md:left-[16%] md:bottom-[7%]' },
    { className: 'info-card-rules', title: 'PROJECT RULES', detail: 'FINAL_final_REAL_v2.docx', stamp: 'OLD COPY', icon: X, color: 'bg-[#ffb8a9]', place: 'right-[1%] bottom-[8%] -rotate-3 md:right-[17%] md:bottom-[8%]' },
    { className: 'info-card-workshop', title: 'POSTER: DESIGN JAM', detail: 'Room changed. Again.', stamp: 'WHERE?', icon: Search, color: 'bg-[#93b5ff]', place: 'left-[4%] top-[43%] rotate-3 md:left-[8%] md:top-[46%]' },
    { className: 'info-card-calendar', title: 'ACADEMIC CALENDAR', detail: 'Three different versions', stamp: 'MAYBE?', icon: CalendarDays, color: 'bg-[#ffdf95]', place: 'right-[2%] top-[42%] -rotate-6 md:right-[10%] md:top-[43%]' },
];
const animateInformationChaos = (timeline, root) => {
    const paths = [
        { selector: '.info-card-circular', x: -290, y: -120, rotation: -22, at: 0.06 },
        { selector: '.info-card-hackathon', x: 320, y: -150, rotation: 18, at: 0.16 },
        { selector: '.info-card-internship', x: -260, y: 135, rotation: 13, at: 0.26 },
        { selector: '.info-card-rules', x: 300, y: 145, rotation: -18, at: 0.35 },
        { selector: '.info-card-workshop', x: -350, y: 15, rotation: 25, at: 0.42 },
        { selector: '.info-card-calendar', x: 340, y: 30, rotation: -24, at: 0.49 },
    ];
    for (const path of paths) {
        const target = root.querySelector(path.selector);
        if (target)
            timeline.fromTo(target, { autoAlpha: 0, x: path.x, y: path.y, rotation: path.rotation, scale: 0.72 }, { autoAlpha: 1, x: 0, y: 0, rotation: path.rotation * -0.14, scale: 1, duration: 0.35, ease: 'none' }, path.at);
    }
    const lines = root.querySelectorAll('.info-headline-line');
    if (lines.length)
        timeline.fromTo(lines, { y: 28, autoAlpha: 0.18 }, { y: 0, autoAlpha: 1, duration: 0.27, stagger: 0.15, ease: 'none' }, 0.1);
    const deadline = root.querySelector('.info-missed-deadline');
    if (deadline)
        timeline.fromTo(deadline, { scale: 0.6, rotation: -12, autoAlpha: 0 }, { scale: 1, rotation: 4, autoAlpha: 1, duration: 0.2, ease: 'none' }, 0.68);
};
export default function InfoChaosScene() {
    const root = useRef(null);
    useStoryScroll(root, animateInformationChaos, '+=80%');
    return (<section ref={root} id="scene-2" aria-labelledby="info-chaos-title" className="relative bg-[#1b1a28] text-white">
      <div data-story-pin className="relative flex min-h-svh items-center overflow-hidden py-8 md:py-10">
        <div aria-hidden="true" className="absolute -left-28 -top-28 h-80 w-80 rounded-full border border-[#9d79ff]/25"/>
        <div aria-hidden="true" className="absolute -bottom-44 -right-20 h-96 w-96 rounded-full border border-dashed border-[#ff795d]/30"/>
        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div>
            <h2 id="info-chaos-title" className="font-display text-[clamp(2.2rem,5.1vw,4.55rem)] font-black leading-[.88] tracking-[-.075em]">
              <span className="info-headline-line block">ONE COLLEGE.</span>
              <span className="info-headline-line block text-[#f6e984]">TEN DIFFERENT PLACES.</span>
              <span className="info-headline-line block text-[#ff795d]">ZERO CLARITY.</span>
            </h2>
          </div>
          <div className="relative mt-5 min-h-[300px] rounded-[2rem] border border-white/15 bg-white/[.035] sm:min-h-[355px] md:mt-7 md:min-h-[370px]">
            <div className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2">
              <div className="relative mx-auto w-[124px] sm:w-[154px] md:w-[176px]">
                <StudentCharacter mood="overwhelmed" label="The same fictional student, overwhelmed by scattered campus notices" className="h-auto w-full drop-shadow-[5px_7px_0_rgba(0,0,0,.22)]"/>
                <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/20 bg-[#1b1a28]/90 px-3 py-1 text-[7px] font-bold uppercase tracking-widest text-white/65">Mira · fictional student</span>
              </div>
            </div>
            {papers.map(({ className, title, detail, stamp, icon: Icon, color, place }) => (<article key={className} className={`info-chaos-paper ${className} absolute z-[3] w-[43%] max-w-[210px] rounded-xl border-2 border-[#171821] ${color} p-2 text-[#171821] shadow-[4px_5px_0_#101018] sm:w-[34%] sm:p-3 md:w-[27%] ${place}`}>
                <div className="flex items-start justify-between gap-2"><span className="flex items-center gap-1.5 text-[7px] font-black tracking-wide sm:text-[8px]"><Icon size={13} strokeWidth={2.5}/>{title}</span><span className="rounded border border-[#171821]/50 px-1 py-0.5 text-[6px] font-black">{stamp}</span></div>
                <p className="mb-0 mt-2 border-t border-[#171821]/20 pt-1.5 text-[7px] font-semibold opacity-75 sm:text-[8px]">{detail}</p>
              </article>))}
            <div className="info-missed-deadline absolute bottom-[5%] left-1/2 z-[4] flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border-2 border-[#171821] bg-[#ff795d] px-3 py-2 text-[8px] font-black text-[#171821] shadow-[3px_4px_0_#101018] sm:bottom-[4%] sm:px-4 sm:text-[9px]">
              <AlarmClock size={15}/> DEADLINE: SOMEWHERE IN HERE? <span aria-hidden="true">↯</span>
            </div>
          </div>
        </div>
      </div>
    </section>);
}
