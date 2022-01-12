module.exports.config = {
    name: "time",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "a",
    description: "a",
    commandCategory: "a",
    usages: "a",
    cooldowns: 0
};
module.exports.handleEvent = async function ({ api, args, Users, event, Threads, utils, client }) {
    let { messageID, threadID, senderID, mentions } = event;
    const chalk = require('chalk');
    // lấy time hiện tại nếu bạn dùng replit hay vps utc khác +7 thì dùng moment timezone 
    var d = new Date();
    const bb = d.getDate();
    const cc = d.getDay();
    const qq = d.getFullYear();
    const ss = d.getYear();//lấy 2 số cuối của năm
    const zz = d.getHours();
    const rr = d.getMilliseconds();
    const tt = d.getMinutes();
    const yy = d.getMonth();
    const uu = d.getSeconds();
    const ii = d.getTime();
    switch (cc) {
        case 0: {
            textt = "Chủ Nhật"
            break;
        }
        case 1: {
            textt = "Thứ Hai"
            break;
        }
        case 2: {
            textt = "Thứ Ba"
            break;
        }
        case 3: {
            textt = "Thứ Bốn"
            break;
        }
        case 4: {
            textt = "Thứ Năm"
            break;
        }
        case 5: {
            textt = "Thứ Sáu"
            break;
        }
        default: {
            textt = "Thứ Bảy"
        }
    }
    switch (yy) {
        case 0: {
            texttt = "Tháng 1"
            break;
        }
        case 1: {
            texttt = "Tháng 2"
            break;
        }
        case 2: {
            texttt = "Tháng 3"
            break;
        }
        case 3: {
            texttt = "Tháng 4"
            break;
        }
        case 4: {
            texttt = "Tháng 5"
            break;
        }
        case 5: {
            texttt = "Tháng 6"
            break;
        }
        case 6: {
            texttt = "Tháng 7"
            break;
        }
        case 7: {
            texttt = "Tháng 8"
            break;
        }
        case 8: {
            texttt = "Tháng 9"
            break;
        }
        case 9: {
            texttt = "Tháng 10"
            break;
        }
        case 10: {
            texttt = "Tháng 11"
            break;
        }
        default: {
            texttt = "Tháng 12"
        }
    }
    const name = await Users.getNameUser(event.senderID)
    const threadInfo = await api.getThreadInfo(event.threadID)
    const threadName = threadInfo.threadName
    const msg = event.body
    console.log(chalk.red("[ DEV ] ") + chalk.cyan(`ThreadName: ${threadName}`) + chalk.yellow(` | `) + chalk.magenta(`UserID: ${senderID}`) + chalk.red(` | `) + chalk.blue(`UserName: ${name}:`) + chalk.blue(` | `) + chalk.yellow(`Message: ${msg}`) + `\n` + chalk.red(`${textt} Ngày ${bb} ${texttt} Năm ${qq} || ${zz} : ${tt} : ${uu} : ${rr} : ${ii}`));
}
module.exports.run = async function ({ api, args, Users, event, Threads, utils, client }) {
}