const { Attachment } = require("discord.js");
const fs = require("fs");
module.exports = {
  name: "welcomeback",
  description: "Brochafaunt welcomeback",
  execute(message, args) {
    // Get the buffer from the 'file', assuming that the file exists
    const buffer = fs.readFileSync("./assets/images/welcome_back.png");
    const attachment = new Attachment(buffer, "welcome_back.png");
    // Send the attachment in the message channel with a content
    message.channel.send(attachment);
  }
};
