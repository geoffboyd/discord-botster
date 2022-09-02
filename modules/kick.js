module.exports = {
	name: 'kick',
	description: 'Tag a member and kick them.',
	guildOnly: true,
	execute(msg) {
		const taggedUser = msg.mentions.users.first();
		if (msg.member.permissions.has('KICK_MEMBERS')) {
			if (!taggedUser) { return msg.reply('you need to tag a user in order to kick them!'); }
			try {
				taggedUser.kick();
				return msg.channel.send(`Byeeeeeee ${msg.mentions.members.first().username}, you just got kicked`);
			} catch (e) {
				return msg.reply("https://media.giphy.com/media/VdWkLbTcqmw324kYFL/giphy.gif");
			}
		}
	},
};
