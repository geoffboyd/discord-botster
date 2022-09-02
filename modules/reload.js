module.exports = {
	name: 'reload',
	description: 'Reloads a command',
	args: true,
	execute(message, args, commandNames) {
		const secret = require("./secret.json");
		console.log(`Message Author ID: ${message.author.id}, Owner ID: ${secret.owner}`);
		if (message.author.id !== secret.owner) { return }
		if (!args[1]) { return message.channel.send("You didn't provide a command name to reload"); }
		const command = args[1].toLowerCase();

		if (!commandNames.includes(command)) {
			return message.channel.send(`There is no command with name or alias \`${command}\`, ${message.author.username}!`);
		}

		delete require.cache[require.resolve(`./${command}.js`)];

		try {
			const newCommand = require(`./${command}.js`);
			message.channel.send(`Command '${command}' was reloaded!`);
		} catch (error) {
			console.log(error);
			message.channel.send(`There was an error while reloading a command '${command}':\n\`${error.message}\``);
		}
	},
};
