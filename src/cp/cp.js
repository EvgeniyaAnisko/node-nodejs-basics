import { fileURLToPath } from "url";
import path from "node:path";
import { fork } from "child_process";

const CHILD_FILE = "files/script.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
    const urlChild = path.join(__dirname, CHILD_FILE);

    fork(urlChild, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2', '...']);
