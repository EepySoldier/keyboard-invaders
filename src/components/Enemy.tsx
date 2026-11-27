export default function Enemy({ word }: { word: string }) {
  return (
    <div>
      {[...word].map((letter, index) => (
        <span className="uppercase" key={index}>
          {letter}
        </span>
      ))}
    </div>
  );
}
