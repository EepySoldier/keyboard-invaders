import { useState } from "react";
import { getRandomWord } from "@/lib/utils";

export type EnemyType = {
  id: string;
  word: string;
};

export function useEnemies() {
  const [enemies, setEnemies] = useState<EnemyType[]>([]);

  function spawnEnemy() {
    setEnemies((prev) => [
      ...prev,
      { id: crypto.randomUUID(), word: getRandomWord() },
    ]);
  }

  function killEnemy(word: string) {
    const hit = enemies.find((enemy) => enemy.word === word);
    if (!hit) return false;
    setEnemies((prev) => prev.filter((enemy) => enemy.id !== hit.id));
    return true;
  }

  return { enemies, spawnEnemy, killEnemy };
}
