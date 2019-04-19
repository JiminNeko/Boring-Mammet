const { Attachment } = require("discord.js");
const fs = require("fs");
module.exports = {
  name: "senpai",
  description: "notice me senpai",
  execute(message, args) {
    // Get the buffer from the 'file', assuming that the file exists
    const buffer = fs.readFileSync("./assets/sound/touchmesenpai.mp3");
    const attachment = new Attachment(buffer, "touchmesenpai.mp3");
    // Send the attachment in the message channel with a content
    message.channel.send(attachment);
  }
};
