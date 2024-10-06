import fs from 'fs';
import path from "path";
import { fileURLToPath } from 'url';

const create = async () => {
    // Write your code here 

    fs.access(path.join(path.dirname(fileURLToPath(import.meta.url)), 'files', 'fresh.txt'), (err) => {
        if (err) {
            fs.writeFile(path.join(path.dirname(fileURLToPath(import.meta.url)), 'files', 'fresh.txt'),'I am fresh and young', (err) => {
            });
        } else {   
            console.error('FS operation failed');
        }
    })
};

await create();