import Enemy from "@/components/Enemy";
import AttackField from "@/components/AttackField";
import { useTypedWord } from "@/hooks/useTypedWord";
import { useEnemies } from "@/hooks/useEnemies";

export type EnemyType = {
  id: string;
  word: string;
};

export default function App() {
  const { enemies, spawnEnemy, killEnemy } = useEnemies();
  const [typedWord] = useTypedWord(killEnemy);

  return (
    <main className="mx-auto my-auto w-full max-w-5xl min-h-150 p-8 border-2">
      <button
        className="bg-slate-600 hover:cursor-pointer"
        onClick={spawnEnemy}
      >
        qwe
      </button>
      Keyboard Invaders
      <AttackField word={typedWord} />
      {enemies.map((enemy) => (
        <Enemy key={enemy.id} word={enemy.word} />
      ))}
    </main>
  );
}
