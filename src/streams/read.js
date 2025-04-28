import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const read = async () => {
    // Write your code here 
    const readStream=fs.createReadStream(path.join(path.dirname(fileURLToPath(import.meta.url)), 'files', 'fileToRead.txt'));
    readStream.on('data', data=>{
        process.stdout.write(data.toString());
    })
};

await read();