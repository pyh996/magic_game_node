#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var chalk = require('chalk');
var inquirer = require('inquirer');
var commander = require('commander');
// 实例化 commander
var program = new commander.Command();
// 封装chalk,输出颜色
function color_str(color, str) {
    var colorStrings = chalk.keyword(color);
    return colorStrings(str);
}
// 随机数函数
function Random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
//注册命令
function registerCommend() {
    program
        .version('1.0.4', '-v, --version')
        // 开始游戏命令
        .option('-s, --start', 'Add peppers');
    program.on('option:start', function () {
        // 执行游戏逻辑
        game_main();
    })
        .parse(process.argv);
}
function game_main() {
    return __awaiter(this, void 0, void 0, function () {
        var list1, list2, index2, i, item, index1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log(color_str("red", "现在游戏开始~"));
                    console.log(color_str("green", "大家好,我叫作曲家种太阳"));
                    console.log(color_str("green", "是一个虚拟文明的魔术师,接下来开始我的表演~"));
                    return [4 /*yield*/, inquirer.prompt({
                            type: 'input',
                            name: "type",
                            message: color_str("orange", '请随机想一个10到100的数字,假设这个数字是x,请将x减去它个位与十位之和得出一个数字Q,请你心里默念三次数字Q,请按任意键继续~')
                        })];
                case 1:
                    _a.sent();
                    console.log(color_str("purple", "我们的文明,每一个数字背后都代表一个图腾,我已画好了对应关系,请你把默念的数字所对应的图腾画在记在心里,让我预测一下~"));
                    list1 = ["☄", "☬", "♝", "♬", "◐", "♣", "▲", "♦", "☺", "√", "♞", "♍", "♒", "♓", "♑", "♐", "♎", "♌", "♉", "♈"];
                    list2 = ["§", "〼", "◎", "¤", "☼", "☽", "■", "★", "♠", "♥", "☑", "♛",];
                    index2 = Random(1, 12);
                    for (i = 1; i < 101; i++) {
                        item = void 0;
                        index1 = Random(1, 20);
                        // 九倍数的时候
                        if (i % 9 === 0) {
                            item = i + ":" + list2[index2];
                        }
                        else {
                            item = i + ":" + list1[index1];
                        }
                        // 输出换行逻辑
                        if (i % 5 == 0 && i > 4) {
                            process.stdout.write(item + "\n");
                            process.stdout.write("\n");
                        }
                        else {
                            process.stdout.write(item + "   ");
                        }
                    }
                    console.log(color_str("purple", "我们的文明,每一个数字背后都代表一个图腾,我已画好了对应关系,请你把默念的数字所对应的图腾画在记在心里,让我预测一下~"));
                    return [4 /*yield*/, inquirer.prompt({
                            type: 'input',
                            name: "waite",
                            message: color_str("orange", '您选择好了么,来让我预言下~~')
                        })];
                case 2:
                    _a.sent();
                    console.log(color_str("yellow", "------------------------------"));
                    console.log(color_str("yellow", "------------------------------"));
                    console.log(color_str("yellow", "------------------------------"));
                    console.log("\u4F60\u9009\u62E9\u7684\u662F:" + list2[index2]);
                    console.log(color_str("red", "如果预言的对的话,欢迎给我的文章点赞哦~~~"));
                    console.log(color_str("yellow", "------------------------------"));
                    console.log(color_str("yellow", "------------------------------"));
                    return [2 /*return*/];
            }
        });
    });
}
registerCommend();
