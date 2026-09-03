import Link from 'next/link';
import { profile, siteNav } from '@/lib/data';

export default function SiteFooter() {
    return (
        <footer className="site-footer">
            <div className="container footer-inner">
                <div className="footer-links">
                    {siteNav.map((l) => (
                        <Link key={l.href} href={l.href}>
                            {l.label}
                        </Link>
                    ))}
                </div>
                <div className="footer-note mono">
                    © {new Date().getFullYear()} {profile.name} · Made in Cebu
                </div>
            </div>
        </footer>
    );
}
