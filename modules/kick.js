module.exports = {
	name: 'kick',
	description: 'Tag a member and kick them.',
	guildOnly: true,
	execute(message) {
		const taggedUser = message.mentions.users.first();
		if (message.member.permissions.has('KICK_MEMBERS')) {
			if (!taggedUser) { return message.reply('you need to tag a user in order to kick them!'); }
			try {
				taggedUser.kick();
				return message.channel.send(`Byeeeeeee ${message.mentions.members.first().username}, you just got kicked`);
			} catch (e) {
				return message.reply("https://media.giphy.com/media/VdWkLbTcqmw324kYFL/giphy.gif");
			}
		}
	},
};
