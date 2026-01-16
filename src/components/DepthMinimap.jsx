import React from 'react';

export default function DepthMinimap({ zones, currentDepth, onNavigate }) {
    const totalDepth = 16500;

    // Calculate percentage for the indicator
    const progressPercent = Math.min(100, Math.max(0, (currentDepth / totalDepth) * 100));

    return (
        <div className="depth-minimap-container">
            <div className="depth-minimap">
                {zones.map((zone) => {
                    const zoneHeightPercent = ((zone.end - zone.start) / totalDepth) * 100;
                    const isActive = currentDepth >= zone.start && currentDepth < zone.end;

                    return (
                        <div
                            key={zone.name}
                            className={`minimap-zone ${isActive ? 'active' : ''}`}
                            style={{
                                height: `${zoneHeightPercent}%`,
                                backgroundColor: zone.color,
                                opacity: isActive ? 0.8 : 0.3
                            }}
                            onClick={() => onNavigate(zone.start)}
                            title={`${zone.name} (${zone.start}m)`}
                        >
                            <div className="minimap-label">{zone.name}</div>
                        </div>
                    );
                })}

                {/* Current Position Indicator */}
                <div
                    className="minimap-indicator"
                    style={{ top: `${progressPercent}%` }}
                />
            </div>
        </div>
    );
}
