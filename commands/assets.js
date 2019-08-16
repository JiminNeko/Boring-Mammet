const { Attachment } = require("discord.js");
const fs = require("fs");
module.exports = {
  name: "assets",
  description: "assets",
  execute(message, args) {
    if (message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])){
    // Get the buffer from the 'file', assuming that the file exists
    const buffer = fs.readFileSync("./assets/downloads/cafe.zip");
    const attachment = new Attachment(buffer, "cafe.zip");
    // Send the attachment in the message channel with a content
    message.channel.send(attachment);
  } else message.channel.send("You do not have permission for this command.")}
};
