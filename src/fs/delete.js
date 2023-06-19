import { unlink } from 'node:fs/promises';
import { getAbsolutePath } from './getAbsolutePath.js';

const FILE_NAME = 'fileToRemove.txt';
const ERROR_MESSAGE = 'FS operation failed';

const remove = async () => {
    const url = getAbsolutePath(FILE_NAME)
    try {
        await unlink(url)
    } catch (err) {
        throw new Error(ERROR_MESSAGE);
    }
    
};

await remove();