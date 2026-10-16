import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
/** Pin one story panel on larger screens and revert every trigger/tween on cleanup. */
export function useStoryScroll(rootRef, direct, distance = '+=125%') {
    useLayoutEffect(() => {
        const root = rootRef.current;
        if (!root)
            return;
        const media = gsap.matchMedia();
        media.add('(min-width: 768px) and (prefers-reduced-motion: no-preference)', () => {
            const panel = root.querySelector('[data-story-pin]');
            if (!panel)
                return;
            const context = gsap.context(() => {
                const timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: root,
                        pin: panel,
                        start: 'top top',
                        end: distance,
                        scrub: true,
                        anticipatePin: 1,
                        pinSpacing: true,
                        invalidateOnRefresh: true,
                    },
                });
                direct(timeline, root);
                const panelExitStart = Math.max(0, timeline.duration() - 0.22);
                timeline.to(panel, {
                    y: -28,
                    ease: 'none',
                    duration: 0.22,
                }, panelExitStart);
            }, root);
            return () => context.revert();
        });
        return () => media.revert();
    }, [rootRef, direct, distance]);
}
