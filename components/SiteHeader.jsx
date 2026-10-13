'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { profile, siteNav } from '@/lib/data';
import { Squiggle } from './Doodles';

export default function SiteHeader() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const isActive = (href) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

    const links = siteNav.map((l) => (
        <Link
            key={l.href}
            href={l.href}
            className={isActive(l.href) ? 'active' : ''}
            onClick={() => setOpen(false)}
        >
            {l.label}
            {isActive(l.href) && <Squiggle />}
        </Link>
    ));

    return (
        <header className="site-header">
            <div className="container header-inner">
                <Link href="/" className="brand" onClick={() => setOpen(false)}>
                    Jaena <em>De La Peña</em>
                </Link>

                <button
                    className="menu-btn"
                    aria-label="Toggle menu"
                    aria-expanded={open}
                    onClick={() => setOpen((o) => !o)}
                >
                    {open ? 'close' : 'menu'}
                </button>

                <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Main">
                    {links}
                    <a className="nav-cv" href={profile.cvUrl} download onClick={() => setOpen(false)}>
                        CV
                    </a>
                </nav>
            </div>
        </header>
    );
}
