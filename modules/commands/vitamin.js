module.exports.config = {
	name: "vitamin",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Minh Vu",
	description: "vitamin",
	commandCategory: "random-img",
	usages: "vitamin",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('hhttps://api.leanhtruong.net/v2/image.php?api_key=leanhtruong&image=vitamin').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/vitamin.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/vitamin.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/vitamin.${ext}`)).on("close", callback);
			})
}