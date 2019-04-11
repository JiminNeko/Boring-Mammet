module.exports = {
  name: "kick",
  description: "Tag a member and kick them (but not really).",
  guildOnly: true,
  execute(message) {
    if (message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])){
      //Ban member mentioned
      if (!message.guild) return;
  
      // if the message content starts with "!ban"
      // Assuming we mention someone in the message, this will return the user
      // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
      const user = message.mentions.users.first();
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
          member
            .kick({
              reason: "They were bad!"
            })
            .then(() => {
              // We let the message author know we were able to ban the person
              message.reply(`Successfully kicked ${user.tag}`);
            })
            .catch(err => {
              // An error happened
              // This is generally due to the bot not being able to ban the member,
              // either due to missing permissions or role hierarchy
              message.reply("I was unable to ban the member");
              // Log the error
              console.error(err);
            });
        } else {
          // The mentioned user isn't in this guild
          message.reply("That user isn't in this guild!");
        }
      } else {
        // Otherwise, if no user was mentioned
        message.reply("You didn't mention the user to ban!");
      }
    }
    else {
      message.reply("You do not have permission to use this command.")
    }
  }
  };
  