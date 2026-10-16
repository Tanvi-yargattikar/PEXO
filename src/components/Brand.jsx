import { useEffect, useRef } from 'react';
export function LogoMark({ small = false }) {
    return (<svg aria-hidden="true" className={small ? 'logo-mark logo-mark-small' : 'logo-mark'} viewBox="0 0 52 52" fill="none">
      <path d="M25.5 3.5c2.3 12.3 7.5 17.5 19.8 19.8-12.3 2.3-17.5 7.5-19.8 19.8C23.2 30.8 18 25.6 5.7 23.3 18 21 23.2 15.8 25.5 3.5Z" fill="currentColor" stroke="#171821" strokeWidth="3" strokeLinejoin="round"/>
      <circle cx="42.5" cy="9" r="5" fill="#ff785c" stroke="#171821" strokeWidth="2.5"/>
      <path d="M8 39.5h7M11.5 36v7" stroke="#171821" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>);
}
export function Wordmark({ footer = false }) {
    return (<a className={`wordmark${footer ? ' wordmark-footer' : ''}`} href="#top" aria-label="PEXO home">
      <LogoMark />
      <span>pexo<span className="wordmark-dot">.</span></span>
    </a>);
}
export function ArrowIcon({ diagonal = false }) {
    return diagonal ? (<svg aria-hidden="true" viewBox="0 0 20 20" fill="none"><path d="M5 15 15 5M6 5h9v9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>) : (<svg aria-hidden="true" viewBox="0 0 20 20" fill="none"><path d="M3 10h13m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>);
}
export function Reveal({ children, className = '', delay = 0 }) {
    const ref = useRef(null);
    useEffect(() => {
        const node = ref.current;
        if (!node)
            return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
            node.classList.add('is-visible');
            return;
        }
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                node.classList.add('is-visible');
                observer.disconnect();
            }
        }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
        observer.observe(node);
        return () => observer.disconnect();
    }, []);
    return <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}
export function MiniArrow() {
    return <span className="mini-arrow" aria-hidden="true"><ArrowIcon /></span>;
}
