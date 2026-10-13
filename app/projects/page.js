import { projects, slugify } from '@/lib/data';
import { Shape } from '@/components/Doodles';

export const metadata = { title: 'Projects' };

// Projects that involve 3D / immersive work get a little sticker.
const THREE_D = ['Unity', 'Blender', 'Three.js', 'VR / spatial computing', 'Godot'];

export default function ProjectsPage() {
    return (
        <div className="container">
            <header className="page-head">
                <p className="hand">things I&apos;ve built</p>
                <h1 className="page-title">Projects</h1>
                <p className="page-lead">
                    Research, hackathons, game jams, and coursework: a GIS climate tool, a VR
                    waste-segregation game, business-planning apps, and a few games I genuinely enjoyed
                    making.
                </p>
            </header>

            <section className="entries">
                {projects.map((p, i) => {
                    const is3d = p.tech.some((t) => THREE_D.includes(t));
                    return (
                        <article className="entry" id={slugify(p.title)} key={p.title}>
                            <div className="entry-meta">
                                <span className="entry-num">{String(i + 1).padStart(2, '0')}</span>
                                <Shape accent={p.accent} index={i} size={44} />
                                <dl>
                                    {p.when && p.when !== '—' && (
                                        <>
                                            <dt>When</dt>
                                            <dd>{p.when}</dd>
                                        </>
                                    )}
                                    <dt>Role</dt>
                                    <dd>{p.role}</dd>
                                    <dt>Made with</dt>
                                    <dd>{p.tech.join(', ')}</dd>
                                </dl>
                            </div>
                            <div className="entry-body">
                                <p className="entry-type">
                                    {p.type}
                                    {is3d && <span className="sticker">3D / XR</span>}
                                </p>
                                <h2>{p.title}</h2>
                                <p className="entry-sub">{p.subtitle}</p>
                                {p.honors?.length > 0 && (
                                    <ul className="honors">
                                        {p.honors.map((h) => (
                                            <li key={h}>{h}</li>
                                        ))}
                                    </ul>
                                )}
                                <ul className="points">
                                    {p.points.map((pt, j) => (
                                        <li key={j}>{pt}</li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    );
                })}
            </section>
        </div>
    );
}
