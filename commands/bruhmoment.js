    
const { Attachment } = require("discord.js");
const fs = require("fs");
module.exports = {
  name: "bruhmoment",
  description: "This really do be a bruhmoment.",
  execute(message, args) {
    // Get the buffer from the 'file', assuming that the file exists
    const buffer = fs.readFileSync("./assets/images/bruhmoment.png");
    const attachment = new Attachment(buffer, "bruhmoment.png");
    // Send the attachment in the message channel with a content
    message.channel.send(attachment);
  }
};
