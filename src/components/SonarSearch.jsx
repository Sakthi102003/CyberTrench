import React, { useState, useEffect, useRef } from 'react';

export default function SonarSearch({ concepts, onNavigate }) {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef(null);
    const listRef = useRef(null);

    // Toggle with Ctrl+K
    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen((prev) => !prev);
            }
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Focus input when opened
    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current.focus(), 50);
        }
        if (!isOpen) {
            setQuery('');
            setSelectedIndex(0);
        }
    }, [isOpen]);

    const filteredConcepts = concepts.filter(c =>
        c.name.toLowerCase().includes(query.toLowerCase()) ||
        c.description.toLowerCase().includes(query.toLowerCase())
    );

    const handleSelect = (concept) => {
        onNavigate(concept.depth);
        setIsOpen(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setSelectedIndex(prev => (prev + 1) % filteredConcepts.length);
            // specific scrolling logic for list can go here if needed
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setSelectedIndex(prev => (prev - 1 + filteredConcepts.length) % filteredConcepts.length);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (filteredConcepts[selectedIndex]) {
                handleSelect(filteredConcepts[selectedIndex]);
            }
        }
    };

    return (
        <>
            {/* Floating Trigger Button */}
            <button
                className="sonar-trigger"
                onClick={() => setIsOpen(true)}
                aria-label="Open Sonar Search"
                title="Sonar Search (Ctrl+K)"
            >
                <div className="sonar-icon">
                    <div className="sonar-wave"></div>
                    <div className="sonar-wave delay-1"></div>
                </div>
                <span className="sr-only">Sonar</span>
            </button>

            {/* Modal Overlay */}
            {isOpen && (
                <div className="sonar-overlay" onClick={() => setIsOpen(false)}>
                    <div className="sonar-interface" onClick={e => e.stopPropagation()}>
                        {/* Header / Radar Effect */}
                        <div className="sonar-header">
                            <div className="radar-sweep-container">
                                <div className="radar-sweep"></div>
                            </div>
                            <div className="sonar-input-wrapper">
                                <span className="sonar-prompt">{">"}</span>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    className="sonar-input"
                                    placeholder="INIT_SONAR_PING..."
                                    value={query}
                                    onChange={(e) => {
                                        setQuery(e.target.value);
                                        setSelectedIndex(0);
                                    }}
                                    onKeyDown={handleKeyDown}
                                />
                            </div>
                            <div className="sonar-status">TARGETS: {filteredConcepts.length}</div>
                        </div>

                        {/* Results List */}
                        <div className="sonar-results" ref={listRef}>
                            {filteredConcepts.length === 0 ? (
                                <div className="sonar-empty">NO ECHO RETURNED</div>
                            ) : (
                                filteredConcepts.map((concept, index) => (
                                    <div
                                        key={concept.id}
                                        className={`sonar-item ${index === selectedIndex ? 'active' : ''}`}
                                        onClick={() => handleSelect(concept)}
                                        onMouseEnter={() => setSelectedIndex(index)}
                                    >
                                        <div className="sonar-item-info">
                                            <span className="sonar-item-name">{concept.name}</span>
                                            <span className="sonar-item-desc">{concept.category} // {concept.depth}m</span>
                                        </div>
                                        <div className="sonar-item-return">
                                            {index === selectedIndex && <span>&lt;&lt;&lt;</span>}
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        <div className="sonar-footer">
                            <span>[↑/↓] Navigate</span>
                            <span>[Enter] Engage</span>
                            <span>[Esc] Abort</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
