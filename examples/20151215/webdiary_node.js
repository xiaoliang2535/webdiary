#!/usr/bin/env node

var run = function (obj) {
    if(obj[1] === '-v'){
        console.log('webdiary version is : 1.0.0');
    }
    if(obj[1] === '-h'){
        console.log('Useage:');
        console.log('  -v --version [show version]');
    }
};

// 从第二个参数读起 webdiary -v
run(process.argv.slice(1));