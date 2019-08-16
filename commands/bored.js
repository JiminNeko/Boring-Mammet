const { Attachment } = require("discord.js");
const fs = require("fs");
module.exports = {
  name: "bored",
  description: "fatcat bored",
  execute(message, args) {
    // Get the buffer from the 'file', assuming that the file exists
    const buffer = fs.readFileSync("./assets/images/fatcatbored.png");
    const attachment = new Attachment(buffer, "fatcatbored.png");
    // Send the attachment in the message channel with a content
    message.channel.send(attachment);
  }
};
