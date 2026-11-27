import { useEffect, useEffectEvent, useState } from "react";
import { words } from "@/dictionary";

const MAX = Math.max(...words.map((w) => w.length));

export function useTypedWord(onWord: (word: string) => boolean) {
  const [typedWord, setTypedWord] = useState("");

  const onKeyDown = useEffectEvent((e: KeyboardEvent) => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;

    if (e.key === "Backspace") {
      setTypedWord((prev) => prev.slice(0, -1));
    } else if (/^[a-z]$/i.test(e.key) && typedWord.length < MAX) {
      const next = typedWord + e.key.toLowerCase();
      setTypedWord(onWord(next) ? "" : next);
    }
  });

  useEffect(() => {
    const listener = (e: KeyboardEvent) => onKeyDown(e);
    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, []);

  return [typedWord, setTypedWord] as const;
}
