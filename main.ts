// Make the Judge Smile — one line about a small good thing today.
// The program writes the line to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// The cat did not ask permission; neither did the smile that followed.
const line =
  "Today my neighbour's cat chose my lap over the sunny windowsill, and I cancelled everything to stay right there.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(line);
