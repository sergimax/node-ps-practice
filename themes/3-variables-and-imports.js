import { log } from "console";
import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const data = readFileSync("./data.txt");
console.log(data.toString());

// get the resolved path to the file
const __filename = fileURLToPath(import.meta.url);

// get the name of the directory
const __dirname = path.dirname(__filename);

log(__filename);
log(__dirname);
