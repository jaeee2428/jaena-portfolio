import { profile } from '@/lib/data';
import { Shape, Squiggle } from '@/components/Doodles';

export const metadata = { title: 'Contact' };

export default function ContactPage() {
    const items = [
        { label: 'University email', value: profile.uniEmail, href: `mailto:${profile.uniEmail}` },
        { label: 'LinkedIn', value: 'Princess Jaena Marie De La Peña', href: profile.linkedin },
        { label: 'GitHub', value: 'jaeee2428', href: profile.github },
        { label: 'Based in', value: profile.location, href: null },
    ];

    return (
        <div className="container">
            <header className="page-head">
                <p className="hand">say hi</p>
                <h1 className="page-title">Contact</h1>
                <p className="page-lead">
                    Internships, project collabs, hackathons, volunteer gigs, or just a hello. My inbox is
                    open and I usually reply within a day or two.
                </p>
            </header>

            <section className="contact">
                <a className="big-mail" href={`mailto:${profile.email}`}>
                    {profile.email}
                    <Squiggle />
                </a>

                <dl className="contact-list">
                    {items.map((it) => (
                        <div key={it.label}>
                            <dt>{it.label}</dt>
                            <dd>
                                {it.href ? (
                                    <a
                                        href={it.href}
                                        target={it.href.startsWith('http') ? '_blank' : undefined}
                                        rel="noreferrer"
                                    >
                                        {it.value}
                                    </a>
                                ) : (
                                    it.value
                                )}
                            </dd>
                        </div>
                    ))}
                </dl>

                <div className="cv-note">
                    <Shape accent="yellow" index={4} size={48} className="wobble" />
                    <div>
                        <h2>Need the CV?</h2>
                        <p>Experience, projects, leadership, and volunteering in one PDF.</p>
                    </div>
                    <a className="btn" href={profile.cvUrl} download>
                        Download CV
                    </a>
                </div>
            </section>
        </div>
    );
}
