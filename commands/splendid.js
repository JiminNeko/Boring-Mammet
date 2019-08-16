const { Attachment } = require("discord.js");
const fs = require("fs");
module.exports = {
  name: "splendid",
  description: "Brochafaunt splendid",
  execute(message, args) {
    // Get the buffer from the 'file', assuming that the file exists
    const buffer = fs.readFileSync("./assets/images/splendid.png");
    const attachment = new Attachment(buffer, "splendid.png");
    // Send the attachment in the message channel with a content
    message.channel.send(attachment);
  }
};
