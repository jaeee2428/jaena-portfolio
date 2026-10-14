import { projects, slugify } from '@/lib/data';
import Image from 'next/image';
import { Shape } from '@/components/Doodles';
import { VideoGrid } from '@/components/VideoCard';

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
                    {projects.length} projects, from a walkable 3D folk garden of Cebu and VR prototypes
                    for the lab to a GIS map for greener cities, automation tools for work, and a few
                    game-jam games. Press play on a demo, or open the live sites.
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
                                {p.shot && (
                                    <div className="entry-shots is-single">
                                        <Image
                                            src={p.shot.src}
                                            alt={p.shot.alt}
                                            width={p.shot.width ?? 1400}
                                            height={p.shot.height ?? 788}
                                            sizes="(max-width: 720px) 90vw, 720px"
                                        />
                                    </div>
                                )}
                                {p.videos && <VideoGrid videos={p.videos} />}
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
