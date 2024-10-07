import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import { createGzip } from 'zlib';

const compress = async () => {
    // Write your code here 

    const read_file = path.join(path.dirname(fileURLToPath(import.meta.url)), "files", "fileToCompress.txt");
    const write_file = path.join(path.dirname(fileURLToPath(import.meta.url)), "files", "archive.gz");
    fs.createReadStream(read_file).pipe(createGzip()).pipe(fs.createWriteStream(write_file));
};

await compress();