module.exports.config = {
    name: "ad",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "JRT",
    description: "Kiểm tra thông tin admin bot.",
    commandCategory: "Thông tin adminbot",
    usages: "adm",
    cooldowns: 5,
    dependencies: {
      "request":"",
      "fs-extra":"",
      "axios":""
    }
  };
  
  module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
  const axios = global.nodemodule["axios"];
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
    var link = [
  "https://i.imgur.com/Fij6vZq.jpeg",
  "https://i.imgur.com/nJOSwwH.jpeg",
  "https://i.imgur.com/AHDaCG5.jpeg",
  "https://i.imgur.com/xaBaEiV.jpeg"
    ];
    var callback = () => api.sendMessage({body:`😻ADMIN BOT😼
    ❯ Tên: Minh Vũ
    ❯ Sinh ngày: 17/11/2007
    ❯ Facebook: fb.com/tdfuwu
    ❯ Cảm ơn đã sử dụng bot của tớ <3\n\n----minvu----`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
        return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
     };
  