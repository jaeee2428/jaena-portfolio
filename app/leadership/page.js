import { leadership, volunteering } from '@/lib/data';

export const metadata = { title: 'Leadership & Community' };

export default function LeadershipPage() {
    return (
        <div className="container">
            <div className="page-head">
                <span className="kicker">Beyond the code</span>
                <h1 className="page-title">Leadership &amp; community</h1>
                <p className="page-lead">
                    I like the people side of tech as much as the tech itself. I organize events, build
                    partnerships for the UP Computer Science Guild, and volunteer wherever builders
                    gather.
                </p>
            </div>

            {/* Volunteer & community */}
            <section className="section">
                <h2 style={{ fontSize: 32, marginBottom: 18 }}>Volunteering</h2>
                <div className="timeline">
                    {volunteering.map((v) => (
                        <article className="card tl-card" key={v.org}>
                            <h3>{v.role}</h3>
                            <div className="tl-meta">
                                <span>
                                    <b>▸</b> {v.org}
                                </span>
                                <span>{v.when}</span>
                                {v.place && <span>{v.place}</span>}
                            </div>
                            <ul style={{ margin: 0, paddingLeft: 20 }}>
                                {v.points.map((pt, i) => (
                                    <li key={i}>{pt}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </section>

            {/* Leadership */}
            <section className="section">
                <h2 style={{ fontSize: 32, marginBottom: 18 }}>Leadership &amp; organizations</h2>
                <div className="grid grid-2">
                    {leadership.map((l) => (
                        <article className="card tl-card" key={l.role + l.org}>
                            <h3>{l.role}</h3>
                            <div className="tl-meta">
                                <span>{l.org}</span>
                                <span>{l.when}</span>
                            </div>
                            {l.detail && <p style={{ margin: 0 }}>{l.detail}</p>}
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}
