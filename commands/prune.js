module.exports = {
  name: "prune",
  description: "Prune up to 99 messages.",
  execute(message, args) {
    if (message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])){
    const amount = parseInt(args[0]) + 1;

    if (isNaN(amount)) {
      return message.reply("that doesn't seem to be a valid number.");
    } else if (amount <= 1 || amount > 100) {
      return message.reply("you need to input a number between 1 and 99.");
    }

    message.channel.bulkDelete(amount, true).catch(err => {
      console.error(err);
      message.channel.send(
        "there was an error trying to prune messages in this channel!"
      );
    });
    message.channel.send("Pruned" + ` ${amount} ` + "messages.");
    message.channel.bulkDelete(1);
  }
  else {
    message.reply("You do not have permission to use this command.")
  }
}
};
