const { Attachment } = require('discord.js');
const fs = require('fs');
module.exports = {
	name: 'gay',
	description: 'Ayy das pretty gay.',
	execute(message, args) {
		 // Get the buffer from the 'file', assuming that the file exists
         const buffer = fs.readFileSync('./assets/sound/ay_das_gay.mp3');
         const attachment = new Attachment(buffer, 'ay_das_gay.mp3');
         // Send the attachment in the message channel with a content
         message.channel.send(attachment);
     },
};