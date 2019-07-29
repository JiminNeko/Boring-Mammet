module.exports = {
  name: "action",
  description: "Displays an actions FFXIV Info.",
  guildOnly: true,
  args: true,
  execute(message, args) {
    const div = document.getElementById("search-results");
    const xivsearch = "https://xivapi.com/search?string=";

    var input = document.getElementById("searchbar");
    input.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("search-results").innerHTML = "";
        document.getElementById("searchbtn").click();
      }
    });

    function search_action() {
      let input = document.getElementById("searchbar").value;
      input = input.toLowerCase();

      fetch(
        xivsearch +
          input +
          `&string_algo=match&limit=1&indexes=Action,CraftAction&filters=IsPlayerAction=1,IsPvP=0&columns=ID,Name,Icon,ClassJobCategory.Name,Description,ActionCategory,ClassJob.Icon,IsPlayerAction`
      )
        .then(resp => resp.json())
        .then(function(search) {
          let action = search.Results;
          return action.map(function(actions) {
            Channel.message.send(`${actions.Name}`)
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
