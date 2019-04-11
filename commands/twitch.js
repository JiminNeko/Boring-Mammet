const { RichEmbed } = require("discord.js");
module.exports = {
  name: "twitch",
  description: "Displays Arc's Twitch information",
  execute(message, args) {
    const embed = new RichEmbed()
      .setTitle("Twitch")
      .setAuthor("Arcane Disgea")
      .setColor(0xff0000)
      .setDescription(
        "Hello, you can find my twitch [here](https://twitch.tv/arcanedisgea)!"
      )
      .setURL("https://twitch.tv/arcanedisgea");
    // Send the embed to the same channel as the message
    message.channel.send(embed);
  }
};
