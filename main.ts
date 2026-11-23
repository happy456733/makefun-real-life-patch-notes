// Real-Life Patch Notes: The Comedy Changelog
// Writes one one-line software patch note for a bug in real life / human
// biology to <output dir>/entry.txt. Deterministic, zero network requests.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Revised final entry line: sharper punch, stronger wince-and-laugh, same
// terse release-note register ("auto-played", "unprompted").
const ENTRY =
  "v2.7.4: fixed a bug where the brain auto-played your most embarrassing moment from 2009 at 2am, unprompted.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
