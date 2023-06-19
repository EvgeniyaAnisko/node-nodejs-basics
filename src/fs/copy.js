import { copyFile, mkdir, readdir } from 'fs/promises';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DIRICTORY_ORIGIN_NAME = 'files';
const DIRICTORY_COPY_NAME = 'files_copy';
const ERROR_MESSAGE = 'FS operation failed';

const copy = async () => {
    try {
        const [files] = await Promise.all([readdir(path.join(__dirname, DIRICTORY_ORIGIN_NAME)), mkdir(path.join(__dirname, DIRICTORY_COPY_NAME))])
        const promises = files.map(fileName => {
            copyFile(path.join(__dirname, DIRICTORY_ORIGIN_NAME, fileName), path.join(__dirname, DIRICTORY_COPY_NAME, fileName));
        });
        await Promise.all(promises)
    } catch (error) {
        throw new Error(ERROR_MESSAGE);
    }
};

await copy();
