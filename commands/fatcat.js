const { Attachment } = require("discord.js");
const fs = require("fs");
module.exports = {
  name: "fatcat",
  description: "Fatcat does a roll.",
  execute(message, args) {
    // Get the buffer from the 'file', assuming that the file exists
    const buffer = fs.readFileSync("./assets/images/fatcat.gif");
    const attachment = new Attachment(buffer, "fatcat.gif");
    // Send the attachment in the message channel with a content
    message.channel.send(attachment);
  }
};
