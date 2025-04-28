import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const write = async () => {
    // Write your code here 
    const writeStream=fs.createWriteStream((path.join(path.dirname(fileURLToPath(import.meta.url)), 'files', 'fileToWrite.txt')), {flags: 'a'});
    process.stdin.pipe(writeStream);
};

await write();