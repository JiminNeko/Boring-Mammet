    
const { Attachment } = require("discord.js");
const fs = require("fs");
module.exports = {
  name: "Attacked",
  description: "I feel attacked!",
  execute(message, args) {
    // Get the buffer from the 'file', assuming that the file exists
    const buffer = fs.readFileSync("https://media1.tenor.com/images/b07b174865379ab42f1bd5599d490d38/tenor.gif");
    const attachment = new Attachment(buffer, "tenor.gif");
    // Send the attachment in the message channel with a content
    message.channel.send(attachment);
  }
};
