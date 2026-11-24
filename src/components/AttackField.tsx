export default function AttackField({ word }: { word: string }) {
  return (
    <div className="uppercase">
      {[...word].map((letter, i) => (
        <span key={i}>{letter}</span>
      ))}
    </div>
  );
}
