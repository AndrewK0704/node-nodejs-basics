import fs from 'fs';
import path from "path";
import { fileURLToPath } from 'url';

const copy = async () => {
    // Write your code here 

    fs.readdir(path.join(path.dirname(fileURLToPath(import.meta.url)), "files"), (err, data) => {
        if (err) {
            console.error('FS operation failed');      
        } else {          
            fs.mkdir(path.join(path.dirname(fileURLToPath(import.meta.url)), "files_copy"), err => {
                if (err) {
                    console.error('FS operation failed');                
                } else {                 
                    for (let i=0; i<data.length; i++){
                        fs.copyFile(path.join(path.dirname(fileURLToPath(import.meta.url)), 'files', data[i]), path.join(path.dirname(fileURLToPath(import.meta.url)), 'files_copy', data[i]), err => {
                        });
                    };                
                }
            });              
        }   
    })
};

await copy();
