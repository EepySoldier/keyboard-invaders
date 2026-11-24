import AttackField from "@/components/AttackField";
import { useTypedWord } from "@/hooks/useTypedWord";

export default function App() {
  const [word] = useTypedWord();

  return (
    <main className="mx-auto my-auto w-full max-w-5xl min-h-150 p-8 border-2">
      Keyboard Invaders
      <AttackField word={word} />
    </main>
  );
}
