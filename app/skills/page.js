import { skillGroups, softSkills } from '@/lib/data';

export const metadata = { title: 'Skills' };

export default function SkillsPage() {
    return (
        <div className="container">
            <div className="page-head">
                <span className="kicker">The toolbox</span>
                <h1 className="page-title">Skills</h1>
                <p className="page-lead">
                    The languages, engines, and tools I actually reach for, plus the softer skills that
                    keep projects on track.
                </p>
            </div>

            <section className="section">
                <div className="grid grid-2">
                    {skillGroups.map((g) => (
                        <div className="card skill-group" key={g.title}>
                            <h3>{g.title}</h3>
                            <div className="chip-cloud">
                                {g.items.map((it) => (
                                    <span className="chip" key={it}>
                                        {it}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="card skill-group" style={{ marginTop: 24 }}>
                    <h3>How I work</h3>
                    <div className="soft-wrap">
                        {softSkills.map((s) => (
                            <span className="soft-pill" key={s}>
                                {s}
                            </span>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
