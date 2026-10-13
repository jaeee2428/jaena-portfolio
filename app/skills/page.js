import { skillGroups, softSkills } from '@/lib/data';
import { Shape } from '@/components/Doodles';

export const metadata = { title: 'Skills' };

const ACCENTS = ['pink', 'blue', 'yellow', 'green', 'violet', 'red', 'teal'];

export default function SkillsPage() {
    return (
        <div className="container">
            <header className="page-head">
                <p className="hand">the toolbox</p>
                <h1 className="page-title">Skills</h1>
                <p className="page-lead">
                    The languages, engines, and tools I actually reach for, plus the softer skills that
                    keep projects on track.
                </p>
            </header>

            <section className="skill-columns">
                {skillGroups.map((g, i) => (
                    <div className={`skill-group ${g.title.includes('3D') ? 'is-3d' : ''}`} key={g.title}>
                        <h2>
                            <Shape accent={ACCENTS[i % ACCENTS.length]} index={i} size={26} />
                            {g.title}
                        </h2>
                        <ul>
                            {g.items.map((it) => (
                                <li key={it}>{it}</li>
                            ))}
                        </ul>
                        {g.title.includes('3D') && (
                            <p className="hand skill-note">my favourite corner of the toolbox ♥</p>
                        )}
                    </div>
                ))}
            </section>

            <section className="section how-i-work">
                <h2 className="section-title">How I work</h2>
                <p className="soft-line">
                    {softSkills.map((s, i) => (
                        <span key={s}>
                            {s}
                            {i < softSkills.length - 1 && <i aria-hidden="true"> ✿ </i>}
                        </span>
                    ))}
                </p>
            </section>
        </div>
    );
}
