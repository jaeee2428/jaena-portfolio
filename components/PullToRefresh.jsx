'use client';

import { useEffect, useRef, useState } from 'react';

// Pull down at the top of the page (touch) or keep scrolling up past the top
// (wheel / trackpad) and a little sun peeks in; pull far enough and it reloads.
const MAX = 120; // px the sun can travel
const TRIGGER = 90; // px of travel that triggers a refresh
const WHEEL_GAP = 250; // ms between wheel events that starts a new gesture

export default function PullToRefresh() {
    const [pull, setPull] = useState(0);
    const [refreshing, setRefreshing] = useState(false);
    const pullRef = useRef(0);
    const busy = useRef(false);

    useEffect(() => {
        const atTop = () => window.scrollY <= 0;
        const set = (v) => {
            pullRef.current = v;
            setPull(v);
        };
        const refresh = () => {
            busy.current = true;
            setRefreshing(true);
            set(TRIGGER);
            setTimeout(() => window.location.reload(), 900);
        };
        const release = () => {
            if (busy.current) return;
            if (pullRef.current >= TRIGGER) refresh();
            else set(0);
        };

        // touch
        let startY = null;
        const onTouchStart = (e) => {
            if (busy.current || e.touches.length !== 1) return;
            startY = atTop() ? e.touches[0].clientY : null;
        };
        const onTouchMove = (e) => {
            if (startY === null || busy.current) return;
            const dy = e.touches[0].clientY - startY;
            if (dy <= 0 || !atTop()) {
                if (pullRef.current) set(0);
                return;
            }
            // rubbery: easy at first, harder near the end
            set(Math.min(MAX, MAX * (1 - Math.exp(-dy / 160))));
        };
        const onTouchEnd = () => {
            if (startY === null) return;
            startY = null;
            release();
        };

        // wheel / trackpad: only gestures that begin while already at the top,
        // so momentum from scrolling back up the page never triggers it
        let lastWheel = 0;
        let gestureFromTop = false;
        let wheelPull = 0;
        let idle;
        const onWheel = (e) => {
            if (busy.current) return;
            const now = performance.now();
            if (now - lastWheel > WHEEL_GAP) {
                gestureFromTop = atTop();
                wheelPull = 0;
            }
            lastWheel = now;
            if (!gestureFromTop || !atTop() || e.deltaY >= 0) {
                if (e.deltaY > 0 && pullRef.current) set(0);
                return;
            }
            wheelPull += -e.deltaY;
            set(Math.min(MAX, MAX * (1 - Math.exp(-wheelPull / 260))));
            clearTimeout(idle);
            idle = setTimeout(release, 180);
        };

        window.addEventListener('touchstart', onTouchStart, { passive: true });
        window.addEventListener('touchmove', onTouchMove, { passive: true });
        window.addEventListener('touchend', onTouchEnd, { passive: true });
        window.addEventListener('touchcancel', onTouchEnd, { passive: true });
        window.addEventListener('wheel', onWheel, { passive: true });
        return () => {
            clearTimeout(idle);
            window.removeEventListener('touchstart', onTouchStart);
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('touchend', onTouchEnd);
            window.removeEventListener('touchcancel', onTouchEnd);
            window.removeEventListener('wheel', onWheel);
        };
    }, []);

    const ready = pull >= TRIGGER;
    const label = refreshing ? 'refreshing…' : ready ? 'let go!' : 'pull to refresh';

    return (
        <div
            className={`ptr ${pull > 0 || refreshing ? 'is-on' : ''} ${refreshing ? 'is-refreshing' : ''}`}
            style={{ transform: `translate(-50%, ${pull - 110}px)` }}
            aria-hidden="true"
        >
            <svg viewBox="0 0 280 96" width="210" height="72" fill="none" stroke="#2b2320" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <g className="ptr-rays" style={{ transform: `rotate(${pull * 1.2}deg)` }}>
                    <path d="M140 8v-6" />
                    <path d="M112 16l-4-5" />
                    <path d="M168 16l4-5" />
                    <path d="M94 34l-6-2" />
                    <path d="M186 34l6-2" />
                </g>
                <circle cx="140" cy="52" r="34" fill="#f3c752" />
                <circle cx="128" cy="48" r="2.6" fill="#2b2320" stroke="none" />
                <circle cx="152" cy="48" r="2.6" fill="#2b2320" stroke="none" />
                {ready || refreshing ? <path d="M131 56q9 11 18 0z" fill="#e4583e" /> : <path d="M133 57q7 7 14 0" />}
                <ellipse cx="120" cy="58" rx="5" ry="3" fill="#ec8fb0" stroke="none" />
                <ellipse cx="160" cy="58" rx="5" ry="3" fill="#ec8fb0" stroke="none" />
                <path d="M36 74h50a10 10 0 0 0-6-18a14 14 0 0 0-26-4a11 11 0 0 0-18 22z" fill="#fbf7ef" />
                <path d="M196 70h44a9 9 0 0 0-5-16a12 12 0 0 0-23-3a10 10 0 0 0-16 19z" fill="#fbf7ef" />
                <path d="M26 30l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" fill="#e4583e" strokeWidth="1.6" />
                <path d="M254 24l1.6 4.4 4.4 1.6-4.4 1.6-1.6 4.4-1.6-4.4-4.4-1.6 4.4-1.6z" fill="#8db7d6" strokeWidth="1.4" />
                <path d="M232 82c-3-4-9-1-6 4l6 5 6-5c3-5-3-8-6-4z" fill="#e4583e" strokeWidth="1.6" />
            </svg>
            <span className="ptr-label">{label}</span>
        </div>
    );
}
