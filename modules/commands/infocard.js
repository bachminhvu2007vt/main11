const fonts = "/cache/Play-Bold.ttf"
const downfonts = "https://drive.google.com/u/0/uc?id=1uni8AiYk7prdrC7hgAmezaGTMH5R8gW8&export=download"
const fontsLink = 20
const fontsInfo = 28
const colorName = "#00FF00"
module.exports.config = {
  name: "infocard",
  ver: "1.0.0",
  role: 0,
  author: "Lawer Team - chinhlle",
  description: "Xem info",
  location: __filename,
  timestamps: 1
}
};
module.exports.circle = async (image) => {
const jimp = require('jimp');
image = await jimp.read(image);
image.circle();
return await image.getBufferAsync("image/png");
}
module.exports.onMessage = async function({ api, event, args, Users }) {
if ((this.config.author) != "Lawer Team - chinhlle") { return api.sendMessage(`Phát hiện credits đã bị thay đổi`, event.threadID, event.messageID) }
let { senderID, threadID, messageID } = event;    
    const { loadImage, createCanvas } = require("canvas");
    const request = require('request');
    const fs = require("fs-extra");
    const axios = require("axios");
    const Canvas = require("canvas");

    let pathImg = __dirname + `/cache/${senderID}123${threadID}.png`;
    let pathAvata = __dirname + `/cache/avtuserrd.png`;
    /*                 */
    if (event.type == "message_reply") {
      uid = event.messageReply.senderID
    } else 
    var uid = event.senderID;
    const res = await axios.get(`https://api.leanhtruong.net/v2/info_user_facebook.php?api_key=leanhtruong&id=${uid}`);
    let getAvatarOne = (await axios.get(`https://graph.facebook.com/${uid}/picture?height=720&width=720&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`, {
        responseType: 'arraybuffer'
      }))
      .data;
    let bg = (await axios.get(encodeURI(`https://i.imgur.com/fBgFUr8.png`), {
        responseType: "arraybuffer",
      }))
      .data;
    fs.writeFileSync(pathAvata, Buffer.from(getAvatarOne, 'utf-8'));
    var avataruser = await this.circle(pathAvata);
    fs.writeFileSync(pathImg, Buffer.from(bg, "utf-8"));
    /*-----------------download----------------------*/
    if (!fs.existsSync(__dirname + `${fonts}`)) {
      let getfont = (await axios.get(`${downfonts}`, {
          responseType: "arraybuffer"
        }))
        .data;
      fs.writeFileSync(__dirname + `${fonts}`, Buffer.from(getfont, "utf-8"));
    };
    /*---------------------------------------------*/
    let baseImage = await loadImage(pathImg);
    let baseAvata = await loadImage(avataruser);
    let canvas = createCanvas(baseImage.width, baseImage.height);
    let ctx = canvas.getContext("2d");
    ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(baseAvata, 80, 73, 285, 285);
    var gender = res.data.gender == 'male' ? "Nam" : res.data.gender == 'female' ? "Nữ" : "Không công khai";
    var birthday = res.data.birthday ? `${res.data.birthday}` : "Không công khai";
    var love = res.data.user_love ? `${res.data.user_love}` : "Không công khai"
    var location = res.data.location ? `${res.data.location}` : "Không công khai"
    Canvas.registerFont(__dirname + `${fonts}`, {
      family: "Play-Bold"
    });
    ctx.font = `${fontsInfo}px Play-Bold`;
    ctx.fillStyle = "#ffff";
    ctx.textAlign = "start";
       var fontSize = 20;
    ctx.fillText(`» Name: ${res.data.fullname}`, 455, 172);
    ctx.fillText(`» Sex: ${gender}`, 455, 208);
    ctx.fillText(`» Follow: ${res.data.follow_user}`, 455, 244);
    ctx.fillText(`» Relationship: ${love}`, 455, 281);
    ctx.fillText(`» Birthday: ${birthday}`, 455, 320);
    ctx.fillText(`» Location: ${location}`, 455, 357);
    ctx.fillText(`» UID: ${uid}`, 455, 397);
    ctx.font = `${fontsLink}px Play-Bold`;
    ctx.fillStyle = "#ffff";
    ctx.textAlign = "start";
    fontSize = 20;
    ctx.fillText(`» Profile: ${res.data.url_profile}`, 19, 468);
    ctx.beginPath();
    const imageBuffer = canvas.toBuffer();
    fs.writeFileSync(pathImg, imageBuffer);
    fs.removeSync(pathAvata);
    return api.sendMessage({
        attachment: fs.createReadStream(pathImg)
      }, threadID,
      () => fs.unlinkSync(pathImg), messageID);
  );
};