import { Transform } from 'stream';
import { pipeline } from 'stream/promises';

const transform = async () => {
    const transformPipeline = new Transform({
        transform(chunk, encoding, callback){ 
            callback(null, `${String(chunk).split('').reverse().join('')}\n`);
        },
    });

    await pipeline(process.stdin, transformPipeline, process.stdout);
};

await transform();