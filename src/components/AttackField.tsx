"use client"

import { type ChangeEvent, useState, useEffect } from "react";

const MAX = 5;

export default function AttackField(){
    const [word, setWord] = useState<string>("");

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent): void => {
            if(e.ctrlKey || e.metaKey || e.altKey) {
                return;
            }

            if(e.key === 'Backspace') {
                setWord(prev => prev.slice(0, -1))
            } else if(/^[a-z]$/i.test(e.key)) {
                setWord(prev => prev.length < MAX ? prev + e.key.toUpperCase() : prev);
            }
        }
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    return (
        <div>
            {[...word].map((letter, i) => (
                <span key={i}>{letter}</span>
            ))}
        </div>
    );
}