import { execFileSync } from "node:child_process";
import { statSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const limit = 50 * 1024 * 1024;
const files = new Set(
  execFileSync("git", ["ls-files", "--cached", "--others", "--exclude-standard", "-z"], {
    cwd: root,
    encoding: "utf8",
  }).split("\0").filter(Boolean),
);

let largest = { path: "", size: 0 };
let failed = false;
for (const path of files) {
  let stat;
  try {
    stat = statSync(resolve(root, path));
  } catch (error) {
    if (error.code === "ENOENT") continue; // Allow pending deletions.
    throw error;
  }
  if (!stat.isFile()) continue;
  if (stat.size > largest.size) largest = { path, size: stat.size };
  if (stat.size > limit) {
    console.error(`File exceeds 50 MiB: ${path} (${(stat.size / 1024 / 1024).toFixed(2)} MiB)`);
    failed = true;
  }
}

console.log(`Largest file: ${largest.path} (${(largest.size / 1024 / 1024).toFixed(2)} MiB)`);
process.exitCode = failed ? 1 : 0;
