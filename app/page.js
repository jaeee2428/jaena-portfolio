import Link from 'next/link';
import { profile, quickFacts, projects } from '@/lib/data';

export const metadata = { title: 'Home' };

export default function HomePage() {
    const featured = projects.slice(0, 4);
    return (
        <div className="container">
            {/* Hero */}
            <section className="hero">
                <div>
                    <span className="hero-eyebrow">Cebu, Philippines · 2026</span>
                    <h1>
                        <span className="grad">{profile.name}</span>
                    </h1>
                    <p className="role">
                        Computer Science at UP Cebu, expected to finish in 2027. I automate operations at
                        Belli, and build immersive + web things on the side.
                    </p>
                    <div className="hero-buttons">
                        <Link href="/projects" className="btn primary">
                            See my work
                        </Link>
                        <Link href="/contact" className="btn ghost">
                            Get in touch
                        </Link>
                        <a className="btn invert" href={profile.cvUrl} download>
                            Download CV
                        </a>
                    </div>

                    <div className="fact-row">
                        {quickFacts.map((f) => (
                            <div className="fact" key={f.label}>
                                <div className="lab">{f.label}</div>
                                <div className="val">{f.value}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="hero-blob" aria-hidden="true">
                    <div className="blob-card">
                        <div className="blob-name">
                            <div className="big">J</div>
                            <div className="who">Jaena De La Peña</div>
                            <div className="what">systems · automation · games</div>
                        </div>
                    </div>
                    <div className="float f1">AIR CARGO @ BELLI</div>
                    <div className="float f2">GAME DEV</div>
                    <div className="float f3">IMMERSIVE TECH</div>
                </div>
            </section>

            {/* About */}
            <section className="section">
                <div className="card about-card">
                    <span className="kicker">About</span>
                    <h2 style={{ fontSize: 34, marginBottom: 14 }}>A quick intro</h2>
                    {profile.about.map((p, i) => (
                        <p key={i}>{p}</p>
                    ))}
                </div>
            </section>

            {/* Featured projects */}
            <section className="section">
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        justifyContent: 'space-between',
                        gap: 16,
                        flexWrap: 'wrap',
                        marginBottom: 20,
                    }}
                >
                    <h2 className="page-title" style={{ fontSize: 34 }}>
                        Featured projects
                    </h2>
                    <Link href="/projects" className="btn ghost" style={{ padding: '8px 18px', fontSize: 15 }}>
                        View all →
                    </Link>
                </div>
                <div className="grid grid-2">
                    {featured.map((p) => (
                        <article className="card project-card" key={p.title}>
                            <div className="project-top">
                                <div>
                                    <span className="tag">{p.type}</span>
                                    <h3>{p.title}</h3>
                                    <div className="sub">{p.subtitle}</div>
                                </div>
                                <span className={`accent-dot a-dot ${p.accent}`} />
                            </div>
                            {p.honors?.length > 0 && (
                                <div className="honors">
                                    {p.honors.map((h) => (
                                        <span key={h}>
                                            <b>{h}</b>
                                        </span>
                                    ))}
                                </div>
                            )}
                            <ul style={{ margin: '2px 0 0', paddingLeft: 20 }}>
                                {p.points.slice(0, 2).map((pt, i) => (
                                    <li key={i}>{pt}</li>
                                ))}
                            </ul>
                            <div className="tags">
                                {p.tech.map((t) => (
                                    <span className="chip" key={t}>
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}
