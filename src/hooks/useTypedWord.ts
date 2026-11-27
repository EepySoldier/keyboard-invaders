import { useEffect, useState } from "react";
import { words } from "@/dictionary";

const MAX = Math.max(...words.map((w) => w.length));

export function useTypedWord() {
  const [typedWord, setTypedWord] = useState("");

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;

      if (e.key === "Backspace") {
        setTypedWord((prev) => prev.slice(0, -1));
      } else if (/^[a-z]$/i.test(e.key)) {
        setTypedWord((prev) =>
          prev.length < MAX ? prev + e.key.toLowerCase() : prev,
        );
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return [typedWord, setTypedWord] as const;
}
