module.exports = {
    name: "stop",
    description: "Stops all music and removes bot from voice channel.",
    guildOnly: true,
    execute(message, args) {
        const { voiceChannel } = message.member;
             voiceChannel.leave();
            }
        }