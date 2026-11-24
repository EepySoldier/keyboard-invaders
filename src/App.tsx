import { useState } from "react";

import AttackField from "@/components/AttackField"

export default function App() {
    const [word, setWord] = useState<string>("")

    return (
      <main className="mx-auto my-auto w-full max-w-5xl min-h-150 p-8 border-2">
        Keyboard Invaders
          <AttackField word={word} setWord={setWord}/>
      </main>
  );
}
