    
const { Attachment } = require("discord.js");
const fs = require("fs");
module.exports = {
  name: "bruh",
  description: "This really do be a bruhmoment.",
  execute(message, args) {
    // Get the buffer from the 'file', assuming that the file exists
    const buffer = fs.readFileSync("./assets/images/bruh.gif");
    const attachment = new Attachment(buffer, "bruh.gif");
    // Send the attachment in the message channel with a content
    message.channel.send(attachment);
  }
};
