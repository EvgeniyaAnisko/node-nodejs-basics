import { readFile } from 'node:fs';
import { getAbsolutePath } from './getAbsolutePath.js';

const FILE_NAME = 'fileToRead.txt';
const ERROR_MESSAGE = 'FS operation failed';

const read = async () => {
    const url = getAbsolutePath(FILE_NAME);
    readFile(url, { encoding: 'utf8' }, (err, data) => {
        if (err)
            throw new Error(ERROR_MESSAGE);
        console.log(data);
    });
};

await read();