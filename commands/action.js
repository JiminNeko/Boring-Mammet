const { RichEmbed } = require("discord.js");
const fetch = require("node-fetch");

const xivsearch = "https://xivapi.com/search?string=";

module.exports = {
  name: "action",
  description: "Displays an actions FFXIV Info.",
  guildOnly: true,
  args: true,
  execute(message, args) {
    fetch(
      xivsearch +
        args +
        `&string_algo=match&limit=1&indexes=Action,CraftAction&filters=IsPlayerAction=1,IsPvP=0&columns=ID,Name,Icon,ClassJobCategory.Name,Description,ActionCategory,ClassJob.Icon,IsPlayerAction`
    )
      .then(resp => resp.json())
      .then(function(search) {
        let action = search.Results;
        return action.map(function(actions) {
          const embed = new RichEmbed()
            .setAuthor(`${actions.Name}`, ``, `https://xivapi.com`)
            .setDescription(`${actions.Description}`.replace("/(?:<.?span.*?>)+", ""))
            .setThumbnail(`https://xivapi.com${actions.Icon}`)
            .setFooter("brought to you by[xivapi.com](https://xivapi.com)");
            message.channel.send(embed);
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
