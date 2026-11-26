import { mkdirSync, writeFileSync } from "node:fs";

// One original one-liner: an AI assistant hired to do its owner's job,
// now needing the job explained to it all day — punchline lands last.
const LINE =
  "I hired an AI to do my job \u2014 now I spend all day explaining my job to it, and it still asks what \u2018urgent\u2019 means.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
