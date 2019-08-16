const { Attachment } = require("discord.js");
const fs = require("fs");
module.exports = {
  name: "creep",
  description: "creep",
  execute(message, args) {
    // Get the buffer from the 'file', assuming that the file exists
    const buffer = fs.readFileSync("./assets/images/creep.png");
    const attachment = new Attachment(buffer, "creep.png");
    // Send the attachment in the message channel with a content
    message.channel.send(attachment);
  }
};
