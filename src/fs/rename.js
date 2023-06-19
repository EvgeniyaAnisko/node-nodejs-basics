import { rename as renameFile, access, constants } from 'node:fs/promises';
import { getAbsolutePath } from './getAbsolutePath.js';

const FILE_NAME = 'wrongFilename.txt';
const FILE_NAME_NEW = 'properFilename.md';
const ERROR_MESSAGE = 'FS operation failed';

const rename = async () => {
    const urlOldFile = getAbsolutePath(FILE_NAME);
    const urlNewFile = getAbsolutePath(FILE_NAME_NEW);

    try {
        await access(urlNewFile, !constants.F_OK);
    } catch {
        try {
            await renameFile(urlOldFile, urlNewFile);
        } catch {
            throw new Error(ERROR_MESSAGE);
        }
    }

};

await rename();