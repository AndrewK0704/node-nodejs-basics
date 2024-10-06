import { Transform } from 'stream';

const transform = async () => {
    // Write your code here 

    const reverseTransform = new Transform({
        transform(data, encoding, callback) {
            callback(null, data.toString().split('').reverse().join('') + `\n`);
        }
    });

    process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

await transform();