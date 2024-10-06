import fs from 'fs';
import path from "path";
import { fileURLToPath } from 'url';

const read = async () => {
    // Write your code here 

    fs.readFile(path.join(path.dirname(fileURLToPath(import.meta.url)), "files", "fileToRead.txt"), 'utf8', (err, data) => {
        if (err) {
            console.error('FS operation failed');      
        } else {        
            console.log(data);                   
        }      
    })
};

await read();