import path from "node:path";
import { Worker } from "node:worker_threads";
import { cpus } from 'os';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WORKER_FILE = 'worker.js';
const START_NUMBER = 10;

const performCalculations = async () => {
    const urlWorker = path.join(__dirname, WORKER_FILE);

    const parentCalculationNthFibonacci = (workerData) => new Promise((resolve) => {
        const worker = new Worker(urlWorker, { workerData });

        worker.on('error', () => resolve({ status: 'error', data: null }));
        worker.on('message', (data) => resolve({ status: 'resolved', data: data }));
    });

    const promises = cpus()
        .map((value, index) => parentCalculationNthFibonacci(START_NUMBER + index));

    const result = await Promise.all(promises);

    console.log(result);
};

await performCalculations();