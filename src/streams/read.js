import fs from 'fs';

const read = async () => {
    // Write your code here 

    const readStream=fs.createReadStream('./src/streams/files/fileToRead.txt');
    readStream.on('data',data=>{
        process.stdout.write(data.toString());
    })
};

await read();