const { Attachment } = require("discord.js");
const fs = require("fs");
module.exports = {
  name: "racist",
  description: "THAT'S RACIST",
  execute(message, args) {
    // Get the buffer from the 'file', assuming that the file exists
    const buffer = fs.readFileSync("./assets/images/2K8PMTx.gif");
    const attachment = new Attachment(buffer, "2K8PMTx.gif");
    // Send the attachment in the message channel with a content
    message.channel.send(attachment);
  }
};
