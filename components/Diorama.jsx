'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, RoundedBox } from '@react-three/drei';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

// Palette mirrors the CSS tokens in app/globals.css.
const C = {
    grass: '#9db872',
    grassDark: '#7f9c58',
    dirt: '#b07a52',
    dirtDark: '#8a5a3b',
    wood: '#c98d5c',
    woodDark: '#9c6a42',
    cream: '#f6efe3',
    ink: '#2b2320',
    tomato: '#e4583e',
    pink: '#ec8fb0',
    butter: '#f3c752',
    sky: '#8db7d6',
    leaf: '#5f8a4a',
    leafLight: '#7aa85a',
};

const prefersReducedMotion = () =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function Mat({ color, ...rest }) {
    return <meshStandardMaterial color={color} flatShading roughness={0.85} {...rest} />;
}

// Wraps a piece of the scene so it shows a label on hover and links somewhere on click.
// The label itself is one DOM element owned by <Diorama>; each hotspot just provides an anchor point.
const anchors = {};

function Hotspot({ id, label, href, setHovered, labelOffset = [0, 0.6, 0], children }) {
    const router = useRouter();
    return (
        <group
            onPointerOver={(e) => {
                e.stopPropagation();
                setHovered(id, label);
                document.body.style.cursor = 'pointer';
            }}
            onPointerOut={() => {
                setHovered(null);
                document.body.style.cursor = '';
            }}
            onClick={(e) => {
                e.stopPropagation();
                router.push(href);
            }}
        >
            {children}
            <object3D ref={(o) => (anchors[id] = o)} position={labelOffset} />
        </group>
    );
}

function Island() {
    // Slightly jittered top so the island doesn't look machine-perfect.
    const top = useMemo(() => {
        const g = new THREE.CylinderGeometry(2.25, 2.05, 0.38, 11, 1);
        const pos = g.attributes.position;
        for (let i = 0; i < pos.count; i++) {
            const y = pos.getY(i);
            if (y > 0) pos.setY(i, y + Math.sin(pos.getX(i) * 3.1 + pos.getZ(i) * 2.3) * 0.03);
        }
        g.computeVertexNormals();
        return g;
    }, []);

    return (
        <group>
            <mesh geometry={top} receiveShadow castShadow>
                <Mat color={C.grass} />
            </mesh>
            <mesh position={[0, -0.42, 0]} castShadow>
                <cylinderGeometry args={[2.05, 1.55, 0.5, 11]} />
                <Mat color={C.dirt} />
            </mesh>
            <mesh position={[0, -1.15, 0]} rotation={[Math.PI, 0, 0]} castShadow>
                <coneGeometry args={[1.55, 1.0, 11]} />
                <Mat color={C.dirtDark} />
            </mesh>
            {/* scattered pebbles + grass tufts */}
            {[
                [1.6, 0.22, 0.9, 0.12],
                [-1.7, 0.22, -0.4, 0.1],
                [-0.6, 0.22, 1.7, 0.08],
            ].map(([x, y, z, s], i) => (
                <mesh key={i} position={[x, y, z]} scale={s} castShadow>
                    <dodecahedronGeometry args={[1, 0]} />
                    <Mat color="#cfc6b8" />
                </mesh>
            ))}
            {[
                [-1.2, 0.95],
                [1.0, -1.5],
                [1.85, -0.2],
                [-0.2, 1.9],
            ].map(([x, z], i) => (
                <mesh key={i} position={[x, 0.27, z]} rotation={[0, i, 0]}>
                    <coneGeometry args={[0.07, 0.18, 4]} />
                    <Mat color={C.grassDark} />
                </mesh>
            ))}
        </group>
    );
}

function useScreenTexture() {
    return useMemo(() => {
        const c = document.createElement('canvas');
        c.width = 256;
        c.height = 160;
        const ctx = c.getContext('2d');
        ctx.fillStyle = '#2b2320';
        ctx.fillRect(0, 0, 256, 160);
        const colors = ['#ec8fb0', '#f3c752', '#9db872', '#8db7d6', '#f6efe3'];
        let y = 18;
        for (let i = 0; i < 8; i++) {
            let x = 16 + (i % 3) * 14;
            const segs = 2 + (i % 3);
            for (let s = 0; s < segs; s++) {
                const w = 20 + ((i * 37 + s * 23) % 60);
                ctx.fillStyle = colors[(i + s) % colors.length];
                ctx.fillRect(x, y, w, 7);
                x += w + 8;
            }
            y += 17;
        }
        const tex = new THREE.CanvasTexture(c);
        tex.colorSpace = THREE.SRGBColorSpace;
        return tex;
    }, []);
}

function Desk({ hovered, setHovered }) {
    const screen = useScreenTexture();
    const headset = useRef();
    useFrame(({ clock }) => {
        if (!headset.current) return;
        const t = clock.elapsedTime;
        headset.current.position.y = 0.66 + (hovered === 'vr' ? 0.12 + Math.sin(t * 4) * 0.03 : 0);
        headset.current.rotation.y = -0.5 + (hovered === 'vr' ? Math.sin(t * 2) * 0.25 : 0);
    });

    return (
        <group position={[0.35, 0.19, -0.35]} rotation={[0, -0.35, 0]}>
            {/* desk */}
            <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
                <boxGeometry args={[1.35, 0.07, 0.72]} />
                <Mat color={C.wood} />
            </mesh>
            {[
                [-0.6, -0.3],
                [0.6, -0.3],
                [-0.6, 0.3],
                [0.6, 0.3],
            ].map(([x, z], i) => (
                <mesh key={i} position={[x, 0.24, z]} castShadow>
                    <boxGeometry args={[0.06, 0.48, 0.06]} />
                    <Mat color={C.woodDark} />
                </mesh>
            ))}

            {/* laptop → automation / web work */}
            <Hotspot
                id="laptop"
                label="web + automation tools"
                href="/projects#oki-ventures"
                setHovered={setHovered}
                labelOffset={[-0.2, 1.2, 0]}
            >
                <group position={[-0.2, 0.545, 0.02]}>
                    <mesh castShadow>
                        <boxGeometry args={[0.56, 0.025, 0.38]} />
                        <Mat color="#d8d2c8" />
                    </mesh>
                    <group position={[0, 0.0, -0.19]} rotation={[-0.32, 0, 0]}>
                        <mesh position={[0, 0.19, 0]} castShadow>
                            <boxGeometry args={[0.56, 0.38, 0.02]} />
                            <Mat color="#d8d2c8" />
                        </mesh>
                        <mesh position={[0, 0.19, 0.011]}>
                            <planeGeometry args={[0.5, 0.32]} />
                            <meshBasicMaterial map={screen} toneMapped={false} />
                        </mesh>
                    </group>
                </group>
            </Hotspot>

            {/* VR headset → BinItBetter */}
            <Hotspot
                id="vr"
                label="VR · BinItBetter"
                href="/projects#binitbetter"
                setHovered={setHovered}
                labelOffset={[0.4, 1.15, 0.1]}
            >
                <group ref={headset} position={[0.4, 0.66, 0.1]} rotation={[0, -0.5, 0]}>
                    <RoundedBox args={[0.34, 0.17, 0.18]} radius={0.06} smoothness={3} castShadow>
                        <Mat color={C.cream} flatShading={false} />
                    </RoundedBox>
                    <mesh position={[0, 0, 0.092]}>
                        <boxGeometry args={[0.3, 0.12, 0.01]} />
                        <Mat color={C.ink} />
                    </mesh>
                    <mesh position={[0, 0, -0.08]} rotation={[Math.PI / 2, 0, 0]}>
                        <torusGeometry args={[0.17, 0.018, 6, 20, Math.PI]} />
                        <Mat color={C.pink} />
                    </mesh>
                </group>
            </Hotspot>

            {/* mug */}
            <group position={[0.25, 0.6, -0.22]}>
                <mesh castShadow>
                    <cylinderGeometry args={[0.055, 0.05, 0.12, 10]} />
                    <Mat color={C.tomato} />
                </mesh>
                <mesh position={[0.06, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                    <torusGeometry args={[0.03, 0.01, 5, 10]} />
                    <Mat color={C.tomato} />
                </mesh>
            </group>

            {/* little stool */}
            <mesh position={[-0.15, 0.2, 0.55]} castShadow>
                <cylinderGeometry args={[0.17, 0.15, 0.06, 10]} />
                <Mat color={C.butter} />
            </mesh>
            <mesh position={[-0.15, 0.09, 0.55]}>
                <cylinderGeometry args={[0.03, 0.03, 0.18, 6]} />
                <Mat color={C.woodDark} />
            </mesh>
        </group>
    );
}

function Tree({ hovered, setHovered }) {
    const crown = useRef();
    useFrame(({ clock }) => {
        if (!crown.current) return;
        const t = clock.elapsedTime;
        // sways more while hovered, like a gust passing through
        crown.current.rotation.z = Math.sin(t * (hovered === 'tree' ? 3.2 : 1.3)) * (hovered === 'tree' ? 0.09 : 0.035);
    });
    return (
        <Hotspot
            id="tree"
            label="main project · Garden of Almira"
            href="/projects#the-garden-of-almira"
            setHovered={setHovered}
            labelOffset={[-1.15, 2.05, -0.75]}
        >
            <group position={[-1.15, 0.19, -0.75]}>
                <mesh position={[0, 0.45, 0]} castShadow>
                    <cylinderGeometry args={[0.07, 0.12, 0.9, 6]} />
                    <Mat color={C.woodDark} />
                </mesh>
                <group ref={crown} position={[0, 0.9, 0]}>
                    {[
                        [0, 0.2, 0, 0.5, C.leaf],
                        [0.32, 0.05, 0.1, 0.36, C.leafLight],
                        [-0.3, 0.08, -0.05, 0.38, C.leafLight],
                        [0.02, 0.48, 0.05, 0.32, C.leafLight],
                    ].map(([x, y, z, r, col], i) => (
                        <mesh key={i} position={[x, y, z]} castShadow>
                            <icosahedronGeometry args={[r, 0]} />
                            <Mat color={col} />
                        </mesh>
                    ))}
                    {/* mangoes */}
                    {[
                        [0.25, -0.15, 0.32],
                        [-0.35, -0.12, 0.25],
                        [0.1, 0.05, 0.48],
                    ].map((p, i) => (
                        <mesh key={i} position={p} scale={[0.06, 0.08, 0.06]}>
                            <sphereGeometry args={[1, 8, 6]} />
                            <Mat color={C.butter} />
                        </mesh>
                    ))}
                </group>
            </group>
        </Hotspot>
    );
}

function MapPin({ hovered, setHovered }) {
    const pin = useRef();
    useFrame(({ clock }) => {
        if (!pin.current) return;
        const t = clock.elapsedTime;
        pin.current.position.y = 0.62 + Math.sin(t * 2.2) * 0.06 + (hovered === 'pin' ? 0.12 : 0);
        pin.current.rotation.y = t * 0.8;
    });
    return (
        <Hotspot
            id="pin"
            label="GIS · GreenPoint"
            href="/projects#greenpoint"
            setHovered={setHovered}
            labelOffset={[1.35, 1.25, 0.95]}
        >
            <group position={[1.35, 0, 0.95]}>
                {/* tiny map tile */}
                <mesh position={[0, 0.215, 0]} rotation={[-Math.PI / 2, 0, 0.3]} receiveShadow>
                    <planeGeometry args={[0.55, 0.55]} />
                    <Mat color={C.cream} />
                </mesh>
                <mesh position={[0.05, 0.218, -0.05]} rotation={[-Math.PI / 2, 0, 0.3]}>
                    <planeGeometry args={[0.2, 0.28]} />
                    <Mat color={C.grassDark} />
                </mesh>
                <group ref={pin}>
                    <mesh castShadow>
                        <sphereGeometry args={[0.13, 12, 10]} />
                        <Mat color={C.tomato} flatShading={false} />
                    </mesh>
                    <mesh position={[0, -0.17, 0]} rotation={[Math.PI, 0, 0]} castShadow>
                        <coneGeometry args={[0.11, 0.26, 12]} />
                        <Mat color={C.tomato} flatShading={false} />
                    </mesh>
                    <mesh position={[0, 0.02, 0.1]}>
                        <sphereGeometry args={[0.045, 8, 6]} />
                        <Mat color={C.cream} />
                    </mesh>
                </group>
            </group>
        </Hotspot>
    );
}

function GameCube({ hovered, setHovered }) {
    const cube = useRef();
    useFrame(({ clock }, dt) => {
        if (!cube.current) return;
        const speed = hovered === 'cube' ? 2.4 : 0.6;
        cube.current.rotation.y += dt * speed;
        cube.current.rotation.x += dt * speed * 0.5;
        cube.current.position.y = 1.55 + Math.sin(clock.elapsedTime * 1.6) * 0.1;
    });
    const faces = [C.pink, C.butter, C.sky, C.grass, C.tomato, C.cream];
    return (
        <Hotspot
            id="cube"
            label="games · Godot, Unity"
            href="/projects#untread"
            setHovered={setHovered}
            labelOffset={[-1.55, 2.05, 0.75]}
        >
            <group ref={cube} position={[-1.55, 1.55, 0.75]}>
                <mesh castShadow>
                    <boxGeometry args={[0.32, 0.32, 0.32]} />
                    {faces.map((col, i) => (
                        <meshStandardMaterial key={i} attach={`material-${i}`} color={col} flatShading roughness={0.7} />
                    ))}
                </mesh>
                {/* the ? on the block */}
                <mesh position={[0, 0, 0.165]}>
                    <circleGeometry args={[0.05, 10]} />
                    <meshBasicMaterial color={C.ink} />
                </mesh>
            </group>
        </Hotspot>
    );
}

function Plane({ hovered, setHovered }) {
    const orbit = useRef();
    const body = useRef();
    useFrame(({ clock }, dt) => {
        if (!orbit.current) return;
        orbit.current.rotation.y += dt * (hovered === 'plane' ? 0.12 : 0.35);
        if (body.current) body.current.position.y = Math.sin(clock.elapsedTime * 1.4) * 0.12;
    });
    return (
        <group ref={orbit} position={[0, 2.15, 0]}>
            <Hotspot
                id="plane"
                label="air cargo ops @ Belli"
                href="/#now"
                setHovered={setHovered}
                labelOffset={[2.55, 0.5, 0]}
            >
                {/* nose points along the orbit's tangent, banking inward */}
                <group ref={body} position={[2.55, 0, 0]} rotation={[0, Math.PI, 0.18]}>
                    <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
                        <capsuleGeometry args={[0.1, 0.5, 4, 10]} />
                        <Mat color={C.cream} flatShading={false} />
                    </mesh>
                    <mesh position={[0, 0, 0.02]} castShadow>
                        <boxGeometry args={[0.85, 0.025, 0.16]} />
                        <Mat color={C.sky} />
                    </mesh>
                    <mesh position={[0, 0.0, -0.3]}>
                        <boxGeometry args={[0.32, 0.02, 0.09]} />
                        <Mat color={C.sky} />
                    </mesh>
                    <mesh position={[0, 0.11, -0.3]}>
                        <boxGeometry args={[0.02, 0.18, 0.1]} />
                        <Mat color={C.tomato} />
                    </mesh>
                    {/* cargo crate dangling below */}
                    <mesh position={[0, -0.16, 0.02]} castShadow>
                        <boxGeometry args={[0.12, 0.1, 0.12]} />
                        <Mat color={C.wood} />
                    </mesh>
                </group>
            </Hotspot>
        </group>
    );
}

function Cloud({ position, scale = 1, speed = 0.15 }) {
    const ref = useRef();
    const start = position[0];
    useFrame(({ clock }) => {
        if (ref.current) ref.current.position.x = start + Math.sin(clock.elapsedTime * speed) * 0.4;
    });
    return (
        <group ref={ref} position={position} scale={scale}>
            {[
                [0, 0, 0, 0.32],
                [0.32, -0.04, 0.05, 0.24],
                [-0.3, -0.05, 0, 0.22],
                [0.1, 0.15, 0, 0.22],
            ].map(([x, y, z, r], i) => (
                <mesh key={i} position={[x, y, z]}>
                    <icosahedronGeometry args={[r, 1]} />
                    <Mat color="#ffffff" />
                </mesh>
            ))}
        </group>
    );
}

const tmp = new THREE.Vector3();

function Scene({ reduced, labelRef, onHover }) {
    const [hovered, setHoveredId] = useState(null);
    const setHovered = (id, label) => {
        setHoveredId(id);
        onHover(id ? label : null);
    };
    const root = useRef();
    useFrame(({ clock, camera, size }) => {
        if (root.current && !reduced) root.current.position.y = Math.sin(clock.elapsedTime * 0.8) * 0.08;
        const anchor = hovered && anchors[hovered];
        if (anchor && labelRef.current) {
            anchor.getWorldPosition(tmp).project(camera);
            const x = ((tmp.x + 1) / 2) * size.width;
            const y = ((1 - tmp.y) / 2) * size.height;
            labelRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -100%)`;
        }
    });

    return (
        <>
            <hemisphereLight args={['#fff6e6', '#b58b6b', 1.3]} />
            <directionalLight
                position={[4, 7, 3]}
                intensity={2.1}
                color="#fff1dc"
                castShadow
                shadow-mapSize={[1024, 1024]}
                shadow-camera-left={-4}
                shadow-camera-right={4}
                shadow-camera-top={4}
                shadow-camera-bottom={-4}
                shadow-bias={-0.0005}
            />
            <group ref={root} position={[0, -0.35, 0]}>
                <Island />
                <Desk hovered={hovered} setHovered={setHovered} />
                <Tree hovered={hovered} setHovered={setHovered} />
                <MapPin hovered={hovered} setHovered={setHovered} />
                <GameCube hovered={hovered} setHovered={setHovered} />
                <Plane hovered={hovered} setHovered={setHovered} />
                <Cloud position={[-2.6, 2.4, -1.6]} scale={0.9} />
                <Cloud position={[2.4, 2.9, -2.2]} scale={0.7} speed={0.2} />
                <Cloud position={[-2.3, -0.7, 1.2]} scale={0.55} speed={0.12} />
            </group>
            <OrbitControls
                enablePan={false}
                enableZoom={false}
                autoRotate={!reduced && !hovered}
                autoRotateSpeed={0.55}
                minPolarAngle={Math.PI / 4}
                maxPolarAngle={Math.PI / 2.05}
                enableDamping
            />
        </>
    );
}

export default function Diorama() {
    const wrap = useRef();
    const [visible, setVisible] = useState(true);
    const [reduced, setReduced] = useState(false);
    const [label, setLabel] = useState({ text: '', show: false });
    const labelRef = useRef();

    useEffect(() => {
        setReduced(prefersReducedMotion());
        // Stop rendering when the hero scrolls out of view.
        const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting));
        if (wrap.current) io.observe(wrap.current);
        return () => {
            io.disconnect();
            document.body.style.cursor = '';
        };
    }, []);

    return (
        <div ref={wrap} className="diorama">
            <Canvas
                shadows="percentage"
                dpr={[1, 1.75]}
                frameloop={visible && !reduced ? 'always' : 'demand'}
                camera={{ position: [6.4, 4.0, 7.3], fov: 34 }}
                gl={{ antialias: true, alpha: true }}
            >
                <Scene reduced={reduced} labelRef={labelRef} onHover={(text) => setLabel((l) => ({ text: text ?? l.text, show: !!text }))} />
            </Canvas>
            <div className="scene-label-pos" ref={labelRef} aria-hidden="true">
                <div className={`scene-label ${label.show ? 'show' : ''}`}>{label.text}</div>
            </div>
        </div>
    );
}
