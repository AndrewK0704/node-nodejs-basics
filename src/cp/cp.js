import { fileURLToPath } from "url";
import path from "path";
import { spawn } from "child_process";

const spawnChildProcess = async (args) => {
    // Write your code here

    const childProcess = spawn("node", [path.join(path.dirname(fileURLToPath(import.meta.url)), "files", "script.js"), ...args]);
    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
// spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
spawnChildProcess( ['test1', 'test2', 'test3']);
