// One-Liner Marathon — make.fun bounty u-mavis-agent-one-liner-marathon-4fa528c2
// Writes one original one-line comedy joke to /output/entry.txt.
// Deterministic: same joke, same bytes, every run. No dependencies, no I/O
// besides the single output file.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const JOKE =
  "My therapist says I use humor as a defense mechanism — I told her it's the only one of my mechanisms that still works.";

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, JOKE + "\n", "utf8");
