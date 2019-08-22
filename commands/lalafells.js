    
const { Attachment } = require("discord.js");
const fs = require("fs");
module.exports = {
  name: "lalafells",
  description: "It's like aliens but lalafells",
  execute(message, args) {
    // Get the buffer from the 'file', assuming that the file exists
    const buffer = fs.readFileSync("./assets/images/lalafells.jpg");
    const attachment = new Attachment(buffer, "lalafells.jpg");
    // Send the attachment in the message channel with a content
    message.channel.send(attachment);
  }
};
