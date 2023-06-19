import { fileURLToPath } from 'url';
import { createReadStream } from 'node:fs';
import path from 'node:path';
import { pipeline } from 'stream/promises';

const FILE_NAME = 'files/fileToRead.txt';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const url = path.join(__dirname, FILE_NAME);
    await pipeline(createReadStream(url), process.stdout);
};

await read();