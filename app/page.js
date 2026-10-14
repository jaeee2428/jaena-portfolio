import Link from 'next/link';
import { profile, quickFacts, projects, slugify } from '@/lib/data';
import HeroScene from '@/components/HeroScene';
import MainProject from '@/components/MainProject';
import { Arrow, Shape, Squiggle } from '@/components/Doodles';

export default function HomePage() {
    const main = projects.find((p) => p.featured);
    const featured = projects.filter((p) => !p.featured).slice(0, 5);
    return (
        <div className="container">
            {/* Hero */}
            <section className="hero">
                <div className="hero-copy">
                    <p className="hand hero-hi">hi, I&apos;m</p>
                    <h1 className="hero-name">
                        Jaena <span>De La Peña</span>
                    </h1>
                    <p className="hero-full">Princess Jaena Marie O. De La Peña</p>
                    <p className="hero-lead">
                        I study computer science at the University of the Philippines, keep air-cargo operations running at Belli,
                        and build small worlds in <mark>3D</mark>, <mark className="m2">VR</mark>, and{' '}
                        <mark className="m3">games</mark> on the side.
                    </p>
                    <div className="hero-actions">
                        <Link href="/projects" className="btn">
                            See the work
                        </Link>
                        <a className="btn btn-line" href={profile.cvUrl} download>
                            Download CV
                        </a>
                    </div>
                </div>

                <div className="hero-stage">
                    <div className="sun" aria-hidden="true" />
                    <HeroScene />
                    <p className="hand stage-note">
                        a little island, built in three.js. drag it around and click the tiny things
                        <Arrow />
                    </p>
                </div>
            </section>

            {main && <MainProject project={main} />}

            {/* Now */}
            <section className="now" id="now">
                <h2 className="label">Right now</h2>
                <dl className="now-list">
                    {quickFacts.map((f) => (
                        <div key={f.label}>
                            <dt>{f.label}</dt>
                            <dd>
                                {f.value}
                                {f.link && (
                                    <a className="now-doc" href={f.link.href} target="_blank" rel="noopener noreferrer">
                                        {f.link.label} ↗
                                    </a>
                                )}
                            </dd>
                        </div>
                    ))}
                </dl>
            </section>

            {/* About */}
            <section className="split section">
                <div>
                    <h2 className="section-title">
                        A little
                        <br />
                        about me
                    </h2>
                    <Shape accent="pink" index={2} size={54} className="wobble" />
                </div>
                <div className="prose">
                    {profile.about.map((p, i) => (
                        <p key={i}>{p}</p>
                    ))}
                </div>
            </section>

            {/* Selected work */}
            <section className="section">
                <div className="section-head">
                    <h2 className="section-title">More work</h2>
                    <Link href="/projects" className="text-link">
                        All {projects.length} projects →
                    </Link>
                </div>
                <ol className="work-index">
                    {featured.map((p, i) => (
                        <li key={p.title}>
                            <Link href={`/projects#${slugify(p.title)}`}>
                                <span className="wi-num">{String(i + 1).padStart(2, '0')}</span>
                                <Shape accent={p.accent} index={i} size={30} />
                                <span className="wi-title">
                                    {p.title}
                                    <Squiggle />
                                </span>
                                <span className="wi-sub">{p.subtitle}</span>
                                <span className="wi-type">{p.type}</span>
                            </Link>
                        </li>
                    ))}
                </ol>
            </section>
        </div>
    );
}
