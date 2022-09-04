module.exports = {
  name: 'restart',
  description: 'Restart bot',
  execute(msg, args) {
    const { owner } = require("./secret.json");
		if (msg.author.id !== owner) { return msg.reply("https://media.giphy.com/media/VdWkLbTcqmw324kYFL/giphy.gif") }
    process.exit();
  },
};
