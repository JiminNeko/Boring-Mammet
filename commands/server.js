const { RichEmbed } = require('discord.js');
module.exports = {
	name: 'server',
	description: 'Displays server information.',
	execute(message, args) {
		const embed = new RichEmbed()
      .setTitle(``)
      .setAuthor(`${message.guild.name}`,``,`https://discord.gg/U5ZHdUZ`)
      .setColor(0xFF0000)
      .setThumbnail(`${message.guild.iconURL}`)
      .addField(`Owner:`,`${message.guild.owner}`)
      .addField(`Created on:`, `${message.guild.createdAt}`)
      .addField(`Region:`,` ${message.guild.region}`)
      .addField(`Members:`, ` ${message.guild.memberCount}`);
    // Send the embed to the same channel as the message
    message.channel.send(embed);
	},
};