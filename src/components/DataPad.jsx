import React, { useEffect, useState } from 'react';
import ScrambleText from './ScrambleText';

export default function DataPad({ concept, onClose }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (concept) {
            setIsVisible(true);
        }
    }, [concept]);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 300); // Wait for animation
    };

    if (!concept) return null;

    return (
        <div className={`datapad-overlay ${isVisible ? 'visible' : ''}`} onClick={handleClose}>
            <div
                className="datapad-container"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="datapad-header">
                    <div className="datapad-id">ID: {concept.id.toUpperCase()}</div>
                    <button className="datapad-close" onClick={handleClose}>×</button>
                </div>

                <div className="datapad-content">
                    <div className="datapad-scan-line"></div>

                    <h2 className="datapad-title">
                        <ScrambleText text={concept.name} active={isVisible} />
                    </h2>

                    <div className="datapad-meta">
                        <span className="datapad-chip depth-chip">DEPTH: {concept.depth}m</span>
                        <span className="datapad-chip category-chip">{concept.category}</span>
                    </div>

                    <div className="datapad-body">
                        <p>{concept.description}</p>
                    </div>

                    <div className="datapad-footer">
                        <div className="datapad-status">STATUS: DECLASSIFIED</div>
                        <a
                            href={concept.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="datapad-action-btn"
                        >
                            ACCESS ARCHIVE ↗
                        </a>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="datapad-corner top-left"></div>
                <div className="datapad-corner top-right"></div>
                <div className="datapad-corner bottom-left"></div>
                <div className="datapad-corner bottom-right"></div>
            </div>
        </div>
    );
}
