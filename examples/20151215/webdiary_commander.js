#!/usr/bin/env node

/**
 * Command 中的API 接口
 * .version('0.0.1')
 * .option('-c, --create, <type>', 'create webdiary dir')
 *      option 有四个参数，命令简写｜命令全拼｜类型（<lang> - 必选参数, [db] － 可选参数）, 描述, 回调函数, 默认值
 * .parse(process.argv)  处理定义的option和sub-command
 * .allowUnknownOption()
 *      取消为输入命令时弹出的错误提示
 * .command('resume <cmd>') 创建自命
 */

var program = require('commander');
var log = console.log;

program
    .allowUnknownOption()
    .version('0.0.1')
    .option('-c, --create', 'create webdiary dir')
    .option('-o, --option', 'option info')
    .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')

if(program.create) {
    log('create begin');
}

if(program.option) {
    log('option 有四个参数，命令简写｜命令全拼, 描述, 回调函数, 默认值 ')
}

program.on('--help', function() {
    log('自定义help参数');
    log('=========================')
    log('      ︵')
    log('("\\ (●-●)')
    log(' \\/      0\\\\')
    log('  (       )"')
    log('   \\__T__/')
});

console.log('  - %s cheese', program.cheese);
program.parse(process.argv);