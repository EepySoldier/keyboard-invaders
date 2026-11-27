import { getRandomWord } from "@/lib/utils";
import { useState } from "react";

export default function Enemy() {
  const [word] = useState<string>(getRandomWord);

  return (
    <div>
      {[...word].map((letter, index) => (
        <span key={index}>{letter}</span>
      ))}
    </div>
  );
}
