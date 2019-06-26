module.exports = {
    name: "maint",
    description: "Maintenance Check for FFXIV",
    cooldown: 5,
    execute(message, args) {
      message.channel.send("The servers go down when they go down and will be up when they are up ya ding dong.");
    }
  };
  