module.exports = {
  name: 'rr',
  description: 'Rick Roll someone',
  adminOnly: false,
  visible: true,
  execute(msg, args) {
    args.shift();
    msg.delete();
    if (args[0]) {
      msg.channel.send('Hey ' + args[0] + ', https://rb.gy/3ekq1k');
    } else {
      msg.channel.send('https://rb.gy/3ekq1k');
    }
  },
};
