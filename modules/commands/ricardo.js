module.exports.config = {
    name: "ricado",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Drasew",
    description: "ảnh ricado :>>",
    commandCategory: "ramdom-images",
    usages: "ramdom ảnh ricado :>>",
    cooldowns: 5
  };
  
  module.exports.run = async function({ api, event }) {
    const axios = require('axios');
    const request = require('request');
    const fs = require("fs");
    axios.get('https://api-riacado-milos.badboyminh.repl.co/').then(res => {
    let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
    let count = res.data.count;
    let callback = function () {
            api.sendMessage({
              body: `Ảnh Ricado Milos nè<3\nSố ảnh hiện có: ${count} ảnh`,
              attachment: fs.createReadStream(__dirname + `/cache/1.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/1.${ext}`), event.messageID);
          };
          request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/1.${ext}`)).on("close", callback);
        })
  }