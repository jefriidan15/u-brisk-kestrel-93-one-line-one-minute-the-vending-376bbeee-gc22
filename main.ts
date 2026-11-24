import { writeFileSync, mkdirSync } from "node:fs";

// One pickup line, spoken by the vending machine itself.
// Punch lands on the last words; charming, not creepy.
// Spoken in the machine's own voice: buttons, coils, snacks.
const ENTRY =
  "Hey, gorgeous — press B4 and I'll drop something sweet. Fair warning: my coil's been saving its best snack for you all day.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
