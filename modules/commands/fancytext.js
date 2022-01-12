module.exports.config = {
    name: "fancytext",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Minh Vu",//dựa trên demo Drasew
    description: "chuyển đổi font chữ",
    commandCategory: "game",
    usages: "tnytext <nội dung>",
    cooldowns: 5
  };
  
  module.exports.run = async ({ event, api, args }) => {
   var text = args.join("");
       text = text;
         text = text.replace(/ /g, ` `)
  .replace(/a/g, `𝖆`)
  .replace(/b/g, `𝖇`)
  .replace(/c/g, `𝖈`)
  .replace(/d/g, `𝖉`)
  .replace(/e/g, `𝖊`)
  .replace(/f/g, `𝖋`)
  .replace(/g/g, `𝖌`)
  .replace(/h/g, `𝖍`)
  .replace(/i/g, `𝖎`)
  .replace(/j/g, `𝖏`)
  .replace(/k/g, `𝖐`)
  .replace(/l/g, `𝖑`)
  .replace(/m/g, `𝖒`)
  .replace(/n/g, `𝖓`)
  .replace(/o/g, `𝖔`)
  .replace(/p/g, `𝖕`)
  .replace(/q/g, `𝖖`)
  .replace(/r/g, `𝖗`)
  .replace(/s/g, `𝖘`)
  .replace(/t/g, `𝖙`)
  .replace(/u/g, `𝖚`)
  .replace(/v/g, `𝖛`)
  .replace(/x/g, `𝖝`)
  .replace(/y/g, `𝖞`)
  .replace(/w/g, `𝖜`)
  .replace(/z/g, `𝖟`)
  .replace(/Q/g, `𝕼`)
  .replace(/W/g, `𝖂`)
  .replace(/E/g, `𝕰`)
  .replace(/R/g, `𝕽`)
  .replace(/T/g, `𝕿`)
  .replace(/Y/g, `𝖄`)
  .replace(/U/g, `𝖀`)
  .replace(/I/g, `𝕴`)
  .replace(/O/g, `𝕺`)
  .replace(/P/g, `𝕻`)
  .replace(/A/g, `𝕬`)
  .replace(/S/g, `𝕾`)
  .replace(/D/g, `𝕯`)
  .replace(/F/g, `𝕱`)
  .replace(/G/g, `𝕲`)
  .replace(/H/g, `𝕳`)
  .replace(/J/g, `𝕵`)
  .replace(/K/g, `𝕶`)
  .replace(/L/g, `𝕷`)
  .replace(/Z/g, `𝖅`)
  .replace(/X/g, `𝖃`)
  .replace(/C/g, `𝕮`)
  .replace(/V/g, `𝖁`)
  .replace(/B/g, `𝕭`)
  .replace(/N/g, `𝕹`)
  .replace(/M/g, `𝕸`)
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