import { useRef, useState } from 'react';
import { AlarmClock, ArrowDown, ArrowRight, Bell, FileText } from 'lucide-react';
import { useStoryScroll } from '../hooks/useStoryScroll';
import StudentCharacter from './story/StudentCharacter';
const animateHeroChaos = (timeline, root) => {
    const objects = root.querySelectorAll('.hero-chaos-object:not(.hero-wave-one):not(.hero-wave-two):not(.student-illustration)');
    objects.forEach((object, index) => timeline.to(object, {
        x: index % 2 ? 28 : -22,
        y: index % 3 ? -18 : 20,
        rotation: index % 2 ? 7 : -8,
        scale: index % 3 ? 1.04 : 0.94,
        duration: 0.5,
        ease: 'none',
    }, 0.38 + index * 0.045));
    const firstWave = root.querySelectorAll('.hero-wave-one');
    if (firstWave.length)
        timeline.fromTo(firstWave, { autoAlpha: 0, scale: 0.62, y: 42, rotation: -13 }, { autoAlpha: 1, scale: 1, y: 0, rotation: 0, stagger: 0.1, duration: 0.26, ease: 'none' }, 0.2);
    const secondWave = root.querySelectorAll('.hero-wave-two');
    if (secondWave.length)
        timeline.fromTo(secondWave, { autoAlpha: 0, scale: 0.55, y: -35, rotation: 12 }, { autoAlpha: 1, scale: 1, y: 0, rotation: -2, stagger: 0.1, duration: 0.23, ease: 'none' }, 0.57);
    const calmFace = root.querySelector('.hero-student-calm');
    const overwhelmedFace = root.querySelector('.hero-student-overwhelmed');
    if (calmFace)
        timeline.to(calmFace, { autoAlpha: 0, duration: 0.12 }, 0.72);
    if (overwhelmedFace)
        timeline.fromTo(overwhelmedFace, { autoAlpha: 0, y: 10, rotation: -4 }, { autoAlpha: 1, y: 0, rotation: 0, duration: 0.12 }, 0.72);
    const message = root.querySelector('.hero-chaos-message');
    if (message)
        timeline.fromTo(message, { scale: 0.72, rotation: -8, autoAlpha: 0.3 }, { scale: 1, rotation: 3, autoAlpha: 1, duration: 0.25, ease: 'none' }, 0.55);
};
function DraggableSticker() {
    const bounds = useRef(null);
    const [drag, setDrag] = useState({ x: 0, y: 0, pointerX: 0, pointerY: 0, startX: 0, startY: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const parallaxFrame = useRef(null);
    const pointerPoint = useRef({ x: 0, y: 0 });
    const moveDecorations = (event) => {
        if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches)
            return;
        const rect = bounds.current?.getBoundingClientRect();
        if (!rect?.width || !rect.height)
            return;
        pointerPoint.current = { x: (event.clientX - rect.left) / rect.width - 0.5, y: (event.clientY - rect.top) / rect.height - 0.5 };
        if (parallaxFrame.current !== null)
            return;
        parallaxFrame.current = window.requestAnimationFrame(() => {
            parallaxFrame.current = null;
            const { x, y } = pointerPoint.current;
            const layers = [['.orbit-one', 15], ['.orbit-two', 9], ['.hero-sunburst', 19], ['.poster-star', 11]];
            layers.forEach(([selector, strength]) => {
                const element = bounds.current?.querySelector(selector);
                if (element)
                    element.style.translate = `${-x * strength}px ${-y * strength}px`;
            });
        });
    };
    const resetDecorations = () => {
        if (parallaxFrame.current !== null)
            window.cancelAnimationFrame(parallaxFrame.current);
        parallaxFrame.current = null;
        bounds.current?.querySelectorAll('.orbit-one, .orbit-two, .hero-sunburst, .poster-star').forEach((element) => { element.style.translate = '0px 0px'; });
    };
    const clamp = (x, y) => {
        const parent = bounds.current?.getBoundingClientRect();
        const sticker = bounds.current?.querySelector('.drag-sticker')?.getBoundingClientRect();
        if (!parent || !sticker)
            return { x, y };
        const baseLeft = sticker.left - drag.x;
        const baseTop = sticker.top - drag.y;
        return { x: Math.min(parent.right - sticker.width - baseLeft, Math.max(parent.left - baseLeft, x)), y: Math.min(parent.bottom - sticker.height - baseTop, Math.max(parent.top - baseTop, y)) };
    };
    const start = (event) => {
        if (event.button !== 0)
            return;
        event.currentTarget.setPointerCapture(event.pointerId);
        setIsDragging(true);
        setDrag((current) => ({ ...current, pointerX: event.clientX, pointerY: event.clientY, startX: current.x, startY: current.y }));
    };
    const move = (event) => {
        if (!isDragging)
            return;
        const next = clamp(drag.startX + event.clientX - drag.pointerX, drag.startY + event.clientY - drag.pointerY);
        setDrag((current) => ({ ...current, ...next }));
    };
    const nudge = (event) => {
        const steps = { ArrowLeft: [-18, 0], ArrowRight: [18, 0], ArrowUp: [0, -18], ArrowDown: [0, 18] };
        const step = steps[event.key];
        if (!step)
            return;
        event.preventDefault();
        const next = clamp(drag.x + step[0], drag.y + step[1]);
        setDrag((current) => ({ ...current, ...next }));
    };
    return (<div className="hero-canvas" ref={bounds} onPointerMove={moveDecorations} onPointerLeave={resetDecorations}>
      <div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/>
      <div className="hero-sunburst" aria-hidden="true">✳</div>
      <div className="hero-float-note float-note-one"><span>YOUR<br />CAMPUS</span><b>↗</b></div>
      <article className="hero-poster hero-poster-blue hero-chaos-object" aria-label="Fictional demo event poster, The Loop Hackathon">
        <span className="demo-stamp">DEMO EVENT</span><span className="poster-eyebrow">24 HOURS · 01 BIG IDEA</span><div className="poster-star">✳</div><h2>THE<br />LOOP<span>—</span><br />HACK</h2><div className="poster-bottom"><span>MADE FOR<br />WHAT'S NEXT</span><b>OCT<br />24—25</b></div>
      </article>
      <article className="hero-profile-peek hero-chaos-object" aria-label="Fictional demo student profile">
        <div className="profile-mini-head"><span className="mini-avatar">MS</span><div><b>Mira Shah</b><span>CS · 3rd year</span></div><span className="profile-dot">↗</span></div>
        <div className="profile-mini-line"><span>✳</span><b>Python · Product thinking</b></div><div className="profile-mini-foot">PROFILE PREVIEW <span>DEMO ONLY</span></div>
      </article>
      <div className="student-illustration hero-chaos-object" aria-hidden="true">
        <span className="hero-student-face hero-student-calm"><StudentCharacter mood="focused" className="h-full w-full"/></span>
        <span className="hero-student-face hero-student-overwhelmed"><StudentCharacter mood="overwhelmed" className="h-full w-full"/></span>
      </div>
      <article className="hero-project-peek hero-chaos-object hero-wave-one" aria-label="Fictional demo project card"><div className="project-tag">✳ PROJECT IN PROGRESS</div><h3>SignSense</h3><p>Small gestures.<br />A louder world.</p><div className="project-avatars"><i>MS</i><i>+2</i><span>3 friends on this</span></div></article>
      <div className="hero-notification hero-chaos-object hero-wave-one"><span className="notification-icon">⚡</span><span><b>YOUR PEOPLE ARE HERE</b><small>2 new demo profiles to meet</small></span><span className="notification-dot"/></div>
      <div className="hero-chaos-message hero-wave-two absolute left-[57%] top-[57%] z-[8] flex -rotate-3 items-center gap-2 rounded-lg border-2 border-[#171821] bg-[#c8b4ff] px-2 py-1.5 text-[7px] font-black shadow-[3px_4px_0_#171821] sm:text-[8px]"><AlarmClock size={13}/> IS THIS DUE TODAY?</div>
      <div className="absolute bottom-[33%] left-[8%] z-[7] flex -rotate-6 items-center gap-1.5 rounded-lg border-2 border-[#171821] bg-[#fffcf5] px-2 py-1.5 text-[7px] font-black shadow-[3px_3px_0_#171821] hero-chaos-object hero-wave-two"><FileText size={13}/> CIRCULAR_FINAL_v7.pdf</div>
      <div className="absolute right-[5%] top-[25%] z-[8] flex rotate-3 items-center gap-1.5 rounded-lg border-2 border-[#171821] bg-[#9be4c1] px-2 py-1.5 text-[7px] font-black shadow-[3px_3px_0_#171821] hero-wave-two"><Bell size={12}/> ROOM CHANGED · AGAIN</div>
      <button type="button" className={`drag-sticker${isDragging ? ' is-dragging' : ''}`} style={{ '--drag-x': `${drag.x}px`, '--drag-y': `${drag.y}px` }} onPointerDown={start} onPointerMove={move} onPointerUp={() => setIsDragging(false)} onPointerCancel={() => setIsDragging(false)} onKeyDown={nudge} aria-label="Draggable PEXO campus sticker. Drag with pointer or move with arrow keys."><span>DRAG<br />ME!</span><i>↗</i></button>
      <span className="canvas-caption">A WHOLE LOT OF CAMPUS, IN ONE LOOP <i>✳</i></span>
    </div>);
}
export default function Hero() {
    const root = useRef(null);
    useStoryScroll(root, animateHeroChaos, '+=80%');
    return (<section ref={root} className="hero-section relative min-h-[125svh]" id="top" aria-labelledby="hero-chaos-title">
      <div className="hero-grid" data-story-pin>
        <div className="hero-copy">
          <h1 id="hero-chaos-title" className="!text-[clamp(2.45rem,5.7vw,4.55rem)] !leading-[.86] !tracking-[-.085em]">
            <span className="block">COLLEGE IS FUN.</span>
            <span className="block">FINDING</span>
            <span className="block">INFORMATION?</span>
            <span className="hero-headline-last !block !whitespace-normal"><em>NOT SO MUCH.</em></span>
          </h1>
          <p className="hero-description">Lost notices. Missed hackathons. Buried PDFs. Teammates you can't find. Sound familiar?</p>
          <div className="hero-actions">
            <a className="button button-blue magnetic-button" href="#scene-2">FIX MY CAMPUS LIFE <span className="button-arrow"><ArrowDown size={15}/></span></a>
            <a className="button button-outline magnetic-button" href="#scene-4">MEET PEXO <span className="button-arrow"><ArrowRight size={15}/></span></a>
          </div>
        </div>
        <div className="hero-visual" aria-label="A fictional student surrounded by floating college posters and notifications"><DraggableSticker /></div>
      </div>
    </section>);
}
