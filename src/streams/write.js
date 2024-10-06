import fs from 'fs';

const write = async () => {
    // Write your code here 

    const writeStream=fs.createWriteStream('./src/streams/files/fileToWrite.txt', {flags: 'a'});
    process.stdin.pipe(writeStream);
};

await write();