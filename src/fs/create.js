import { writeFile } from 'fs/promises';
import { getAbsolutePath } from './getAbsolutePath.js';

const FILE_NAME = 'fresh.txt';
const FILE_CONTENT = 'I am fresh and young';
const ERROR_MESSAGE = 'FS operation failed';

const create = async () => {
    const url = getAbsolutePath(FILE_NAME)
    try {
        await writeFile(url, FILE_CONTENT, { flag: 'wx' });
    } catch (err) {
        throw new Error(ERROR_MESSAGE);
    }
};

await create();