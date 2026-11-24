import { type Dispatch, type SetStateAction, useEffect } from "react";

const MAX = 5;

type AttackFieldProps = {
    word: string;
    setWord: Dispatch<SetStateAction<string>>;
}

export default function AttackField({word, setWord}: AttackFieldProps){
    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent): void => {
            if(e.ctrlKey || e.metaKey || e.altKey) {
                return;
            }

            if(e.key === 'Backspace') {
                setWord(prev => prev.slice(0, -1))
            } else if(/^[a-z]$/i.test(e.key)) {
                setWord(prev => prev.length < MAX ? prev + e.key : prev);
            }
        }
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [setWord]);

    return (
        <div>
            {[...word].map((letter, i) => (
                <span key={i}>{letter}</span>
            ))}
        </div>
    );
}