// Central content for the portfolio (mirrors the 2026 CV).

// Signed ISCOLab certification for the Junior Research Prefect role.
const certificate = '/docs/DeLaPena_JuniorResearchPrefect_Certification.pdf';

export const profile = {
    name: 'Princess Jaena Marie O. De La Peña',
    monogram: 'J',
    roleLine: 'UP Cebu ’27 · ops & automation · immersive tech & games',
    location: 'Talisay City, Cebu, Philippines',
    email: 'princessjaena.delapena24@gmail.com',
    uniEmail: 'podelapena2@up.edu.ph',
    linkedin: 'https://www.linkedin.com/in/princess-jaena-marie-de-la-pe%C3%B1a-951286383/',
    github: 'https://github.com/jaeee2428',
    cvUrl: '/DeLaPena_PrincessJaenaCV.pdf',
    about: [
        'I am a Computer Science undergraduate at the University of the Philippines Cebu (Class of 2027) with hands-on experience across software development, operations automation, and immersive technology.',
        'Right now I work as an Operations Associate at Belli, where I systemize air-cargo and supply-chain workflows and build digital tools that help operations run smoothly. I am also a Junior Research Prefect at ISCOLab (UPOU), where I build VR experiences and optimize 3D assets for spatial computing. Before that I was an Operations Manager at VERGE Inc.',
        'When I am not automating or shipping code, I design and prototype games and web apps, mentor student programmers, and help run the UP Computer Science Guild’s partnerships and events.',
    ],
};

export const quickFacts = [
    { label: 'Degree', value: 'B.S. Computer Science, UP Cebu (expected 2027)' },
    { label: 'Currently', value: 'Operations Associate @ Belli' },
    {
        label: 'Also',
        value: 'Junior Research Prefect @ ISCOLab (UPOU)',
        link: { href: certificate, label: 'certificate' },
    },
    { label: 'Scholar', value: 'DOST-SEI S&T Undergraduate Scholarship (2023)' },
];

export const projects = [
    {
        title: 'The Garden of Almira',
        subtitle: 'Interactive 3D Cebuano folk garden in the browser',
        localName: 'Ang Hardin ni Almira',
        type: '3D Web & Research',
        when: '2026 · ongoing',
        status: 'Ongoing · research paper in progress',
        featured: true,
        role: 'Creator & 3D Developer',
        link: 'https://garden-of-almira.vercel.app',
        images: [
            { src: '/work/garden-buntag.jpg', alt: 'The Garden of Almira in the morning: flower beds, palms, star lanterns and a bahay na bato', note: 'buntag' },
            { src: '/work/garden-gabii.jpg', alt: 'The Garden of Almira at night: glowing parol lanterns, fireflies and the lit house', note: 'gabii' },
        ],
        // /projects shows a different view from the home spotlight.
        shot: {
            src: '/work/garden-hapon.jpg',
            alt: 'The Garden of Almira in the afternoon: a stone path through the flowers to the bahay na bato, with the flower basket open',
        },
        pitch: 'A walkable 3D folk garden of Sugbo (Cebu), inspired by the title Garden of Almira by Erlinda Alburo. Visitors meet 18 native flowers with their Cebuano and scientific names, the animals of a Visayan yard, and the garden as it changes from morning (buntag) to night (gabii).',
        points: [
            'Built a walkable 3D folk garden of Sugbo (Cebu) in Babylon.js, inspired by the title Garden of Almira by Erlinda Alburo: 18 native flowers with Cebuano and scientific names, native animals, and a morning-to-night cycle (Buntag to Gabii).',
            'Kept it fast in the browser with GPU vertex wind, three levels of detail per plant, distance culling, chunked grass, and a live-generated soundscape with no audio files.',
            'Ongoing: still growing the garden and writing a research paper based on the project.',
        ],
        tech: ['Babylon.js', 'JavaScript', 'WebGL', 'Web Audio'],
        accent: 'pink',
    },
    {
        title: 'GreenPoint',
        subtitle: 'GIS-based framework for greening interventions in Mandaue City, Cebu',
        type: 'Research & Innovation',
        when: '2025 – 2026',
        role: 'Co-Creator',
        link: 'https://fp-green-point.vercel.app',
        honors: [
            'Champion · Software Engineering Project Expo 2026',
            'Finalist · Aboitiz Innovate Cebu 2026',
            'Finalist · PJDSC 2025',
            'Finalist · PhilSA 2025',
        ],
        points: [
            'Co-developing a GIS-based application that analyzes Urban Heat Island (UHI) effects and delivers AI-driven greening recommendations to mitigate urban climate impacts.',
            'Led the initial design-thinking phase, driving urban environmental research, spatial-data ideation, and technical-paper development pitched across major data science and innovation circuits.',
        ],
        tech: ['GIS', 'AI/ML', 'Web app', 'Technical paper'],
        accent: 'green',
    },
    {
        title: 'BinItBetter',
        subtitle: 'Gamified VR sustainability app set in the UP OUverse',
        type: 'Immersive Tech · Research Lab',
        when: '2026 · ongoing',
        status: 'Ongoing',
        role: 'Junior Research Prefect @ ISCOLab (UPOU)',
        points: [
            'Designed a gamified VR application that teaches proper waste segregation through play, set inside the UP OUverse.',
            'Created spatial-computing and immersive prototypes aligned with the UN Sustainable Development Goals.',
        ],
        tech: ['Unity', 'Blender', 'VR / spatial computing'],
        videos: [
            {
                title: 'BinItBetter demo',
                note: 'collect the waste, sort it, finish the quests',
                drive: '1dmAFmBG42kiXKZ9NOuP8if--Js05YwVr',
                poster: '/work/binitbetter.jpg',
            },
        ],
        accent: 'violet',
    },
    {
        title: 'FREC Monitoring System',
        subtitle: 'CertTrack: certification workflow tracking for academic research',
        type: 'Web App · ISCOLab (UPOU) side project',
        when: '2026',
        role: 'Developer',
        points: [
            'Building a role-based certification workflow system where students submit theses, research papers, and projects, and faculty roles (adviser, FREC, program chair, dean, reviewer, IT admin) process them.',
            'Routes each submission through one of three configurable approval chains chosen by the adviser, from certificate generation to dean endorsement and final FICS FREC confirmation.',
        ],
        tech: ['React 19', 'Vite', 'Tailwind CSS', 'Express', 'Prisma', 'PostgreSQL'],
        accent: 'blue',
    },
    {
        title: 'Grab Receipts Matcher',
        subtitle: 'Receipt-to-card reconciliation tool for finance operations',
        type: 'Automation · Built at Belli',
        when: '2026',
        role: 'Creator',
        link: 'https://grab-receipts-matcher.vercel.app',
        points: [
            'Built a browser-only tool that turns Grab for Business exports into PDF receipts and matches each trip to its Brex card charge by booking ID, amount, and time, including split charges and refunds.',
            'Outputs a sorted Excel masterlist with QuickBooks and Brex links plus ready-to-paste memos, turning a manual month-end reconciliation into a few clicks.',
        ],
        tech: ['JavaScript', 'jsPDF', 'SheetJS', 'Vercel'],
        accent: 'yellow',
    },
    {
        title: 'Oki Ventures',
        subtitle: 'Home services booking & management system',
        type: 'Startup Web Platform',
        when: 'ongoing',
        role: 'Co-Creator & Full-Stack Developer',
        points: [
            'Developing a web-based booking and management platform for home services, bridging clients and service employees.',
        ],
        tech: ['Full-stack web'],
        accent: 'blue',
    },
    {
        title: 'IBiz',
        subtitle: 'Smart business planning platform for women entrepreneurs',
        type: 'Hackathon · IBPAP 2025',
        when: 'July 2025',
        role: 'Co-Creator',
        points: [
            'Built a web app that helps women entrepreneurs refine ideas, generate feasibility reports, and create business plans.',
            'Integrated startup guides plus a community space for networking and resource sharing.',
        ],
        tech: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
        accent: 'pink',
    },
    {
        title: 'PWDIndependence',
        subtitle: 'Emergency app for persons with disabilities',
        type: 'Hackathon · Komsai Week 2025',
        when: 'March 2025',
        role: 'Co-Creator',
        points: [
            'Built a distress-signal app with one-button emergency alerts, real-time location tracking, emergency contact notifications, and medical-info access.',
        ],
        tech: ['Python', 'Flet', 'SQLAlchemy', 'Pandas', 'Scikit-learn (DBSCAN)'],
        accent: 'yellow',
    },
    {
        title: 'UNTREAD',
        subtitle: '2D game about taking the path less traveled',
        type: 'Game Jam · UPCSG GameJam 2026',
        when: '2026',
        role: 'Game Developer',
        points: [
            'Co-created a 2D game in Godot around the theme “The Path Less Taken” within a limited hackathon timeframe.',
        ],
        tech: ['Godot'],
        accent: 'teal',
    },
    {
        title: 'Hamuketsu',
        subtitle: 'Comedy-driven 2D mobile game',
        type: 'Game Project',
        when: 'June 2025',
        role: 'Co-Creator',
        points: [
            'Developed a comedy-driven 2D browser game with pixel-art visuals and themed minigames.',
            'Used Finite State Machines (FSMs) to manage branching choices, puzzles, and escalating difficulty.',
        ],
        tech: ['HTML', 'JavaScript', 'CSS'],
        videos: [
            {
                title: 'Hamuketsu demo',
                note: 'pixel-art chaos, one minigame at a time',
                youtube: 'HAtL04ZEpfI',
                poster: '/work/hamuketsu.jpg',
            },
        ],
        accent: 'red',
    },
    {
        title: 'FabLearn XR',
        subtitle: 'Semiconductor learning prototype in 3D',
        type: '3D Web · Educational',
        when: '—',
        role: '3D Web Developer',
        points: [
            'Built an interactive, lightweight 3D educational demo with step-by-step learning modules and quizzes.',
        ],
        tech: ['Three.js', 'HTML5', 'JavaScript'],
        videos: [
            {
                title: 'FabLearn XR demo',
                note: 'semiconductor virtual lab, from silicon wafer prep onward',
                drive: '1yUaF2QYBZbgOtDv-beEtN-aigXjMn0Id',
                poster: '/work/fablearn-xr.jpg',
            },
        ],
        accent: 'violet',
    },
    {
        title: 'COOKBOOk',
        subtitle: 'Recipe app powered by a pantry system',
        type: 'Academic Project',
        when: 'Nov – Dec 2024',
        role: 'Co-Creator',
        points: [
            'Built an app that suggests recipes from the ingredients you already have.',
            'Used Trie, Hash Tables, Scapegoat Trees, Linked Lists, and Dictionaries for efficient storage and retrieval, with NLTK for ingredient lemmatization.',
        ],
        tech: ['Python', 'Flet', 'NLTK'],
        accent: 'pink',
    },
    {
        title: 'Split',
        subtitle: 'Collaborative expense management',
        type: 'Academic Project · Software Engineering',
        when: '—',
        role: 'Web Engineering Project',
        points: [
            'Built a collaborative expense-management application with interactive tracking cards and offline synchronization.',
        ],
        tech: ['Web'],
        accent: 'blue',
    },
    {
        title: 'Kanban Board',
        subtitle: 'Drag-and-drop task management',
        type: 'Academic Project · Software Engineering',
        when: '—',
        role: 'Web Engineering Project',
        points: [
            'Developed a dynamic task-management web app with drag-and-drop workflow tracking and a responsive UI.',
        ],
        tech: ['Web'],
        accent: 'teal',
    },
];

export const skillGroups = [
    {
        title: 'Full-stack & web',
        icon: '🛠️',
        items: ['React', 'React Native', 'Next.js', 'Vite', 'Flutter', 'Flet', 'Tailwind CSS', 'HTML5', 'CSS3'],
    },
    {
        title: 'Backend & data',
        icon: '🗄️',
        items: ['Supabase', 'Prisma', 'PostgreSQL', 'SQLAlchemy'],
    },
    {
        title: 'Languages',
        icon: '💬',
        items: ['TypeScript', 'JavaScript', 'Python', 'C', 'C++', 'C#', 'LaTeX'],
    },
    {
        title: 'Data & ML',
        icon: '📊',
        items: ['Pandas', 'Scikit-learn'],
    },
    {
        title: 'Game dev & 3D',
        icon: '🎮',
        items: [
            { name: 'Blender', detail: 'LOD modeling, mesh optimization, materials, animation, game assets' },
            'Unity',
            'Godot',
            'Three.js',
            'Babylon.js',
        ],
    },
    {
        title: 'Design & prototyping',
        icon: '🎨',
        items: ['Figma (UI/UX wireframing)', 'Canva'],
    },
    {
        title: 'Automation & productivity',
        icon: '⚙️',
        items: ['Visual Basic', 'SEO', 'Digital strategy', 'Google Workspace', 'Workflow automation', 'Email management', 'Scheduling', 'Technical documentation'],
    },
];

export const softSkills = [
    'Adaptive & resourceful',
    'Collaborative',
    'Organizational leadership',
    'Public relations & communication',
    'Time management',
    'Critical thinking',
    'Creative problem-solving',
    'Attention to detail',
];

export const volunteering = [
    {
        role: 'Event Volunteer',
        org: 'AWS Student Community Day Cebu 2026 “Built to Build”',
        when: 'August 2026',
        place: 'UP Cebu Performing Arts Hall',
        points: [
            'Assisted with event operations, stage logistics, and audience facilitation at the UP Cebu Performing Arts Hall.',
            'Supported a regional gathering of student builders, industry speakers, and cloud practitioners focused on cloud computing innovation.',
        ],
        accent: 'pink',
    },
    {
        role: 'Event Volunteer',
        org: 'AWS Community Day Cebu 2025',
        when: 'September 2025',
        place: 'University of the Philippines Cebu',
        points: [
            'Supported event operations and facilitation for the 2025 AWS Community Day held at UP Cebu.',
        ],
        accent: 'teal',
    },
    {
        role: 'Event Volunteer & Organizer',
        org: 'QISTCon.ph 2025: Quantum Information, Science & Technology Conference',
        when: 'July 30 – August 1, 2025',
        place: 'Jpark Island Resort and Waterpark, Cebu',
        points: [
            'Volunteered in event organization and operations for the Philippine quantum information, science, and technology conference, supporting speakers, participants, and event flow.',
        ],
        accent: 'green',
    },
];

export const leadership = [
    {
        role: 'Junior Research Prefect',
        org: 'ISCOLab, University of the Philippines Open University',
        when: 'Dec 2025 – Present',
        detail: 'Helps run the lab’s research activities under the Immersive Open Pedagogies program: literature reviews, building and testing immersive learning materials, data gathering, and coordinating with fellow researchers.',
        link: { href: certificate, label: 'certificate' },
        accent: 'violet',
    },
    {
        role: 'Partnerships & Linkages Director',
        org: 'UP Computer Science Guild (UPCSG)',
        when: '2025 – 2026',
        detail: 'Manages external partnerships, linkages, and sponsorships on behalf of the guild.',
        accent: 'blue',
    },
    {
        role: 'Partnerships & Linkages Deputy',
        org: 'UP Computer Science Guild (UPCSG)',
        when: '2024 – 2025',
        detail: '',
        accent: 'teal',
    },
    {
        role: 'Technical Head',
        org: 'UPCSG TekToks',
        when: '2023',
        detail: '',
        accent: 'violet',
    },
    {
        role: 'InterHigh Programming Competition Mentor',
        org: 'UPCSG Komsai Week',
        when: '2025',
        detail: '',
        accent: 'pink',
    },
    {
        role: 'Partnerships & Sponsorships Co-Head',
        org: 'UPCSG Komsai Week',
        when: '2025',
        detail: '',
        accent: 'yellow',
    },
    {
        role: 'Representative',
        org: 'Cebu Student Programmer’s Association (CESPA)',
        when: '2025 – 2026',
        detail: '',
        accent: 'green',
    },
];

// URL-safe id for a project, used for /projects#anchor links (the 3D hero links to these).
export const slugify = (s) =>
    s
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

export const experience = [
    {
        role: 'Operations Associate',
        org: 'Belli',
        when: '2026 – Present',
        current: true,
        points: [
            'Streamline and automate air-cargo operations workflows, applying technical problem-solving to systemize supply-chain logistics.',
            'Built the Grab Receipts Matcher, a browser tool that reconciles Grab for Business receipts with Brex card charges for month-end accounting.',
            'Oversee back-end administrative processes, workflow automation, and digital strategy execution to improve operational efficiency.',
            'Completed onboarding training in Singapore.',
        ],
        links: [
            {
                label: 'Singapore training',
                href: 'https://www.linkedin.com/feed/update/urn:li:activity:7501168340170670080/',
            },
        ],
    },
    {
        role: 'Operations Manager & Automation Specialist',
        org: 'VERGE Inc',
        place: 'Watertown, South Dakota (Remote)',
        when: 'Jul 2024 – Jan 2026',
        points: [
            'Oversaw back-end operations, workflow automation, and human resources administration.',
            'Drove digital growth and lead generation through SEO and digital marketing strategy.',
            'Built automated internal tools using Visual Basic and website-builder platforms.',
        ],
    },
];

export const programs = [
    {
        role: 'Junior Research Prefect',
        org: 'ISCOLab, University of the Philippines Open University',
        when: 'Dec 2025 – Present',
        current: true,
        points: [
            'Developing BinItBetter (ongoing), a gamified VR sustainability application set in the UP OUverse that teaches proper waste segregation.',
            'Create spatial-computing and immersive-technology prototypes aligned with the UN Sustainable Development Goals (SDGs).',
            'Optimize 3D assets (meshes, materials, and LOD models) in Blender and Unity for spatial-computing environments.',
        ],
        links: [{ label: 'Certificate', href: certificate }],
    },
    {
        role: 'Research Intern',
        org: 'ISCOLab (Immersive Science Communication Open Laboratory), UPOU',
        place: 'Los Baños, Laguna (onsite)',
        when: 'Jun – Jul 2026',
        points: [
            'Completed a 240-hour on-the-job training onsite at UPOU’s ISCOLab in Los Baños, building VR and AR projects for science communication, sustainability, and immersive learning.',
            'Built How a Nation Was Made, a 3D web game about the origins of the Philippines: sail a balangay between islands like Luzon, Leyte, and Panay, and make choices about harvests and settlements that shape the archipelago.',
            'Built an MSVR prototype for the MSVR headset, “The Human Engine”: an immersive anatomy tour of the heart, lungs, and blood vessels with hotspots and quiz checkpoints.',
            'Co-developed BinItBetter with five fellow UP Cebu interns and presented our work at “Spatial Shift: Immerse into the Next Generation of Computing,” the lab’s first public event (July 29, 2026).',
        ],
        media: [
            {
                title: 'How a Nation Was Made',
                note: 'Archipelago: Origins of the Philippines · 3D web game',
                drive: '1LwGiZ-M4uRQDSad2W6qD0KZlCgjZk9EU',
                poster: '/work/how-a-nation-was-made.jpg',
            },
            {
                title: 'The Human Engine',
                note: 'MSVR prototype for the MSVR headset',
                drive: '1FN8chtu0u6nY6C28L4husAJEVt37UtLd',
                poster: '/work/msvr-human-engine.jpg',
            },
        ],
        links: [
            {
                label: 'Feature article',
                href: 'https://fics.upou.edu.ph/news/up-cebu-interns-cap-off-iscolab-internship-with-immersive-tech-showcase/',
            },
            { label: 'Facebook post', href: 'https://www.facebook.com/share/p/1HL7h1k2oS/' },
        ],
    },
    {
        role: 'Participant & App Designer',
        org: 'UP – University of Tokyo Virtual Exchange Program (CALL)',
        when: 'Apr – Jul 2026',
        points: [
            'Designed a Computer-Assisted Language Learning (CALL) application proposal over 13 weeks with a cross-cultural team of UPOU, UP Cebu, and University of Tokyo students.',
            'Applied pedagogical theory and user-centered design, then pitched the proposal (objectives, target users, key features) at the hybrid culminating presentations at ISCOLab in July 2026.',
        ],
        links: [
            {
                label: 'Feature article',
                href: 'https://fics.upou.edu.ph/news/upou-up-cebu-students-showcase-innovative-language-learning-apps-in-up-university-of-tokyo-virtual-exchange-program/',
            },
            {
                label: 'LinkedIn post',
                href: 'https://www.linkedin.com/feed/update/urn:li:activity:7501146220917264384/',
            },
        ],
    },
];

export const trainings = [
    { title: 'Immersive Making: Art, Design, and Communication in VR/XR', org: 'MANGO Workshop', when: '2026' },
    { title: 'Panel on Research Ethics: Navigating Human Research', org: 'Certificate Module', when: '2026' },
    { title: 'DevFest Cebu 2025', org: 'Golden Peak Hotel and Suites', when: 'Nov 30, 2025' },
    {
        title: 'AWS Mini Meetup',
        org: 'AWS Community Day Cebu 2025 after-event on starting AWS Cloud Clubs and Learner Clubs, UP Cebu',
        when: 'Sep 14, 2025',
        cert: '/docs/DeLaPena_AWS_MiniMeetup_2025.pdf',
    },
    { title: 'Cipher Cebu: Modern Cryptography Workshop 0', org: 'UP Cebu', when: 'Sep 10, 2025' },
    {
        title: 'PBA-X: Introduction to Blockchain and Polkadot',
        org: 'Polkadot Blockchain Academy, third wave',
        when: 'Jul 25, 2025',
        cert: '/docs/DeLaPena_PBA-X_Certificate.pdf',
    },
    { title: 'Notion Cebu PH: Lead Forward Year 2', org: 'University of San Jose-Recoletos', when: 'May 18, 2025' },
];

export const siteNav = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/experience', label: 'Experience' },
    { href: '/skills', label: 'Skills' },
    { href: '/leadership', label: 'Leadership' },
    { href: '/contact', label: 'Contact' },
];
