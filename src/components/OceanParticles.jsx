import React, { useRef, useEffect } from 'react';

export default function OceanParticles({ depth }) {
    const canvasRef = useRef(null);
    const depthRef = useRef(depth);

    // Update ref whenever prop changes, without triggering the main effect
    useEffect(() => {
        depthRef.current = depth;
    }, [depth]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Particle Class
        class Particle {
            constructor() {
                this.reset();
                // Scatter initially
                this.y = Math.random() * canvas.height;
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = canvas.height + Math.random() * 100;
                this.speed = Math.random() * 1 + 0.5;
                this.size = Math.random() * 2 + 1;
                this.opacity = Math.random() * 0.5 + 0.1;
            }

            update(currentDepth) {
                // Behavior changes based on depth
                // Surface (0-4000): Bubbles (Upward)
                // Mid (4000-10000): Data Fragments (sideways/up)
                // Deep (10000+): Static/Dust (Very slow)

                let speedMultiplier = 1;

                if (currentDepth > 10000) {
                    speedMultiplier = 0.2; // Slow dust
                } else if (currentDepth > 4000) {
                    speedMultiplier = 0.8; // Data
                }

                this.y -= this.speed * speedMultiplier;

                // Side drift
                if (currentDepth > 4000 && currentDepth < 10000) {
                    this.x += (Math.random() - 0.5) * 2; // Glitchy movement
                } else {
                    this.x += Math.sin(this.y * 0.01) * 0.5; // Natural wave
                }

                if (this.y < -10) {
                    this.reset();
                }
            }

            draw(ctx, currentDepth) {
                ctx.beginPath();

                if (currentDepth > 10000) {
                    // Abyss Dust - tiny white dots
                    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity * 0.5})`;
                    ctx.arc(this.x, this.y, this.size * 0.5, 0, Math.PI * 2);
                } else if (currentDepth > 4000) {
                    // Matrix/Data Rain style (but rising) - square bits
                    ctx.fillStyle = `rgba(0, 255, 150, ${this.opacity})`;
                    ctx.rect(this.x, this.y, this.size, this.size * 3);
                } else {
                    // Surface Bubbles - circles
                    ctx.fillStyle = `rgba(173, 216, 230, ${this.opacity})`;
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                }

                ctx.fill();
            }
        }

        // Initialize Particles
        const particleCount = 60; // Keep it optimized
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const currentDepth = depthRef.current; // Read from ref

            particles.forEach(p => {
                p.update(currentDepth);
                p.draw(ctx, currentDepth);
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []); // Run once

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 5 // Behind UI (1000), Behind Nodes (20), Above Background (0)
            }}
        />
    );
}
