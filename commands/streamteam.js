const { RichEmbed } = require('discord.js');
module.exports = {
	name: 'streamteam',
	description: 'Displays members of my streamteam.',
	execute(message, args) {
            //hikki
            const embed = new RichEmbed()
              .setTitle('twitch.tv/nekomancertv')
              .setAuthor('NekomancerTV',``,`https://twitch.tv/nekomancertv`)
              .setColor(0xFF0000)
              .setDescription('Hi, I\'m Alex, but everyone around here calls me Neko! I\'m a JRPG/RPG focused streamer based out of New York. I stream with the goal of having fun, connecting with like-minded people, creating a safe and inclusive space for all, and supporting others with the same dream. I\'m currently working my way towards partnership now, but am determined to make streaming my full time career in the future. I\'m also proud to be a raid leader and rep for [Twitch Kittens](https://discord.gg/twitchkittens). Apart from gaming, I also love chilling with my girlfriend, cuddling with my husky, craving Japanese food, and making friends in other streams.')
              .setURL('https://twitch.tv/nekomancertv')
              .setThumbnail('https://static-cdn.jtvnw.net/jtv_user_pictures/panel-158731548-image-fb7dd501-746f-4bd6-866f-75f2784136c8');
            message.channel.send(embed);
            //reynic
            const embed2 = new RichEmbed()
              .setTitle('twitch.tv/reynic')
              .setAuthor('Reynic Silverwynd',``,`https://twitch.tv/reynic`)
              .setColor(0xFF0000)
              .setDescription('My name is Reynic, and I have been streaming on Twitch since October 2018. I consider myself a "community streamer" who enjoys playing many different games from several different genres. If there\'s fun to be had, I\'ll play it! I have been gaming since the mid-1980s on the Atari 2600. I grew up a Sega kid (Master System and Genesis), moved briefly to the Nintendo 64, then to the PlayStation 1 and 2, a vacation with the XBOX 360 before the PlayStation 4 and the Nintendo Switch. In 1999, I discovered EverQuest and became a primarily PC gamer. EQ and World of Warcraft have dominated my playtime in the past several years. I am 38 years old and live in Michigan, USA. I am happily married for 15 years and have 2 kids, 2 cats and a dog. When not gaming, I enjoy sports, wrestling, and playing the violin.')
              .setURL('https://twitch.tv/reynic')
              .setThumbnail('https://static-cdn.jtvnw.net/jtv_user_pictures/b189b2e7-c67f-4be2-96a6-3d68efb07cf2-profile_image-70x70.png');
              message.channel.send(embed2);
              //layrenna
            const embed3 = new RichEmbed()
              .setTitle('twitch.tv/layrenna')
              .setAuthor('Layrenna Silverwynd',``,`https://twitch.tv/layrenna`)
              .setColor(0xFF0000)
              .setDescription('\'Ello all! Layrenna here and welcome to my channel. I classify myself as a crafter/gamer. I enjoy crafting a variety of things, but more often than not, you will see a Steampunk theme in my crafting. I do enjoy Celtic and Gaelic styles, too. I am just starting up with streaming and can\'t wait to entertain all y\'all. Outside of crafting, I teach full time, am a mother of 2 great kids \(Professor Oak and LilRed, as we like to call them), have an amazing hubby, 2 old cats and 1 crazy German Shepard. So, don\'t be shocked if at any random time you happen to see a furry body or hear the song of the German Shepard "people".')
              .setURL('https://twitch.tv/layrenna')
              .setThumbnail('https://static-cdn.jtvnw.net/jtv_user_pictures/96581880-013b-43e6-8510-05b53b2531d1-profile_image-70x70.jpg');
            message.channel.send(embed3);
            //kitty
            const embed4 = new RichEmbed()
              .setTitle('twitch.tv/hashtaghealer')
              .setAuthor('Kitty AKA hashtagHEALER',``,`https://twitch.tv/hashtaghealer`)
              .setColor(0xFF0000)
              .setDescription('Kitty, 30+, tea-fueled, non-binary / genderqueer [they/them or she/her], disabled / autistic [please be patient when conversing with me. my brain\'s RAM is faulty. :P], Engaged, a thirsty cowboy fucker')
              .setURL('https://twitch.tv/hashtaghealer')
              .setThumbnail('https://static-cdn.jtvnw.net/jtv_user_pictures/169a5482-6bb4-42a5-b55a-8b263aba30c5-profile_image-70x70.png');
            message.channel.send(embed4);
            //orchios
            const embed5 = new RichEmbed()
              .setTitle('twitch.tv/orchios')
              .setAuthor('Orchios',``,`https://twitch.tv/orchios`)
              .setColor(0xFF0000)
              .setDescription('I currently am Chemistry PhD student in my last year of study looking to take a break from the daily grind by streaming games I enjoy and playing with some friends along the way.')
              .setURL('https://twitch.tv/orchios')
              .setThumbnail('https://static-cdn.jtvnw.net/jtv_user_pictures/382aace9-3139-49e7-8997-f76a1f384bb0-profile_image-70x70.png');
            message.channel.send(embed5);
          },
	};