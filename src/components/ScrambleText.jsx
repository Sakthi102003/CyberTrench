import { useState, useEffect, useRef } from 'react';

const CHARS = '!<>-_\\/[]{}—=+*^?#________';

export const useScrambleText = (text, options = {}) => {
    const { speed = 50, active = true, iterations = 10 } = options;
    const [displayText, setDisplayText] = useState(text);
    const intervalRef = useRef(null);
    const iterationRef = useRef(0);

    useEffect(() => {
        if (!active) {
            setDisplayText(text);
            return;
        }

        iterationRef.current = 0;

        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setDisplayText((prev) =>
                text
                    .split('')
                    .map((letter, index) => {
                        if (index < iterationRef.current) {
                            return text[index];
                        }
                        return CHARS[Math.floor(Math.random() * CHARS.length)];
                    })
                    .join('')
            );

            if (iterationRef.current >= text.length) {
                clearInterval(intervalRef.current);
            }

            iterationRef.current += 1 / (iterations / 10);
        }, speed);

        return () => clearInterval(intervalRef.current);
    }, [text, active, iterations, speed]);

    return displayText;
};

export default function ScrambleText({ text, className, active = true, onClick }) {
    const scrambled = useScrambleText(text, { active });
    return <span className={className} onClick={onClick}>{scrambled}</span>;
}
