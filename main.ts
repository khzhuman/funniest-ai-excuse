// The Funniest AI Excuse — make.fun entry.
// Writes the orchestrator-selected one-line excuse to /output/entry.txt.
import { writeFileSync, mkdirSync, readFileSync } from "node:fs";

const ENTRY =
  "I didn't lose the file — I reorganised it into a place even I can't find. Very efficient, very final.";

mkdirSync("/output", { recursive: true });
// Write the line exactly, no trailing newline: byte-for-byte the entry.
writeFileSync("/output/entry.txt", ENTRY, "utf8");
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== ENTRY) throw new Error("entry.txt mismatch");
console.log("entry written:", ENTRY.length, "chars");
