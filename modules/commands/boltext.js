module.exports.config = {
    name: "boltext",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Drasew",// dựa trên demo của NT Khang
    description: "chuyển đổi font chữ",
    commandCategory: "game",
    usages: "boltext <nội dung>",
    cooldowns: 5
  };
  
  module.exports.run = async ({ event, api, args }) => {
   var text = args.join("");
       text = text;
         text = text.replace(/ /g, ` `)
  .replace(/a/g, `𝙖`)
  .replace(/b/g, `𝙗`)
  .replace(/c/g, `𝙘`)
  .replace(/d/g, `𝙙`)
  .replace(/e/g, `𝙚`)
  .replace(/f/g, `𝙛`)
  .replace(/g/g, `𝙜`)
  .replace(/h/g, `𝙝`)
  .replace(/i/g, `𝙞`)
  .replace(/j/g, `𝙟`)
  .replace(/k/g, `𝙠`)
  .replace(/l/g, `𝙡`)
  .replace(/m/g, `𝙢`)
  .replace(/n/g, `𝙣`)
  .replace(/o/g, `𝙤`)
  .replace(/p/g, `𝙥`)
  .replace(/q/g, `𝙦`)
  .replace(/r/g, `𝙧`)
  .replace(/s/g, `𝐬`)
  .replace(/t/g, `𝙩`)
  .replace(/u/g, `𝙪`)
  .replace(/v/g, `𝙫`)
  .replace(/x/g, `𝙭`)
  .replace(/y/g, `𝙮`)
  .replace(/w/g, `𝙬`)
  .replace(/z/g, `𝙯`)
  .replace(/Q/g, `𝙌`)
  .replace(/W/g, `𝙒`)
  .replace(/E/g, `𝙀`)
  .replace(/R/g, `𝙍`)
  .replace(/T/g, `𝙏`)
  .replace(/Y/g, `𝙔`)
  .replace(/U/g, `𝙐`)
  .replace(/I/g, `𝙄`)
  .replace(/O/g, `𝙊`)
  .replace(/P/g, `𝙋`)
  .replace(/A/g, `𝘼`)
  .replace(/S/g, `𝙎`)
  .replace(/D/g, `𝙁`)
  .replace(/F/g, `𝙁`)
  .replace(/G/g, `𝙂`)
  .replace(/H/g, `𝙃`)
  .replace(/J/g, `𝙅`)
  .replace(/K/g, `𝙆`)
  .replace(/L/g, `𝙇`)
  .replace(/Z/g, `𝙕`)
  .replace(/X/g, `𝙓`)
  .replace(/C/g, `𝘾`)
  .replace(/V/g, `𝙑`)
  .replace(/B/g, `𝘽`)
  .replace(/N/g, `𝙉`)
  .replace(/M/g, `𝙈`)
  .replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, " ");
  var arr = text.replace("\n", ".").split("\n").filter(item => item.length != 0);
  var num = (arr.length/6)-1;
  var main = arr.slice(0,6);
  var extra = arr.splice(6);
  var msg = "";
  var mainlength = main.length;
  for(let i = 0; i < mainlength; i++) {
    var txt = main[i];
    for(let o = 0; o < num; o++) {
      txt += extra[i+(o*6)];
    }
    msg += txt+"\n";
  }
  return api.sendMessage(msg+""+"", event.threadID, event.messageID);
  }