module.exports.config = {
    name: "banmuoidiem",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "Drasew",
    description: "Tag liên tục lần",
    commandCategory: "Nhóm",
    usages: "banmuoidiem",
    cooldowns: 5,
    dependencies: { }
}
 
module.exports.run = async function({ api, args, Users, event}) {
const { threadID, messageID, senderID, mentions } = event;
var mention = Object.keys(mentions)[0];
setTimeout(() =>
api.sendMessage({
   body:"Bạn đã sẵn sàng chưa vậy " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID, messageID), 1000)
setTimeout(() =>
api.sendMessage("Đợi t lấy hơi :3", threadID), 2000)
 
setTimeout(() =>
api.sendMessage("Haizzzz", threadID), 3000)

var a = Math.floor(Math.random() * 1);
if ( a==0 ) {
setTimeout(() =>
api.sendMessage({
   body:"Bạn là nhất " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 5000)
setTimeout(() =>
api.sendMessage({
   body:"Bạn là số 1 " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 9000)
setTimeout(() =>
api.sendMessage({
   body:"Bạn 10 điểm " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 13000)
setTimeout(() =>
api.sendMessage({
   body: "Bạn là hàng hiệu "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 17000)
setTimeout(() =>
api.sendMessage({
   body: "Bạn là siêu nhân "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 21000)
setTimeout(() =>
api.sendMessage({
   body: "Bạn là đỉnh "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 25000)
setTimeout(() =>
api.sendMessage({
   body:"Được chưa " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 29000)
}
}