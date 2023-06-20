import { fileURLToPath } from "url";
import { createWriteStream } from "node:fs";
import path from "node:path";

const FILE_NAME = "files/fileToWrite.txt";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
    const url = path.join(__dirname, FILE_NAME);
    const writableStream = createWriteStream(url);

    process.stdin.on("data", (data) => {
        writableStream.write(data);
    });
};

await write();