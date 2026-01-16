import React, { useEffect, useState, useRef } from 'react';
import "../styles/_ocean.css";
import { mlConcepts, depthMarkers, zones } from "../data/securityconcepts.js";
import AmbientAudio from './AmbientAudio';
import SonarSearch from './SonarSearch';
import OceanParticles from './OceanParticles';

function getNodeClass(size) {
  if (size === "large") return "node-large";
  if (size === "medium") return "node-medium";
  return "node-small";
}

export default function Main() {
  const [currentDepth, setCurrentDepth] = useState(0);
  const [discoveredCount, setDiscoveredCount] = useState(0);
  const oceanRef = useRef(null);
  const discoveredSet = useRef(new Set());

  const handleSonarNavigation = (depth) => {
    window.scrollTo({
      top: depth,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const concepts = document.querySelectorAll(".ml-concept");

    const conceptObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");

            // Track discovery
            const id = entry.target.dataset.id;
            if (id && !discoveredSet.current.has(id)) {
              discoveredSet.current.add(id);
              setDiscoveredCount(discoveredSet.current.size);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "100px" }
    );

    concepts.forEach((concept) => conceptObserver.observe(concept));

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const ocean = oceanRef.current;
          if (ocean) {
            const rect = ocean.getBoundingClientRect();
            const scrollTop = -rect.top;
            if (scrollTop > 0) {
              // Clamp depth to max 16500
              setCurrentDepth(Math.min(16500, Math.max(0, Math.floor(scrollTop))));
            } else {
              setCurrentDepth(0);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      concepts.forEach((concept) => conceptObserver.unobserve(concept));
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <main>
      <OceanParticles depth={currentDepth} />
      <div className="fixed-ui">
        <AmbientAudio depth={currentDepth} />
        <SonarSearch concepts={mlConcepts} onNavigate={handleSonarNavigation} />
        <div className="depth-indicator">
          <span className="depth-value">{currentDepth}</span>
          <span className="depth-unit">m</span>
        </div>
        <div className="discovery-tracker">
          Discovered: {discoveredCount} / {mlConcepts.length}
        </div>
      </div>

      <section className="hero-section">
        <div className="title-container">
          <h1>Cybersecurity Deep Trench</h1>
          <h2>
            by{' '}
            <span>
              <a
                className="hover:underline"
                href="https://sakthimurugan.dev/"
                target="_blank"
                rel="noopener noreferrer">CyberX</a
              >
            </span>
          </h2>
        </div>
      </section>

      <div className="wave-border"></div>

      <section className="ocean-section" ref={oceanRef}>
        <div className="ocean-container">
          {
            zones.map((zone) => (
              <div key={zone.name} className="zone-label" style={{ top: `${zone.start + 100}px` }}>
                {zone.name}
              </div>
            ))
          }

          {
            depthMarkers.map((depth) => (
              <span key={depth} className="depth-marker" style={{ top: `${depth}px` }}>
                {depth}m
              </span>
            ))
          }

          {
            mlConcepts.map((concept) => {
              const nodeClass = getNodeClass(concept.size);

              return (
                <div
                  key={concept.id}
                  className={`ml-concept ${nodeClass}`}
                  style={{ top: `${concept.depth}px` }}
                  data-id={concept.id}
                  data-name={concept.name}
                  data-depth={String(concept.depth)}
                >
                  <div className="concept-node">
                    <div className="node-core"></div>
                    <div className="node-glow"></div>
                  </div>

                  <span className="concept-name-label">{concept.name}</span>

                  <div className="concept-info">
                    <h3 title={`${concept.name}`} aria-label={`${concept.name}`} >{concept.name}</h3>
                    <p>{concept.description}</p>
                    <div className="meta-row">
                      <span className="concept-category">{concept.category}</span>
                      <a href={concept.link} target="_blank" aria-label={`$`} rel="noopener noreferrer" className="paper-link" title={`${concept.name}`}>
                        Read Paper ↗
                      </a>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </section>
    </main>
  );
}
