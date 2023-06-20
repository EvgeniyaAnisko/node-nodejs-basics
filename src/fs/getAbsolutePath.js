import { fileURLToPath } from 'url';
import { dirname } from 'path';

import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const getAbsolutePath = (filename) => path.join(__dirname,  'files', filename);
