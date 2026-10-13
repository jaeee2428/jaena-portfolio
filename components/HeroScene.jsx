'use client';

import dynamic from 'next/dynamic';

// three.js needs the browser, so the scene is client-only.
const Diorama = dynamic(() => import('./Diorama'), {
    ssr: false,
    loading: () => <div className="diorama diorama-loading">building the island…</div>,
});

export default function HeroScene() {
    return <Diorama />;
}
