import React, { useEffect, useRef, useState } from 'react';

const FADE_DURATION = 2000; // ms

export default function AmbientAudio({ depth }) {
  const [isMuted, setIsMuted] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  
  // Refs for audio elements
  const surfaceAudioRef = useRef(null);
  const deepAudioRef = useRef(null);
  
  // Initialize audio objects
  useEffect(() => {
    surfaceAudioRef.current = new Audio('/sounds/surface.mp3');
    surfaceAudioRef.current.loop = true;
    surfaceAudioRef.current.volume = 0;

    deepAudioRef.current = new Audio('/sounds/deep.mp3');
    deepAudioRef.current.loop = true;
    deepAudioRef.current.volume = 0;

    return () => {
      if (surfaceAudioRef.current) {
        surfaceAudioRef.current.pause();
        surfaceAudioRef.current = null;
      }
      if (deepAudioRef.current) {
        deepAudioRef.current.pause();
        deepAudioRef.current = null;
      }
    };
  }, []);

  // Handle volume mixing based on depth
  useEffect(() => {
    if (isMuted || !hasInteracted) {
      if (surfaceAudioRef.current) surfaceAudioRef.current.volume = 0;
      if (deepAudioRef.current) deepAudioRef.current.volume = 0;
      return;
    }

    const surfaceAudio = surfaceAudioRef.current;
    const deepAudio = deepAudioRef.current;

    if (!surfaceAudio || !deepAudio) return;

    // Ensure they are playing
    if (surfaceAudio.paused) surfaceAudio.play().catch(() => {});
    if (deepAudio.paused) deepAudio.play().catch(() => {});

    // Calculate mix
    // 0m -> 100% Surface, 0% Deep
    // 8000m -> 50% Surface, 50% Deep (Transition zone)
    // 14000m -> 0% Surface, 100% Deep
    
    const maxDepth = 14000;
    const normalizedDepth = Math.min(Math.max(depth, 0), maxDepth) / maxDepth;
    
    // Simple linear crossfade
    const deepVolume = normalizedDepth; 
    const surfaceVolume = 1 - normalizedDepth;

    surfaceAudio.volume = Math.max(0, Math.min(1, surfaceVolume));
    deepAudio.volume = Math.max(0, Math.min(1, deepVolume));

  }, [depth, isMuted, hasInteracted]);

  const toggleMute = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
      setIsMuted(false);
      // Try to start playing immediately
      if (surfaceAudioRef.current) surfaceAudioRef.current.play().catch(e => console.log("Audio play failed", e));
      if (deepAudioRef.current) deepAudioRef.current.play().catch(e => console.log("Audio play failed", e));
    } else {
      setIsMuted(!isMuted);
    }
  };

  return (
    <button 
      className="audio-toggle"
      onClick={toggleMute}
      aria-label={isMuted ? "Unmute Ambient Audio" : "Mute Ambient Audio"}
      title={isMuted ? "Enable Ambient Audio" : "Disable Ambient Audio"}
    >
      {isMuted ? "🔇" : "🔊"}
    </button>
  );
}
