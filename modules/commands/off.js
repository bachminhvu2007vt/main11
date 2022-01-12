module.exports.config = {
	name: "offbot",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "HTHB",
	description: "Tắt Bot.",
	commandCategory: "Admin",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("Bye Bitch ✅",event.threadID, () =>process.exit(0))