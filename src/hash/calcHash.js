import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import path from 'node:path';

const FILE_NAME = 'fileToCalculateHashFor.txt';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
    const url = path.join(__dirname, 'files', FILE_NAME);
    const data = await readFile(url);
    const hash = createHash('sha256').update(data);
    const hashHex = hash.digest('hex');
    console.log(hashHex);
};

await calculateHash();