#!/usr/bin/env node
const chalk = require('chalk')
const inquirer = require('inquirer')
const commander = require('commander');

// 实例化 commander
const program = new commander.Command();

// 封装chalk,输出颜色
function color_str(color: string, str: string): string {
    const colorStrings = chalk.keyword(color)
    return colorStrings(str)
}

// 随机数函数
function Random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min
}

//注册命令
function registerCommend() {
    program
        .version('1.0.4', '-v, --version')
        // 开始游戏命令
        .option('-s, --start', 'Add peppers')
    program.on('option:start', function () {
        // 执行游戏逻辑
        game_main()
    })
    .parse(process.argv);
}

async function game_main() {
    console.log(color_str("red", "现在游戏开始~"))
    console.log(color_str("green", "大家好,我叫作曲家种太阳"))
    console.log(color_str("green", "是一个虚拟文明的魔术师,接下来开始我的表演~"))
    await inquirer.prompt({
        type: 'input',
        name: "type",
        message: color_str("orange", '请随机想一个10到100的数字,假设这个数字是x,请将x减去它个位与十位之和得出一个数字Q,请你心里默念三次数字Q,请按任意键继续~')
    })
    console.log(color_str("purple", "我们的文明,每一个数字背后都代表一个图腾,我已画好了对应关系,请你把默念的数字所对应的图腾画在记在心里,让我预测一下~"))
    // 放非9的倍数的图标
    const list1: string[] = ["☄", "☬", "♝", "♬", "◐", "♣", "▲", "♦", "☺", "√", "♞", "♍", "♒", "♓", "♑", "♐", "♎", "♌", "♉", "♈"];
    // 放9的倍数的图标
    const list2: string[] = ["§", "〼", "◎", "¤", "☼", "☽", "■", "★", "♠", "♥", "☑", "♛",]
    // list2的下标,放在for循环外,为了让九的倍数的图标一致
    const index2: number = Random(1, 12)
    for (let i = 1; i < 101; i++) {
        // 单个
        let item: string;
        const index1: number = Random(1, 20)
        // 九倍数的时候
        if (i % 9 === 0) {
            item = `${i}:${list2[index2]}`
        } else {
            item = `${i}:${list1[index1]}`
        }
        // 输出换行逻辑
        if (i % 5 == 0 && i > 4) {
            process.stdout.write(item + "\n")
            process.stdout.write("\n")
        } else {
            process.stdout.write(item + "   ")
        }
    }
    console.log(color_str("purple", "我们的文明,每一个数字背后都代表一个图腾,我已画好了对应关系,请你把默念的数字所对应的图腾画在记在心里,让我预测一下~"))
    await inquirer.prompt({
        type: 'input',
        name: "waite",
        message: color_str("orange", '您选择好了么,来让我预言下~~')
    })

    console.log(color_str("yellow", "------------------------------"))
    console.log(color_str("yellow", "------------------------------"))
    console.log(color_str("yellow", "------------------------------"))
    console.log(`你选择的是:${list2[index2]}`)
    console.log(color_str("red", "如果预言的对的话,欢迎给我的文章点赞哦~~~"))
    console.log(color_str("yellow", "------------------------------"))
    console.log(color_str("yellow", "------------------------------"))
}
registerCommend()



