import { projects, slugify } from '@/lib/data';
import Image from 'next/image';
import { Shape } from '@/components/Doodles';

export const metadata = { title: 'Projects' };

// Projects that involve 3D / immersive work get a little sticker.
const THREE_D = ['Unity', 'Blender', 'Three.js', 'Babylon.js', 'VR / spatial computing', 'Godot'];

export default function ProjectsPage() {
    return (
        <div className="container">
            <header className="page-head">
                <p className="hand">things I&apos;ve built</p>
                <h1 className="page-title">Projects</h1>
                <p className="page-lead">
                    Led by my main project, a walkable 3D folk garden of Cebu, plus research, hackathons,
                    game jams, and coursework: a GIS climate tool, a VR waste-segregation game,
                    business-planning apps, and a few games I genuinely enjoyed making.
                </p>
            </header>

            <section className="entries">
                {projects.map((p, i) => {
                    const is3d = p.tech.some((t) => THREE_D.includes(t));
                    return (
                        <article className={`entry ${p.featured ? 'entry-featured' : ''}`} id={slugify(p.title)} key={p.title}>
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
                                    {p.featured && <span className="sticker featured-tag">main project</span>}
                                    {is3d && <span className="sticker">3D / XR</span>}
                                </p>
                                <h2>{p.title}</h2>
                                <p className="entry-sub">{p.subtitle}</p>
                                {p.status && (
                                    <p className="entry-status">
                                        <span className="mp-pulse" aria-hidden="true" />
                                        {p.status}
                                    </p>
                                )}
                                {p.images && (
                                    <div className="entry-shots">
                                        {p.images.map((im) => (
                                            <Image
                                                key={im.src}
                                                src={im.src}
                                                alt={im.alt}
                                                width={1400}
                                                height={788}
                                                sizes="(max-width: 720px) 90vw, 420px"
                                            />
                                        ))}
                                    </div>
                                )}
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
                                {p.link && (
                                    <a className="entry-link" href={p.link} target="_blank" rel="noreferrer">
                                        Open the live site ↗
                                    </a>
                                )}
                            </div>
                        </article>
                    );
                })}
            </section>
        </div>
    );
}
