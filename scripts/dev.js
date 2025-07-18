import fs from "fs";
import path from "path";

// Chemins absolus
const indexDev = path.resolve("index.dev.html");
const indexMain = path.resolve("index.html");

if (fs.existsSync(indexMain)) {
  fs.rmSync(indexMain); // Supprime l'ancien index.html
}

fs.copyFileSync(indexDev, indexMain);

console.log("✅ index.dev.html copié vers index.html");
