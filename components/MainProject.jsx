import Image from 'next/image';
import Link from 'next/link';
import { slugify } from '@/lib/data';
import { Arrow } from './Doodles';

// Home-page spotlight for the project marked `featured` in lib/data.js.
export default function MainProject({ project: p }) {
    const [day, night] = p.images;
    return (
        <section className="main-project" aria-labelledby="main-project-title">
            <div className="mp-copy">
                <p className="mp-status">
                    <span className="mp-pulse" aria-hidden="true" />
                    {p.status}
                </p>
                <h2 id="main-project-title" className="mp-title">
                    {p.title}
                </h2>
                <p className="mp-local">{p.localName}</p>
                <p className="mp-pitch">{p.pitch}</p>
                <p className="mp-tech">
                    {p.role} · {p.tech.join(', ')}
                </p>
                <div className="hero-actions">
                    <a className="btn" href={p.link} target="_blank" rel="noreferrer">
                        Walk the garden ↗
                    </a>
                    <Link className="btn btn-line" href={`/projects#${slugify(p.title)}`}>
                        Project notes
                    </Link>
                </div>
            </div>

            <div className="mp-photos">
                <figure className="photo photo-day">
                    <Image src={day.src} alt={day.alt} width={1400} height={788} sizes="(max-width: 960px) 90vw, 560px" />
                    <figcaption className="hand">{day.note}</figcaption>
                </figure>
                <figure className="photo photo-night">
                    <Image src={night.src} alt={night.alt} width={1400} height={788} sizes="(max-width: 960px) 70vw, 420px" />
                    <figcaption className="hand">{night.note}</figcaption>
                </figure>
                <p className="hand mp-note">
                    real screenshots, built in Babylon.js
                    <Arrow />
                </p>
            </div>
        </section>
    );
}
