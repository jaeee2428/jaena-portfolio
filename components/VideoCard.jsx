'use client';

import Image from 'next/image';
import { useState } from 'react';

// A demo video hosted on Google Drive or YouTube: shows a local poster with a play
// button, and only loads the player once someone actually clicks play.
const playerUrl = (v) =>
    v.youtube
        ? `https://www.youtube-nocookie.com/embed/${v.youtube}?autoplay=1&rel=0`
        : `https://drive.google.com/file/d/${v.drive}/preview`;

export default function VideoCard({ video }) {
    const [playing, setPlaying] = useState(false);
    return (
        <figure className="vcard">
            <div className="vcard-frame">
                {playing ? (
                    <iframe
                        src={playerUrl(video)}
                        title={`${video.title} video`}
                        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                        allowFullScreen
                    />
                ) : (
                    <button type="button" className="vcard-poster" onClick={() => setPlaying(true)}>
                        <Image src={video.poster} alt="" fill sizes="(max-width: 720px) 92vw, 560px" />
                        <span className="vcard-play" aria-hidden="true">
                            <svg viewBox="0 0 24 24" width="22" height="22">
                                <path d="M8 5.5v13l10.5-6.5z" fill="currentColor" />
                            </svg>
                        </span>
                        <span className="sr-only">Play the {video.title} demo</span>
                    </button>
                )}
            </div>
            <figcaption>
                <b>{video.title}</b>
                {video.note && <span>{video.note}</span>}
            </figcaption>
        </figure>
    );
}

export function VideoGrid({ videos }) {
    return (
        <div className={`vgrid ${videos.length === 1 ? 'is-single' : ''}`}>
            {videos.map((v) => (
                <VideoCard key={v.drive || v.youtube} video={v} />
            ))}
        </div>
    );
}
