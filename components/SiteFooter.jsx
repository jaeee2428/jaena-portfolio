import Link from 'next/link';
import { profile, siteNav } from '@/lib/data';

export default function SiteFooter() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-cta">
                    <p className="hand">got a project, internship, or game jam in mind?</p>
                    <a className="footer-mail" href={`mailto:${profile.email}`}>
                        Say hello ↗
                    </a>
                </div>
                <div className="footer-bottom">
                    <nav className="footer-links" aria-label="Footer">
                        {siteNav.map((l) => (
                            <Link key={l.href} href={l.href}>
                                {l.label}
                            </Link>
                        ))}
                        <a href={profile.linkedin} target="_blank" rel="noreferrer">
                            LinkedIn
                        </a>
                        <a href={profile.github} target="_blank" rel="noreferrer">
                            GitHub
                        </a>
                    </nav>
                    <p className="footer-note">
                        © {new Date().getFullYear()} {profile.name}. Built by hand in Cebu.
                    </p>
                </div>
            </div>
        </footer>
    );
}
