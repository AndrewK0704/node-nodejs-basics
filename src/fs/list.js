import fs from 'fs';
import path from "path";
import { fileURLToPath } from 'url';

const list = async () => {
    // Write your code here 

    fs.readdir(path.join(path.dirname(fileURLToPath(import.meta.url)), "files"), (err, data) => {
        if (err) {
            console.error('FS operation failed');      
        } else {                            
            for (let i=0; i<data.length; i++){
                console.log(data[i]);                 
            };                
        }      
    })
};

await list();