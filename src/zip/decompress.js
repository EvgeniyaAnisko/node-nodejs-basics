import { pipeline } from "node:stream/promises";
import { createReadStream, createWriteStream } from "node:fs";
import { createGunzip } from "node:zlib";
import { fileURLToPath } from "url";
import path from "node:path";

const FILE_NAME = "files/fileToCompress.txt";
const ARCHIVE_NAME = "files/archive.gz";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
    const url = path.join(__dirname, FILE_NAME);
    const urlArchive = path.join(__dirname, ARCHIVE_NAME);

    await pipeline(createReadStream(urlArchive), createGunzip(), createWriteStream(url));
};

await decompress();