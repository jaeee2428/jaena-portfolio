// Small hand-drawn-feeling SVG bits used around the site.

const FILL = {
    pink: 'var(--pink)',
    violet: 'var(--plum)',
    blue: 'var(--sky)',
    teal: 'var(--moss)',
    green: 'var(--moss)',
    yellow: 'var(--butter)',
    red: 'var(--tomato)',
};

const SHAPES = ['blob', 'star', 'flower', 'pebble', 'burst', 'drop'];

export function Shape({ accent = 'pink', index = 0, size = 36, className = '' }) {
    const kind = SHAPES[index % SHAPES.length];
    const fill = FILL[accent] ?? 'var(--pink)';
    const common = { fill, stroke: 'var(--ink)', strokeWidth: 2.2, strokeLinejoin: 'round' };
    return (
        <svg className={`shape ${className}`} width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
            {kind === 'blob' && (
                <path {...common} d="M20 4c8 0 15 5 15 14 0 10-7 18-16 18S4 30 5 21C6 11 12 4 20 4z" />
            )}
            {kind === 'star' && (
                <path {...common} d="M20 3l4.6 10.4L36 15l-8.6 7.6L29.8 35 20 29l-9.8 6 2.4-12.4L4 15l11.4-1.6z" />
            )}
            {kind === 'flower' && (
                <g {...common}>
                    <circle cx="20" cy="10" r="7" />
                    <circle cx="30" cy="20" r="7" />
                    <circle cx="20" cy="30" r="7" />
                    <circle cx="10" cy="20" r="7" />
                    <circle cx="20" cy="20" r="5" fill="var(--butter)" />
                </g>
            )}
            {kind === 'pebble' && <rect {...common} x="6" y="8" width="28" height="24" rx="10" transform="rotate(-8 20 20)" />}
            {kind === 'burst' && (
                <path
                    {...common}
                    d="M20 3l3 7 7-3-2 7 7 3-7 3 3 7-7-2-3 7-3-7-7 2 3-7-7-3 7-3-2-7 7 3z"
                />
            )}
            {kind === 'drop' && <path {...common} d="M20 4C26 13 33 19 33 26a13 13 0 01-26 0C7 19 14 13 20 4z" />}
        </svg>
    );
}

export function Arrow({ className = '' }) {
    return (
        <svg className={`doodle-arrow ${className}`} width="70" height="56" viewBox="0 0 70 56" aria-hidden="true">
            <path
                d="M4 6c18-4 40 2 48 20 3 7 3 14 1 21"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
            />
            <path
                d="M44 40l9 9 8-11"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export function Squiggle({ className = '' }) {
    return (
        <svg className={`squiggle ${className}`} viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true">
            <path
                d="M2 7c12-6 22 4 34 0s22-6 34 0 22 4 34 0 22-6 34 0 22 4 34 0 16-4 26-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
            />
        </svg>
    );
}
