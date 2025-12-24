import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

const STORAGE_KEY = "realtime_chat_username";

const ANIMALS = [
  "Lion",
  "Tiger",
  "Bear",
  "Wolf",
  "Eagle",
  "Shark",
  "Panda",
  "Fox",
  "Rabbit",
  "Dolphin",
  "Horse",
  "Elephant",
];

const generateUsername = () => {
  const word = ANIMALS[Math.floor(Math.random() * ANIMALS.length)];
  return `anonymous_${word}-${nanoid(6)}`;
};

export const useUsername = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const main = () => {
      const storedUsername = localStorage.getItem(STORAGE_KEY);
      if (storedUsername) {
        setUsername(storedUsername);
        return;
      }
      const generated = generateUsername();
      localStorage.setItem(STORAGE_KEY, generated);
      setUsername(generated);
    };
    main();
  }, []);

  return { username };
};
