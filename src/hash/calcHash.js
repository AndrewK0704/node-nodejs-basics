import fs from 'fs';
import crypto from 'crypto';

const calculateHash = async () => {
    // Write your code here 
    const stream=fs.createReadStream('./src/hash/files/fileToCalculateHashFor.txt');
    const hash=crypto.createHash('sha256');
    stream.on('data', data => {
        const finalHex=hash.update(data).digest('hex');
        console.log(finalHex);  
    });   
};

await calculateHash();