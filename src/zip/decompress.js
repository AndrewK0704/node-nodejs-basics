import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import { createGunzip } from 'zlib';

const decompress = async () => {
    // Write your code here 

    const write_file = path.join(path.dirname(fileURLToPath(import.meta.url)), "files", "fileToCompress.txt");
    const read_file = path.join(path.dirname(fileURLToPath(import.meta.url)), "files", "archive.gz");
    fs.createReadStream(read_file).pipe(createGunzip()).pipe(fs.createWriteStream(write_file));
};

await decompress();