    
const { Attachment } = require("discord.js");
const fs = require("fs");
module.exports = {
  name: "attacked",
  description: "I feel attacked!",
  execute(message, args) {
    // Get the buffer from the 'file', assuming that the file exists
    const buffer = fs.readFileSync("./assets/images/attacked.gif");
    const attachment = new Attachment(buffer, "attacked.gif");
    // Send the attachment in the message channel with a content
    message.channel.send(attachment);
  }
};
