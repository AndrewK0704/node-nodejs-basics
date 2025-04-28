import {Worker} from "worker_threads";
import path from 'path';
import { fileURLToPath } from 'url';


const performCalculations = async () => {
    // Write your code here

    const worker = new Worker(path.join(path.dirname(fileURLToPath(import.meta.url)), "worker.js"), {workerData: 10});
    worker.on('message', msg=>console.log(msg))

};

await performCalculations();