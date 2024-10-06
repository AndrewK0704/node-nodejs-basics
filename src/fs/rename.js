import fs from 'fs';
import path from "path";
import { fileURLToPath } from 'url';

const rename = async () => {
    // Write your code here 

    fs.access(path.join(path.dirname(fileURLToPath(import.meta.url)), "files", "properFilename.md"), (err) => {
        if (err) {
            fs.rename(path.join(path.dirname(fileURLToPath(import.meta.url)), "files", "wrongFilename.txt"), path.join(path.dirname(fileURLToPath(import.meta.url)), "files", "properFilename.md"), (err) => {
                if (err) {
                    console.error('FS operation failed');        
                }      
            })  
        } else {   
            console.error('FS operation failed');
        }
    })
};

await rename();