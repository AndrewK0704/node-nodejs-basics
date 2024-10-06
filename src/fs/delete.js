import fs from 'fs';
import path from "path";
import { fileURLToPath } from 'url';

const remove = async () => {
    // Write your code here 

    fs.unlink(path.join(path.dirname(fileURLToPath(import.meta.url)), 'files', 'fileToRemove.txt'), (err) => {
        if (err) {
            console.error('FS operation failed');        
        }            
    })
};

await remove();