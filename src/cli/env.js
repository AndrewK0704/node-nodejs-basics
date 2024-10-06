const parseEnv = () => {
    // Write your code here 

    let str='';
    let obj=Object.keys(process.env).filter(key => key.startsWith('RSS_'));

    for (let i=0; i<obj.length; i++){
        str=str+obj[i]+'='+process.env[obj[i]]+', ';
    }
    console.log(str.slice(0, str.length-2));
};

parseEnv();