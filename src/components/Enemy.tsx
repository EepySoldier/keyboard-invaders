export default function Enemy({word}: {word: string}) {
  return (
    <div>
      {[...word].map((letter, index) => (
        <span key={index}>{letter}</span>
      ))}
    </div>
  );
}
