const parseArgs = () => {
    // Write your code here 
    let str='';

    for (let i=2; i<process.argv.length; i=i+2){
        str=str+process.argv[i].slice(2)+' is '+process.argv[i+1]+', ';
    }
    console.log(str.slice(0, str.length-2));
};

parseArgs();