const request = require('request');
const fs = require('fs')

module.exports.config = {
  name: "bopmong",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "DÅ©ngkon",
  description: "BĂ³p mĂ´ng ngÆ°á»i báº¡n tag",
  commandCategory: "general",                                                                                                                                                                                                       usages: "bopmong [tag ngÆ°á»i báº¡n cáº§n bĂ³p mĂ´ng]",
  cooldowns: 5,
  dependencies: {
    "request": "",
  "fs": ""
}
};

module.exports.run = function({
  api,
  event,
  args,
  client,
  __GLOBAL
}) {
  var out = (msg) => api.sendMessage(msg, event.threadID, event.messageID);
  if (!args.join(" ")) return out("Bạn chưa nhập tin nhắn");
  else
  return request('https://api.vinhbeat.ga/bopmong.php', (err, response, body) => {
    let picData = JSON.parse(body);                                                                                                                                                                                                   var mention = Object.keys(event.mentions)[0];
    let getURL = picData.url;
    let ext = getURL.substring(getURL.lastIndexOf(".") + 1);
    let tag = event.mentions[mention].replace("@", "");
    let callback = function() {
      api.sendMessage({
        body: tag + " Anh bóp mông có sướng không🤤🌚",
        mentions: [{
          tag: tag,
          id: Object.keys(event.mentions)[0]
        }],
        attachment: fs.createReadStream(__dirname + `/cache/bopmong.${ext}`)
      }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/bopmong.${ext}`), event.messageID);
    };
    request(getURL).pipe(fs.createWriteStream(__dirname + `/cache/bopmong.${ext}`)).on("close", callback);
  });
}