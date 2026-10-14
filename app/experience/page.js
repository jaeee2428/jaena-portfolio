import { experience, programs } from '@/lib/data';

export const metadata = { title: 'Experience' };

function Entry({ e }) {
    return (
        <article className="tl-item">
            <div className="tl-when">
                <p>{e.when}</p>
                {e.current && (
                    <p className="tl-now">
                        <span className="mp-pulse" aria-hidden="true" />
                        current
                    </p>
                )}
            </div>
            <div>
                <h3>{e.role}</h3>
                <p className="tl-role">
                    {e.org}
                    {e.place && <> · {e.place}</>}
                </p>
                <ul className="points">
                    {e.points.map((pt, i) => (
                        <li key={i}>{pt}</li>
                    ))}
                </ul>
                {e.links && (
                    <p className="tl-links">
                        {e.links.map((l) => (
                            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                                {l.label} ↗
                            </a>
                        ))}
                    </p>
                )}
            </div>
        </article>
    );
}

export default function ExperiencePage() {
    return (
        <div className="container">
            <header className="page-head">
                <p className="hand">where I’ve worked</p>
                <h1 className="page-title">Experience</h1>
                <p className="page-lead">
                    Operations by day, immersive tech in the lab. I systemize workflows at Belli and build
                    VR and spatial-computing prototypes as a research prefect at UPOU.
                </p>
            </header>

            <section className="section">
                <h2 className="section-title">Work</h2>
                <div className="timeline">
                    {experience.map((e) => (
                        <Entry e={e} key={e.role + e.org} />
                    ))}
                </div>
            </section>

            <section className="section">
                <h2 className="section-title">Research &amp; programs</h2>
                <div className="timeline">
                    {programs.map((e) => (
                        <Entry e={e} key={e.role + e.org} />
                    ))}
                </div>
            </section>
        </div>
    );
}
