import { profile } from '@/lib/data';

export const metadata = { title: 'Contact' };

export default function ContactPage() {
    const items = [
        { mark: '@', label: 'Personal email', value: profile.email, href: `mailto:${profile.email}` },
        { mark: 'UP', label: 'University email', value: profile.uniEmail, href: `mailto:${profile.uniEmail}` },
        { mark: 'in', label: 'LinkedIn', value: 'linkedin.com/in/princess-jaena-marie-de-la-peña', href: profile.linkedin },
        { mark: 'GH', label: 'GitHub', value: 'github.com/jaeee2428', href: profile.github },
        { mark: 'PH', label: 'Location', value: profile.location, href: null },
    ];

    return (
        <div className="container">
            <div className="page-head">
                <span className="kicker">Say hi</span>
                <h1 className="page-title">Contact</h1>
                <p className="page-lead">
                    Internships, project collabs, hackathons, volunteer gigs, or just a hello. My inbox
                    is open and I usually reply within a day or two.
                </p>
            </div>

            <section className="section">
                <div className="contact-grid">
                    <div className="contact-list">
                        {items.map((it) => (
                            <div className="card contact-item" key={it.label}>
                                <span className="ico">{it.mark}</span>
                                <div>
                                    <div className="t">{it.label}</div>
                                    {it.href ? (
                                        <a
                                            className="d"
                                            href={it.href}
                                            target={it.href.startsWith('http') ? '_blank' : undefined}
                                            rel="noreferrer"
                                        >
                                            {it.value}
                                        </a>
                                    ) : (
                                        <div className="d">{it.value}</div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cta-box">
                        <h3>Grab a copy of my CV</h3>
                        <p>
                            Experience, projects, leadership, and volunteering in one file. Handy for
                            applications and referrals.
                        </p>
                        <a className="btn invert" href={profile.cvUrl} download>
                            Download CV ↓
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
