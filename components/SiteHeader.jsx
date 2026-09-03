'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { profile, siteNav } from '@/lib/data';

export default function SiteHeader() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const isActive = (href) =>
        href === '/' ? pathname === '/' : pathname.startsWith(href);

    return (
        <header className="site-header">
            <div className="container header-inner">
                <Link href="/" className="brand" onClick={() => setOpen(false)}>
                    <span className="monogram">J</span>
                    <span>
                        <span className="brand-name">Jaena De La Peña</span>
                        <div className="brand-tag">{profile.roleLine}</div>
                    </span>
                </Link>

                <button
                    className="menu-btn"
                    aria-label="Toggle menu"
                    onClick={() => setOpen((o) => !o)}
                >
                    {open ? 'CLOSE ✕' : 'MENU'}
                </button>

                <nav className="nav-links" aria-label="Main">
                    {siteNav.map((l) => (
                        <Link key={l.href} href={l.href} className={isActive(l.href) ? 'active' : ''}>
                            {l.label}
                        </Link>
                    ))}
                    <a className="btn-cv" href={profile.cvUrl} download>
                        CV ↓
                    </a>
                </nav>
            </div>

            <div className="container">
                <nav className={`mobile-menu ${open ? 'open' : ''}`} aria-label="Mobile">
                    {siteNav.map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            className={isActive(l.href) ? 'active' : ''}
                            onClick={() => setOpen(false)}
                        >
                            {l.label}
                        </Link>
                    ))}
                    <a className="btn-cv" href={profile.cvUrl} download onClick={() => setOpen(false)}>
                        CV ↓
                    </a>
                </nav>
            </div>
        </header>
    );
}
