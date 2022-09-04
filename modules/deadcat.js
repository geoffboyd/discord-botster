// This is here for a friend that knows exactly why it's here, and why only he and I were allowed to use it.
// Edit secret.json so it includes your discord ID and the ID of someone you know that likes silly pranks.

const { user } = require("../config/secret.json");
const { owner } = require("../config/config.json");

module.exports = {
  name: 'deadcat',
  description: 'It\'s a dead cat...',
  execute(msg, args) {
    const secret = require("../config/secret.json");
    if (msg.author.id == user || msg.author.id == owner) {
      msg.channel.send("https://www.socialsciencespace.com/wp-content/uploads/1667951349-dead-cat-clipart-1_opt.jpg")
	  .then(msg => {
        setTimeout(() => msg.delete(), 2000);
      })
    }
    return;
  },
};
