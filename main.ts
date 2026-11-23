// Real-Life Patch Notes: The Comedy Changelog
// Writes one one-line software patch note for a bug in real life / human
// biology to <output dir>/entry.txt. Deterministic, zero network requests.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// First draft of the entry line (revised in a later pass).
const ENTRY =
  "v3.1.0: fixed a bug where entering a room wiped the short-term memory cache of why you walked in.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
