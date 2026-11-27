import Enemy from "@/components/Enemy";
import AttackField from "@/components/AttackField";
import { useTypedWord } from "@/hooks/useTypedWord";
import { useState } from "react";
import {getRandomWord} from "@/lib/utils";

export default function App() {
    const [enemies, setEnemies] = useState<{id: string, word: string}[]>([]);
  const [typedWord] = useTypedWord();

  function spawnEnemy(){
      setEnemies((prev) => [...prev, {id: crypto.randomUUID(), word: getRandomWord()}]);
  }

  return (
    <main className="mx-auto my-auto w-full max-w-5xl min-h-150 p-8 border-2">
        <button className="bg-slate-600 hover:cursor-pointer" onClick={spawnEnemy}>qwe</button>
      Keyboard Invaders
      <AttackField word={typedWord} />
        {enemies.map((enemy, index) =>
            <Enemy key={index} word={enemy.word} />)}
    </main>
  );
}
