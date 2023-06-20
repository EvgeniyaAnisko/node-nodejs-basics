import { readdir } from 'fs/promises';
import { getAbsolutePath } from './getAbsolutePath.js';

const ERROR_MESSAGE = 'FS operation failed';

const list = async () => {
    const url = getAbsolutePath('');
    try {
        console.log(await readdir(url));
    } catch (error) {
        throw new Error(ERROR_MESSAGE);
    }
};

await list();