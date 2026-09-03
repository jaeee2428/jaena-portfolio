import { projects } from '@/lib/data';

export const metadata = { title: 'Projects' };

export default function ProjectsPage() {
    return (
        <div className="container">
            <div className="page-head">
                <span className="kicker">Selected work</span>
                <h1 className="page-title">Projects</h1>
                <p className="page-lead">
                    A mix of research, hackathons, game jams, and coursework. GIS climate tools, a VR
                    waste-segregation game, business-planning apps, and some games I actually enjoyed
                    making.
                </p>
            </div>

            <section className="section grid grid-2">
                {projects.map((p) => (
                    <article className="card project-card" key={p.title}>
                        <div className="project-top">
                            <div>
                                <span className="tag">{p.type}</span>
                                <h3>{p.title}</h3>
                                <div className="sub">{p.subtitle}</div>
                                <div className="role">
                                    {p.role}
                                    {p.when && p.when !== '—' ? ` · ${p.when}` : ''}
                                </div>
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
                            {p.points.map((pt, i) => (
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
            </section>
        </div>
    );
}
