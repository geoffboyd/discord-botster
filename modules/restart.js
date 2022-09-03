module.exports = {
  name: 'restart',
  description: 'Restart bot',
  execute(msg, args) {
    const { owner } = require("./secret.json");
		if (!msg.author.id == owner) { return }
    process.exit();
  },
};
