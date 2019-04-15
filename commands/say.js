module.exports = {
    name: "say",
    description: "Make the bot say something!",
    guildOnly: true,
    args: true,
    execute(message, args) {
      message.channel.send(`${args}`);
    }
  };
  