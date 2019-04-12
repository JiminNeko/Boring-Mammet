module.exports = {
    name: "butttouch",
    description: "Touch the butt",
    guildOnly: true,
    args: true,
    execute(message, args) {
      message.channel.send(`${message.author} touches ${args}\'s butt. <a:rainbowtwerk:533336653754793995>`);
    }
  };
  