module.exports.config = {
    name: "in4",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Xem thông tin của người dùng facebook",
    commandCategory: "group",
    usages: "[reply/tag/id]",
    cooldowns: 3
    
};
module.exports.run = async({api,event,args}) => {
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
    const axios = global.nodemodule['axios'];  

    if(!args[0]){
    if(event.type == "message_reply") { uid = event.messageReply.senderID }
    else uid = event.senderID;
    const res = await axios.get(`https://simsimi.info/v2/info_user_facebook.php?api_key=leanhtruong&id=${uid}`);  
    var gender = res.data.gender == 'male' ? "Nam" : res.data.gender == 'female' ? "Nữ" : "Không công khai";
    var birthday = res.data.birthday ? `${res.data.birthday}` : "Không công khai";
    var love = res.data.user_love ? `${res.data.user_love}` : "Chưa kết hôn"
    var location = res.data.location ? `${res.data.location}` : "Không công khai"
    var url = res.data.url_profile ? `${res.data.url_profile}` : "nịt"
    var callback = () => api.sendMessage({body:`🌻Tên: ${res.data.fullname}\n🌻UID: ${uid}\n🌻Follow: ${res.data.follow_user}\n🌻Giới tính: ${gender}\n🌻Birthday: ${birthday}\n🌻Kết hôn: ${love}\n🌻Location: ${location}\n🌻Url:${res.data.url_profile}`,
        attachment: fs.createReadStream(__dirname + "/cache/i4.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/i4.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${uid}/picture?height=1500&width=1500&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`)).pipe(fs.createWriteStream(__dirname+'/cache/i4.png')).on('close',
        () => callback());
   }
    else {
    if (args.join().indexOf('@') !== -1){
    var mentions = Object.keys(event.mentions)
    const res = await axios.get(`https://simsimi.info/v2/info_user_facebook.php?api_key=leanhtruong&id=${mentions}`);  
    var gender = res.data.gender == 'male' ? "Nam" : res.data.gender == 'female' ? "Nữ" : "Không công khai";
    var birthday = res.data.birthday ? `${res.data.birthday}` : "Không công khai";
    var love = res.data.user_love ? `${res.data.user_love}` : "Chưa kết hôn"
    var location = res.data.location ? `${res.data.location}` : "Không công khai"
    var url = res.data.url_profile ? `${res.data.url_profile}` : "nịt"
    var callback = () => api.sendMessage({body:`🌻Tên: ${res.data.fullname}\n🌻UID: ${uid}\n🌻Follow: ${res.data.follow_user}\n🌻Giới tính: ${gender}\n🌻Birthday: ${birthday}\n🌻Kết hôn: ${love}\n🌻Location: ${location}\n🌻Url:${res.data.url_profile}`,
        attachment: fs.createReadStream(__dirname + "/cache/i4.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/i4.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${mentions}/picture?height=1500&width=1500&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`)).pipe(fs.createWriteStream(__dirname+'/cache/i4.png')).on('close',
        () => callback());
    }
    else {
    const res = await axios.get(`https://simsimi.info/v2/info_user_facebook.php?api_key=leanhtruong&id=${args[0]}`);  
    var gender = res.data.gender == 'male' ? "Nam" : res.data.gender == 'female' ? "Nữ" : "Không công khai";
    var birthday = res.data.birthday ? `${res.data.birthday}` : "Không công khai";
    var love = res.data.user_love ? `${res.data.user_love}` : "Chưa kết hôn"
    var location = res.data.location ? `${res.data.location}` : "Không công khai"
    var url = res.data.url_profile ? `${res.data.url_profile}` : "nịt"
    var callback = () => api.sendMessage({body:`🌻Tên: ${res.data.fullname}\n🌻UID: ${uid}\n🌻Follow: ${res.data.follow_user}\n🌻Giới tính: ${gender}\n🌻Birthday: ${birthday}\n🌻Kết hôn: ${love}\n🌻Location: ${location}\n🌻Url:${res.data.url_profile}`,
        attachment: fs.createReadStream(__dirname + "/cache/i4.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/i4.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${args[0]}/picture?height=1500&width=1500&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`)).pipe(fs.createWriteStream(__dirname+'/cache/i4.png')).on('close',
        () => callback());
    }
  }
}