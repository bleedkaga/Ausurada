const { promisify } = require('util');
const figlet = promisify(require('figlet'));
const clear = require('clear');
const chalk = require('chalk');
const log = content => console.log(chalk.green(content));
const { clone } = require('../lib/download');
const open = require('open');

module.exports = async (name) => {
    // 打印欢迎界面
    clear();
    const data = await figlet('CODE STANDARD');
    log(data)

    // clone项目
    await clone('github:su37josephxia/vue-template', name)

    // 安装依赖
    log('installing dependencies ...')
    await spawn('npm', ['install'], { cwd: `./${name}`})
    log('dependencies installed')

    // 打开浏览器，启动项目
    open('http://localhost:8080')
    await spawn('npm', ['run', 'serve'], { cwd: `./${name}`})
}

function spawn(...args){
    const { spawn } = require('child_process');
    return new Promise((resolve) => {
        const proc = spawn(...args);
        // proc.stdout 子进程输出流
        proc.stdout.pipe(process.stdout);
        proc.stderr.pipe(process.stderr);
        proc.on('close', () => {
            resolve();
        })
    })
}
