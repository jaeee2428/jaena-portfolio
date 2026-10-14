import { leadership, volunteering, trainings } from '@/lib/data';

export const metadata = { title: 'Leadership & Community' };

export default function LeadershipPage() {
    return (
        <div className="container">
            <header className="page-head">
                <p className="hand">beyond the code</p>
                <h1 className="page-title">Leadership &amp; community</h1>
                <p className="page-lead">
                    I like the people side of tech as much as the tech itself. I organize events, build
                    partnerships for the UP Computer Science Guild, and volunteer wherever builders
                    gather.
                </p>
            </header>

            <section className="section">
                <h2 className="section-title">Organizations</h2>
                <ul className="roles">
                    {leadership.map((l) => (
                        <li key={l.role + l.org}>
                            <span className="roles-when">{l.when}</span>
                            <span className="roles-what">
                                <b>{l.role}</b>
                                <span>{l.org}</span>
                                {l.detail && <small>{l.detail}</small>}
                                {l.link && (
                                    <a className="now-doc" href={l.link.href} target="_blank" rel="noopener noreferrer">
                                        {l.link.label} ↗
                                    </a>
                                )}
                            </span>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="section">
                <h2 className="section-title">Volunteering</h2>
                <div className="timeline">
                    {volunteering.map((v) => (
                        <article className="tl-item" key={v.org}>
                            <p className="tl-when">{v.when}</p>
                            <div>
                                <h3>{v.org}</h3>
                                <p className="tl-role">
                                    {v.role}
                                    {v.place && <> · {v.place}</>}
                                </p>
                                <ul className="points">
                                    {v.points.map((pt, i) => (
                                        <li key={i}>{pt}</li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="section">
                <h2 className="section-title">Trainings &amp; certifications</h2>
                <ul className="roles">
                    {trainings.map((t) => (
                        <li key={t.title}>
                            <span className="roles-when">{t.when}</span>
                            <span className="roles-what">
                                <b>{t.title}</b>
                                <span>{t.org}</span>
                                {t.cert && (
                                    <a className="now-doc" href={t.cert} target="_blank" rel="noopener noreferrer">
                                        certificate ↗
                                    </a>
                                )}
                            </span>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
