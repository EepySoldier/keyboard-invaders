import { words } from "@/dictionary";

export const getRandomWord = (): string => {
  return words[Math.floor(Math.random() * words.length)];
};
