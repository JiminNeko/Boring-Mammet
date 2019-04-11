const { Attachment } = require('discord.js');
const fs = require('fs');
module.exports = {
	name: 'communist',
	description: 'Sounds like Communist propaganda.',
	execute(message, args) {
		 // Get the buffer from the 'file', assuming that the file exists
         const buffer = fs.readFileSync('./assets/images/communist.png');
         const attachment = new Attachment(buffer, 'communist.png');
         // Send the attachment in the message channel with a content
         message.channel.send(attachment);
    },
};