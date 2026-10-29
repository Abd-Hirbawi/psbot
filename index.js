const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

const Discord = require("discord.js");
const client = new Discord.Client({
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES
  ],
});

const ms = require("ms");
const moment = require("moment");
const fs = require('fs');
const { Client, RichEmbed, Collection } = require("discord.js");
const { MessageEmbed, Util, Permissions, MessageAttachment } = require("discord.js");
const { MessageSelectMenu, MessageActionRow, MessageButton } = require('discord.js');
const keepAlive = require('./24.js');
keepAlive();


client.login("ODIzNTA2NDc4MDAyNDcwOTIz.Gdnr6A.cO7UDTLfRa1Km8UlxjamX2zRSmpcKuKg0k47zs")



process.on("unhandledRejection", error => {
  return console.log(error)
});


////////
const name = ["Abd#5061"]
const dev = ["674212054684401672"]

client.on("ready", () => {
  console.log(`
-My Name: ${client.user.username}
-My ID: ${client.user.id}
-My Server ${client.guilds.cache.size}
-My Member ${client.users.cache.size}
-My Developer: ${name}
-My Developer ID: ${dev} 
-My Prefix: ${process.env.prefix}
Enjoy :) `)
});
///////////////////////


//////// Activity Bot
client.on("ready", async () => {
  console.log(``)
  await client.user.setActivity(`/help`, {
    type: "PLAYING",
  })
});
////////////////////////


client.on("messageCreate", async message => {
  if (!message.guild) return;
  if (message.author.bot || message.channel.type === "dm") return;
  if (message.author.id === client.user.id) return;
  if (message.channel.type == "dm") return;
  if (!prefixes[message.guild.id])
    prefixes[message.guild.id] = {
      prefix: process.env.prefix
    };
  if (!prefixes[message.guild.id])
    prefixes[message.guild.id] = {
      prefix: process.env.prefix
    };

  var prefix = prefixes[message.guild.id].prefix;
  if (message.content.toLowerCase().startsWith(prefix + "user")) {
    if (message.author.bot) return;
    let args = message.content.split(' ')
    var memberr = message.mentions.members.first() || message.guild.members.cache.get() || message.member;
    var member = message.mentions.users.first() || client.users.cache.get(message.content.split(' ')[1]) || message.author
    let user = message.mentions.users.first() || message.author || message.guild.member.cache.get(args[1]);
    const roles = memberr.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString())
    var embed = new MessageEmbed()
      .setColor('515abd')
      .setThumbnail(user.displayAvatarURL({ dynamic: true }))
      .addField("Name", `\`${user.tag}\``, true)
      .addField("ID", `\`${user.id}\``, true)
      .addField("Avatar", `[Click Here](${user.displayAvatarURL({ dynamic: true })})`, true)
      .addField("Join discord at", `${moment(user.createdAt).format('YYYY/M/D')} \n${moment(user.createdAt).format('LTS')}\n\`${moment(user.createdAt, "YYYYMMDD").fromNow()}\``, true)
      .addField("Join server at", `${moment(memberr.joinedAt).format('YYYY/M/D')} \n${moment(memberr.joinedAt).format('LTS')}\n\`${moment(memberr.joinedAt, "YYYYMMDD").fromNow()}\``, true)
      .setTimestamp()
      .setFooter(`${message.author.username}`, message.author.avatarURL({ dynamic: true }))
    message.reply({ embeds: [embed] })
  }
});




client.on("messageCreate", async message => {
  if (!message.guild) return;
  if (message.author.bot || message.channel.type === "dm") return;
  if (message.author.id === client.user.id) return;
  if (message.channel.type == "dm") return;
  if (!prefixes[message.guild.id])
    prefixes[message.guild.id] = {
      prefix: process.env.prefix
    };
  if (!prefixes[message.guild.id])
    prefixes[message.guild.id] = {
      prefix: process.env.prefix
    };

  var prefix = prefixes[message.guild.id].prefix;
  if (message.content.toLowerCase().startsWith(prefix + "server")) {
    if (message.author.bot) return;
    let args = message.content.split(' ')
    const user = message.mentions.users.first() || client.users.cache.get(args[1]) || message.author;
    const chs = message.guild.channels.cache.size
    const avaibles = message.guild.features.map(features => features.toString()).join("\n")
    const roles = message.guild.roles.cache.size
    const boosts = message.guild.premiumSubscriptionCount
    const level = message.guild.premiumTier === 0 ? "No Level" : `${message.guild.premiumTier}`

    var embed = new MessageEmbed()

      //    .addField("Owned by", `${message.guild.owner}`, true)
      .addField("Server ID", `${message.guild.id}`, true)
      .addField("Created On", `${moment(message.guild.createdAt).format('YYYY/MM/DD')}` + `\n\`${moment(message.guild.createdAt, "YYYYMMDD").fromNow()}\``, true)
      .addField(`Members`, `${message.guild.memberCount}`, true)
      .addField("Verification Level", `${message.guild.verificationLevel}`, true)
      .addField("Roles", `${message.guild.roles.cache.size}`, true)
      //    .addField("Emojis", `${message.guild.emojis.cache.size}`, true)
      .addField("Boost", `${message.guild.premiumSubscriptionCount}/14`, true)
      .setColor(`515abd`)
      .setTitle(`**${message.guild.name}**`)
      .setThumbnail(message.guild.iconURL()).setColor("2f3136")
      .setTimestamp()
      .setFooter(`Request By: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }));
    message.reply({ embeds: [embed] })
  }
});





client.on("messageCreate", message => {
  if (!message.guild) return;
  if (message.author.bot || message.channel.type === "dm") return;
  if (message.author.id === client.user.id) return;
  if (message.channel.type == "dm") return;
  if (!prefixes[message.guild.id])
    prefixes[message.guild.id] = {
      prefix: process.env.prefix
    };
  if (!prefixes[message.guild.id])
    prefixes[message.guild.id] = {
      prefix: process.env.prefix
    };

  var prefix = prefixes[message.guild.id].prefix;
  if (message.content.toLowerCase().startsWith(prefix + "avatar")) {
    let user = message.mentions.members.first() || message.guild.members.cache.get(message.content.split(' ')[1]) || message.member;

    var embed = new MessageEmbed()
      .setTitle('Avatar Link')
      .setURL(user.user.avatarURL({ dynamic: true, size: 512 }))
      .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
      .setImage((user.user.avatarURL({ dynamic: true, size: 512 })))
      .setColor(`515abd`)
      .setTimestamp()
      .setFooter(`Request By: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }));
    message.reply({ embeds: [embed] });
  }
});



client.on("messageCreate", message => {
  if (!message.guild) return;
  if (message.author.bot || message.channel.type === "dm") return;
  if (message.author.id === client.user.id) return;
  if (message.channel.type == "dm") return;
  if (!prefixes[message.guild.id])
    prefixes[message.guild.id] = {
      prefix: process.env.prefix
    };
  if (!prefixes[message.guild.id])
    prefixes[message.guild.id] = {
      prefix: process.env.prefix
    };

  var prefix = prefixes[message.guild.id].prefix;
  if (message.content.indexOf(prefix) !== 0) return;
  let args = message.content.split(" ").slice(1);
  if (message.content.toLowerCase().startsWith(prefix + "roles")) {
    let roles = message.guild.roles.cache.filter(r => r.name != '@everyone').sort((a, b) => a.id - b.id).map(r => {
      if (r.name.length < 22) {
        return `${r.name + Array(22 - (r.name.length)).map(a => ' ').join(' ') + r.members.size} members`
      }
      else {
        return `${r.name + '  ' + r.members.size} members`
      }
    })
    var embed = new MessageEmbed()
      .setAuthor(`${message.guild.name}`, message.guild.iconURL({ dynamic: true }))
      .setDescription(roles.join('\n'), { split: true, code: true })
      .setColor(`515abd`)
      .setTimestamp()
      .setFooter(`Request By: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }));
    message.reply({ embeds: [embed] })
  }
})




client.on("messageCreate", async message => {
  if (!message.guild) return;
  if (message.author.bot || message.channel.type === "dm") return;
  if (message.author.id === client.user.id) return;
  if (message.channel.type == "dm") return;
  if (!prefixes[message.guild.id])
    prefixes[message.guild.id] = {
      prefix: process.env.prefix
    };
  if (!prefixes[message.guild.id])
    prefixes[message.guild.id] = {
      prefix: process.env.prefix
    };

  var prefix = prefixes[message.guild.id].prefix;
  if (message.content.toLowerCase().startsWith(prefix + 'ping')) {
    if (message.author.bot) return;
    let args = message.content.split(' ')

    var embed = new MessageEmbed()
      .setColor(`515dbd`)
      .setDescription(`**Time Taken:** \`\`${new Date - message.createdTimestamp}ms\`\`
**WebSocket:** \`\`${(client.ws.ping)}ms\`\``)
      .setTimestamp()
    //.setFooter(`Request By: ${message.author.tag}`,message.author.displayAvatarURL({dynamic:true}));
    message.reply({ embeds: [embed] })
  }
});



client.on("messageCreate", message => {
  if (!message.guild) return;
  if (message.author.bot || message.channel.type === 'dm') return;
  if (message.author.id === client.user.id) return;
  if (message.channel.type == "dm") return;
  if (!prefixes[message.guild.id])
    prefixes[message.guild.id] = {
      prefix: process.env.prefix
    };
  if (!prefixes[message.guild.id])
    prefixes[message.guild.id] = {
      prefix: process.env.prefix
    };

  var prefix = prefixes[message.guild.id].prefix;
  if (message.content.toLowerCase().startsWith(prefix + 'invite')) {
    message.react(`✅`)
    var embed = new MessageEmbed()
      .setColor(`515dbd`)
      .setTitle(`Invite Links`)
      .setDescription(`
[Add To Your Server](https://discord.com/oauth2/authorize?client_id=823506478002470923&permissions=8&scope=applications.commands%20bot)
[Support Server](https://discord.gg/GjyWYqS6mD)
[Vote Bot](https://top.gg/bot/823506478002470923)
`)

    message.author.send({ embeds: [embed] }).catch(error => message.reply('**Please Open Your Dm**'))
  }
});















client.on('messageCreate', message => {
  if (!message.guild) return;
  if (message.author.bot || message.channel.type === "dm") return;
  if (message.author.id === client.user.id) return;
  if (message.channel.type == "dm") return;
  if (!prefixes[message.guild.id])
    prefixes[message.guild.id] = {
      prefix: process.env.prefix
    };
  if (!prefixes[message.guild.id])
    prefixes[message.guild.id] = {
      prefix: process.env.prefix
    };

  var prefix = prefixes[message.guild.id].prefix;
  if (message.content.toLowerCase().startsWith(prefix + "ban")) {

    if (!message.member.permissions.has('BAN_MEMBERS')) return message.reply({ content: `:x: - You don't have \`BAN_MEMBERS\` permissions` });

    let argss = message.content.split(' ')
    let user = message.guild.members.cache.get(argss[1]) || message.mentions.members.first();
    const args = message.content.slice(prefix.length).split(/ +/);

    if (!args[1]) {
      const embed = new Discord.MessageEmbed()
        .setTitle(`**Command: ${args[0]}**`)
        .setDescription("Bans a member.")
        .addField("**Usage:**", `${prefix}ban [User] \n${prefix}ban [ID]`)
        .addField("**Examples:**", `${prefix}ban ${message.author} \n${prefix}ban ${message.author.id}`)
      return message.channel.send({ embeds: [embed] })
    }

    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    if (member) {

      let reason = args.slice(1).join(' ');

      if (!reason) reason = 'none';

      member.ban({ reason })
        .then(() => message.reply({ content: `** ✈️ ${member.user.username} Banned from server ✅**` }))
        .catch(() => message.reply({ content: '❌ - I can\'t ban this member' }));

    } else {
      return message.reply({ content: '❌ - I can\'t find this member on the server' })
    }
  }
});




client.on("messageCreate", async message => {
  if (!message.guild) return;
  if (message.author.bot || message.channel.type === "dm") return;
  if (message.author.id === client.user.id) return;
  if (message.channel.type == "dm") return;
  if (!prefixes[message.guild.id])
    prefixes[message.guild.id] = {
      prefix: process.env.prefix
    };
  if (!prefixes[message.guild.id])
    prefixes[message.guild.id] = {
      prefix: process.env.prefix
    };

  var prefix = prefixes[message.guild.id].prefix;
  if (message.content.toLowerCase().startsWith(prefix + "unban")) {

    if (!message.member.permissions.has('BAN_MEMBERS')) return message.reply({ content: `:x: - You don't have \`BAN_MEMBERS\` permissions` });
    const args = message.content.slice(prefix.length).split(/ +/);

    if (!args[1]) {
      const embed = new Discord.MessageEmbed()
        .setTitle(`**Command: ${args[0]}**`)
        .setDescription("Unbans a member.")
        .addField("**Usage:**", `${prefix}unban [User] \n${prefix}unban [ID]`)
        .addField("**Examples:**", `${prefix}unban ${message.author} \n${prefix}unban ${message.author.id}`)
      return message.channel.send({ embeds: [embed] })
    }
    let id = args[1];
    if (!id) return message.reply(`** 😕 Please mention or id **`);
    if (isNaN(id)) {
      return message.reply(`** 😕 Please mention or id **`);
    } else {
      message.guild.members.unban(id).then(mmm => {
        message.reply(`**✅ ${mmm.username} unbanned!**`)
      }).catch(err => message.reply(`**I can't find this member in bans list**`));
    }
  }
})



////////Kick
client.on('messageCreate', message => {
  if (!message.guild) return;
  if (message.author.bot || message.channel.type === "dm") return;
  if (message.author.id === client.user.id) return;
  if (message.channel.type == "dm") return;
  if (!prefixes[message.guild.id])
    prefixes[message.guild.id] = {
      prefix: process.env.prefix
    };
  if (!prefixes[message.guild.id])
    prefixes[message.guild.id] = {
      prefix: process.env.prefix
    };

  var prefix = prefixes[message.guild.id].prefix;
  if (message.content.toLowerCase().startsWith(prefix + "kick")) {

    if (!message.member.permissions.has('KICK_MEMBERS')) return message.reply({ content: `:x: - You don't have \`KICK_MEMBERS\` permissions` });

    let argss = message.content.split(' ')
    let user = message.guild.members.cache.get(argss[1]) || message.mentions.members.first();
    const args = message.content.slice(prefix.length).split(/ +/);

    if (!args[1]) {
      const embed = new Discord.MessageEmbed()
        .setTitle(`**Command: ${args[0]}**`)
        .setDescription("kick a member.")
        .addField("**Usage:**", `${prefix}kick [User]`)
        .addField("**Examples:**", `${prefix}kick ${message.author}`)
      return message.channel.send({ embeds: [embed] })
    }

    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    if (member) {

      let reason = args.slice(1).join(' ');

      if (!reason) reason = 'none';

      member.kick({ reason })
        .then(() => message.reply({ content: `✅ ${member.user} kicked from the server!` }))
        .catch(() => message.reply({ content: '❌ - I can\'t kick this member' }));

    } else {
      return message.reply({ content: '❌ - I can\'t find this member on the server' })
    }

  }
});



////////Create Mute
client.on("messageCreate", async (message) => {
  if (!message.guild) return;
  if (message.author.bot || message.channel.type === "dm") return;
  if (message.author.id === client.user.id) return;
  if (message.channel.type == "dm") return;
  if (!prefixes[message.guild.id])
    prefixes[message.guild.id] = {
      prefix: process.env.prefix
    };
  if (!prefixes[message.guild.id])
    prefixes[message.guild.id] = {
      prefix: process.env.prefix
    };

  var prefix = prefixes[message.guild.id].prefix;
  let args = message.content.split(" ").slice(1);
  if (message.content.toLowerCase().startsWith(prefix + "create-mute")) {
    if (!message.member.permissions.has('MANAGE_ROLES')) return message.reply({ content: ' **You do not have permission** `MANAGE_ROLES`' });
    let muterole = await message.guild.roles.create({
      name: 'Muted',
      permissions: []
    });
    message.guild.channels.cache.filter(c => c.type === "GUILD_TEXT").forEach(async (channel, id) => {
      await channel.permissionOverwrites.create(muterole, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      })
    });
    message.reply({ content: '**A mute role has been created ✅**' })
  }
})
////////////////////////  



////////mute
client.on("messageCreate", async message => {
  if (!message.guild) return;
  if (message.author.bot || message.channel.type === "dm") return;
  if (message.author.id === client.user.id) return;
  if (message.channel.type == "dm") return;
  if (!prefixes[message.guild.id])
    prefixes[message.guild.id] = {
      prefix: process.env.prefix
    };
  if (!prefixes[message.guild.id])
    prefixes[message.guild.id] = {
      prefix: process.env.prefix
    };

  var prefix = prefixes[message.guild.id].prefix;
  if (message.author.bot || !message.guild) return;
  if (message.content.toLowerCase().startsWith(prefix + 'mute')) {
    if (!message.member.permissions.has("MANAGE_ROLES")) return message.reply(`** 😕 You don't have permission **`);
    if (!message.guild.me.permissions.has('MANAGE_ROLES')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position. **`);

    let args = message.content.split(' ')
    var member = message.mentions.members.first() || message.guild.members.cache.get(args[1]) || message.guild.members.cache.find(m => m.user.username === args.slice(1));
    let createdrole = await message.guild.roles.create({
      name: 'Muted',
      permissions: []
    });
    message.guild.channels.cache.filter(c => c.type === "GUILD_TEXT").forEach(async (channel, id) => {
      await channel.permissionOverwrites.create(createdrole, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      })
    })
    if (!member) return message.reply(`** 😕 Please mention or id**`).catch(err => console.log(`No perms to type`))
    if (member.id === message.author.id) return;
    if (member.id === message.guild.me.id) return;
    let muterole = message.guild.roles.cache.find(r => r.name === 'Muted')
    if (!muterole) return;
    member.roles.add(muterole)
    message.reply(`**✅ ${member.user.username}** muted from text! 🤐`)
  }
})
////////////////////////


////////unmute
client.on("messageCreate", async message => {
  if (!message.guild) return;
  if (message.author.bot || message.channel.type === "dm") return;
  if (message.author.id === client.user.id) return;
  if (message.channel.type == "dm") return;
  if (!prefixes[message.guild.id])
    prefixes[message.guild.id] = {
      prefix: process.env.prefix
    };
  if (!prefixes[message.guild.id])
    prefixes[message.guild.id] = {
      prefix: process.env.prefix
    };

  var prefix = prefixes[message.guild.id].prefix;
  if (message.author.bot || !message.guild) return;
  if (message.content.toLowerCase().startsWith(prefix + 'unmute')) {
    if (!message.member.permissions.has("MANAGE_ROLES")) return message.reply(`** 😕 You don't have permission **`);
    if (!message.guild.me.permissions.has('MANAGE_ROLES')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position. **`);
    let args = message.content.split(' ')
    var member = message.mentions.members.first() || message.guild.members.cache.get(args[1]) || message.guild.members.cache.find(m => m.user.username === args.slice(1));
    if (!member) return message.reply(`** 😕 Please mention or id**`).catch(err => console.log(`No perms to type`))
    if (member.id === message.author.id) return;
    if (member.id === message.guild.me.id) return;
    let muterole = message.guild.roles.cache.find(r => r.name === 'Muted')
    if (!muterole) return;
    member.roles.remove(muterole)
    message.reply(`**✅ ${member.user.username}** unmuted!`)
  }
})
////////////////////////



client.on("messageCreate", async message => {
  if (!message.guild) return;
  if (message.author.bot || message.channel.type === "dm") return;
  if (message.author.id === client.user.id) return;
  if (message.channel.type == "dm") return;
  if (!prefixes[message.guild.id])
    prefixes[message.guild.id] = {
      prefix: process.env.prefix
    };
  if (!prefixes[message.guild.id])
    prefixes[message.guild.id] = {
      prefix: process.env.prefix
    };

  var prefix = prefixes[message.guild.id].prefix;
  if (message.content.toLowerCase().startsWith(prefix + "clear")) {
    message.delete({ timeout: 0 })
    if (!message.channel.guild) return message.reply(`** This Command For Servers Only**`);
    if (!message.member.permissions.has('MANAGE_MESSAGES')) return message.reply(`** 😕 You don't have permissions **`);
    if (!message.guild.me.permissions.has('MANAGE_MESSAGES')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);
    let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 100) return message.channel.send({ content: `**I can't delete more than 100 messages**` }).then(messages => messages.delete(5000))
    if (!messagecount) messagecount = '100';
    message.channel.messages.fetch({ limit: 100 }).then(e => {
      message.channel.send('Deleting messages.').then(function(e) {
        setTimeout(function() {
          message.channel.bulkDelete(messagecount).then(msgs => {
            let msgsize = msgs.size
            message.channel.send({
              content: `\`\`\`js
${msgsize} Messages have been deleted.
\`\`\``}).then(messages => {
                setTimeout(() => {
                  messages.delete()
                }, 4000)
              })
          }).catch(err => 0)
        }, 600)
      })
    })
  }
});



client.on("messageCreate", message => {
  if (!message.guild) return;
  if (message.author.bot || message.channel.type === "dm") return;
  if (message.author.id === client.user.id) return;
  if (message.channel.type == "dm") return;
  if (!prefixes[message.guild.id])
    prefixes[message.guild.id] = {
      prefix: process.env.prefix
    };
  if (!prefixes[message.guild.id])
    prefixes[message.guild.id] = {
      prefix: process.env.prefix
    };

  var prefix = prefixes[message.guild.id].prefix;
  if (message.content.toLowerCase().startsWith(prefix + "lock")) {
    if (message.author.bot || !message.guild) return;
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 You don't have permissions **`);
    if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);

    let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
    message.channel.permissionOverwrites.edit(everyone, {
      SEND_MESSAGES: false
    }).then(() => {
      let embed = new MessageEmbed()
        .setTitle("✅ | Locked Channel")
        .setDescription(`
> Channel is Locked : <#${message.channel.id}>
> SEND_MESSAGES => OFF`)
        .setColor("515abd")
      //.setFooter({text: `Request By: ${user.user.tag}`,iconURL: user.user.avatarURL()})
      //.setTimestamp()
      message.reply({ embeds: [embed] })
    })
  }
});



client.on("messageCreate", message => {
  if (!message.guild) return;
  if (message.author.bot || message.channel.type === "dm") return;
  if (message.author.id === client.user.id) return;
  if (message.channel.type == "dm") return;
  if (!prefixes[message.guild.id])
    prefixes[message.guild.id] = {
      prefix: process.env.prefix
    };
  if (!prefixes[message.guild.id])
    prefixes[message.guild.id] = {
      prefix: process.env.prefix
    };

  var prefix = prefixes[message.guild.id].prefix;
  if (message.content.toLowerCase().startsWith(prefix + "unlock")) {
    if (message.author.bot || !message.guild) return;
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 You don't have permissions **`);

    if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);

    let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
    message.channel.permissionOverwrites.edit(everyone, {
      SEND_MESSAGES: true
    }).then(() => {
      let embed = new MessageEmbed()
        .setTitle("✅ | Unlocked Channel")
        .setDescription(`
> Channel is Unlocked : <#${message.channel.id}>
> SEND_MESSAGES => ON`)
        .setColor("515abd")
      //.setFooter({text: `Request By: ${user.user.tag}`,iconURL: user.user.avatarURL()})
      //.setTimestamp()
      message.reply({ embeds: [embed] })
    })
  }
});




client.on("messageCreate", message => {
  if (!message.guild) return;
  if (message.author.bot || message.channel.type === "dm") return;
  if (message.author.id === client.user.id) return;
  if (message.channel.type == "dm") return;
  if (!prefixes[message.guild.id])
    prefixes[message.guild.id] = {
      prefix: process.env.prefix
    };
  if (!prefixes[message.guild.id])
    prefixes[message.guild.id] = {
      prefix: process.env.prefix
    };

  var prefix = prefixes[message.guild.id].prefix;
  if (message.content.toLowerCase().startsWith(prefix + "hide")) {
    if (message.author.bot || !message.guild) return;
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 You don't have permissions **`);

    if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);

    let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
    message.channel.permissionOverwrites.edit(everyone, {
      VIEW_CHANNEL: false
    }).then(() => {
      const embed = new MessageEmbed()
        .setTitle("✅ | Hide Channel")
        .setDescription(`
> Channel is Hidden : <#${message.channel.id}>
> VIEW_CHANNEL => OFF`)
        .setColor("515abd")
      //.setFooter({text: `Request By: ${user.user.tag}`,iconURL: user.user.avatarURL()})
      //.setTimestamp()
      message.reply({ embeds: [embed] })
    })
  }
});



client.on("messageCreate", message => {
  if (!message.guild) return;
  if (message.author.bot || message.channel.type === "dm") return;
  if (message.author.id === client.user.id) return;
  if (message.channel.type == "dm") return;
  if (!prefixes[message.guild.id])
    prefixes[message.guild.id] = {
      prefix: process.env.prefix
    };
  if (!prefixes[message.guild.id])
    prefixes[message.guild.id] = {
      prefix: process.env.prefix
    };

  var prefix = prefixes[message.guild.id].prefix;
  if (message.content.toLowerCase().startsWith(prefix + "show")) {
    if (message.author.bot || !message.guild) return;
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 You don't have permissions **`);

    if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);

    let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
    message.channel.permissionOverwrites.edit(everyone, {
      VIEW_CHANNEL: true
    }).then(() => {
      const embed = new MessageEmbed()
        .setTitle("✅ | Show Channel")
        .setDescription(`
> Channel is Show : <#${message.channel.id}>
> VIEW_CHANNEL => ON`)
        .setColor("515abd")
      //.setFooter({text: `Request By: ${user.user.tag}`,iconURL: user.user.avatarURL()})
      //.setTimestamp()
      message.reply({ embeds: [embed] })
    })
  }
});









////////Prefix
const prefix = process.env.prefix;

const prefixes = JSON.parse(fs.readFileSync('./data/prefix.json', 'utf8'));

client.on("messageCreate", message => {
  if (!message.guild) return;
  if (message.author.bot || message.channel.type === "dm") return;
  if (message.author.id === client.user.id) return;
  if (message.channel.type == "dm") return;
  if (!prefixes[message.guild.id])
    prefixes[message.guild.id] = {
      prefix: process.env.prefix
    };
  if (!prefixes[message.guild.id])
    prefixes[message.guild.id] = {
      prefix: process.env.prefix
    };

  var prefix = prefixes[message.guild.id].prefix;
  var setp = prefixes[message.guild.id];
  let args = message.content.split(" ").slice(1);
  if (message.content.toLowerCase().startsWith(prefix + "prefix")) {
    if (!message.member.permissions.has(`ADMINISTRATOR`)) return message.reply({ content: `**You do not have permission \`ADMINISTRATOR\` ❌**` });
    if (!args.join(" ")) return message.reply({ content: `**❌ Type the prefix you want to put**` });

    message.reply(`**The prefix has been changed for ${args[0]}**`);
    setp.prefix = args.join();
  }

  fs.writeFile("./data/prefix.json", JSON.stringify(prefixes), (err) => {
    if (err) console.error(err);
  });
});
////////////////////////  


client.on('messageCreate', message => {
  if (!message.guild) return;
  if (message.author.bot || message.channel.type === "DM") return;
  if (message.author.id === client.user.id) return;
  if (message.channel.type == "DM") return;
  if (!prefixes[message.guild.id])
    prefixes[message.guild.id] = {
      prefix: process.env.prefix
    };
  if (!prefixes[message.guild.id])
    prefixes[message.guild.id] = {
      prefix: process.env.prefix
    };

  var prefix = prefixes[message.guild.id].prefix;
  let args = message.content.split(" ").slice(1);
  if (message.content.toLowerCase().startsWith(prefix + "help")) {
    var embed = new Discord.MessageEmbed()
      .setColor("515abd")
      .setTitle(`**Commands List**`)
      .setDescription
      (`
**[Invite bot](https://discord.com/oauth2/authorize?client_id=823506478002470923&permissions=8&scope=applications.commands%20bot) | [Support server](https://discord.gg/GjyWYqS6mD) | [Vote bot](https://top.gg/bot/823506478002470923)**

***General Command***
**${prefix}**help - \`Help List.\`
**${prefix}**user - \`Shows info, such as id and join date, about yourself or a user.\`
**${prefix}**server - \`Shows information about the server.\`
**${prefix}**avatar (@mention) - \`Get a user's avatar.\`
**${prefix}**roles - \`Get a list of server roles and member counts.\`
**${prefix}**ping - \`Bot response time test.\`
**${prefix}**invite - \`Giving you an invitation to the bot to add it to your server.\`

***Moderation Command***
**${prefix}**ban - \`Bans a member.\`
**${prefix}**unban - \`Unbans a member.\`
**${prefix}**kick - \`Kicks a member.\`
**${prefix}**mute - \`Mute a member from text channels so they cannot type.\`
**${prefix}**unmute - \`Unmutes a member.\`
**${prefix}**clear - \`Cleans messages from a channel.\`
**${prefix}**lock - \`Disables @everyone from sending messages in specific channel.\`
**${prefix}**unlock - \`Allows @everyone to send messages in specific channel.\`
**${prefix}**hide - \`Disables @everyone from show messages in specific channel.\`
**${prefix}**show - \`Enable @everyone from show messages in specific channel.\`
**${prefix}**prefix - \`Change the bot prefix.\`
`)
      .setFooter(`Developer By: Abd#5061`)
    message.reply({ embeds: [embed] })
  }
})












































//////////////////////////////////////////
client.on("ready", async () => {
  client.application.commands.set(cmd)
  console.log("Done")
})
const cmd = [
  {
    name: 'help',
    description: "Get help for the PS Bot.",
  },
  {
    name: 'user',
    description: "Shows information, join date, about yourself or a user.",
    options: [{
      name: 'user',
      description: 'User to get infomation about.',
      type: "USER"
    }]
  },
  {
    name: 'server',
    description: "Shows infomation about the server.",
  },
  {
    name: 'avatar',
    description: "Display your avatar or someone else's avatar.",
    options: [{
      name: 'user',
      description: 'The user to get avatar for.',
      type: "USER"
    }]
  },
  {
    name: 'roles',
    description: "Get a list of server roles and member counts.",
  },
  {
    name: 'ping',
    description: "🏓 Test the bots response time.",
  },

  {
    name: "invite",
    description: "🚪 Looking for the bot invite link?",
  },
  {
    name: 'ban',
    description: "Bans a member.",
    options: [{
      name: 'user',
      description: 'User to get banner.',
      type: "USER"
    }]
  },
  {
    name: 'unban',
    description: "Unbans a member.",
    options: [{
      name: 'id',
      description: 'User to remove the ban of.',
      type: "STRING"
    }]
  },
  {
    name: 'kick',
    description: "Kicks a member.",
    options: [{
      name: 'user',
      description: 'The user to kick.',
      type: "USER",
      required: true
    }]
  },
  {
    name: 'mute',
    description: "Mute a member from text.",
    options: [{
      name: 'user',
      description: "User to mute.",
      type: 'USER',
      required: true
    }]
  },
  {
    name: 'unmute',
    description: "Unmutes a member.",
    options: [{
      name: 'user',
      description: "The User to unmute .",
      type: 'USER',
      required: true
    }]
  },
  {
    name: 'clear',
    description: "Cleans messages from the channel.",
    options: [{
      name: 'number_of_messages',
      description: "Number of messages to delete.",
      type: 'NUMBER',
      required: false
    }]
  },
  {
    name: 'lock',
    description: "🔒 Disables @everyone from sending messages in specific channel.",
  },
  {
    name: 'unlock',
    description: "🔓 Allows @everyone from send messages in specific channel.",
  },
  {
    name: 'hide',
    description: "Hides @everyone from visioning channel in specific channel.",
  },
  {
    name: 'show',
    description: "Shows @everyone from display channel in specific channel..",
  },

]

//////////////////////////////////////////
client.on("interactionCreate", async message => {
  if (!message.guild) return;
  if (message.channel.type == "dm") return;
  if (message.commandName == 'help') {
    let user = message.options.getString('user') || message.member;
    if (!user) user = message.user
    try {
      var embed = new MessageEmbed()
        .setColor('#515abd')
        .setDescription(`
**[Invite bot](https://discord.com/oauth2/authorize?client_id=823506478002470923&permissions=8&scope=applications.commands%20bot) | [Support server](https://discord.gg/GjyWYqS6mD) | [Vote bot](https://top.gg/bot/823506478002470923)**

***General Command***
**/**help - \`Help List.\`
**/**user - \`Shows info, such as id and join date, about yourself or a user.\`
**/**server - \`Shows information about the server.\`
**/**avatar (@mention) - \`Get a user's avatar.\`
**/**roles - \`Get a list of server roles and member counts.\`
**/**ping - \`Bot response time test.\`
**/**invite - \`Giving you an invitation to the bot to add it to your server.\`

***Moderation Command***
**/**ban - \`Bans a member.\`
**/**unban - \`Unbans a member.\`
**/**kick - \`Kicks a member.\`
**/**mute - \`Mute a member from text channels so they cannot type.\`
**/**unmute - \`Unmutes a member.\`
**/**clear - \`Cleans messages from a channel.\`
**/**lock - \`Disables @everyone from sending messages in specific channel.\`
**/**unlock - \`Allows @everyone to send messages in specific channel.\`
**/**hide - \`Disables @everyone from show messages in specific channel.\`
**/**show - \`Enable @everyone from show messages in specific channel.\`
    `)
        .setTimestamp()
        .setFooter(`Developer By: Abd#5061`)
      message.reply({ embeds: [embed] })
    } catch (e) {
      console.log(e)
    }
  }
});
//////////////////////////////////////////
client.on("interactionCreate", async message => {
  if (!message.guild) return;
  if (message.channel.type == "dm") return;
  if (message.commandName == 'user') {
    let user = message.options.getUser('user') || message.member || message.mentions.users.first() || message.author || message.guild.member.cache.get();
    if (!user) user = message.user
    try {
      var embed = new MessageEmbed()
        .setColor('515abd')
        .setThumbnail(user.displayAvatarURL({ dynamic: true }))
        .addField("Name", `\`${message.user.tag}\``, true)
        .addField("ID", `\`${message.user.id}\``, true)
        .addField("Avatar", `[Click Here](${user.displayAvatarURL({ dynamic: true })})`, true)
        .addField("Join discord at", `${moment(message.user.createdAt).format('YYYY/M/D')} \n${moment(message.user.createdAt).format('LTS')}\n\`${moment(message.user.createdAt, "YYYYMMDD").fromNow()}\``, true)
        .addField("Join server at", `${moment(user.joinedAt).format('YYYY/M/D')} \n${moment(user.joinedAt).format('LTS')}\n\`${moment(user.joinedAt, "YYYYMMDD").fromNow()}\``, true)
        .setTimestamp()
        .setFooter(`Requested by ${message.user.tag}`, message.user.displayAvatarURL({ dynamic: true }));
      message.reply({ embeds: [embed] })
    } catch (e) {
      console.log(e)
    }
  }
});
//////////////////////////////////////////
client.on("interactionCreate", async message => {
  if (!message.guild) return;
  if (message.channel.type == "dm") return;
  if (message.commandName == 'server') {
    try {
      const user = message.options.getString('user') || message.member;

      const chs = message.guild.channels.cache.size
      const avaibles = message.guild.features.map(features => features.toString()).join("\n")
      const roles = message.guild.roles.cache.size
      const boosts = message.guild.premiumSubscriptionCount
      const level = message.guild.premiumTier === 0 ? "No Level" : `${message.guild.premiumTier}`

      var embed = new MessageEmbed()
        .setColor(`#515abd`)
        //    .addField("Owned by", `${message.guild.ownerTag}`, true)
        .addField("Server ID", `${message.guild.id}`, true)
        .addField("Created On", `${moment(message.guild.createdAt).format('YYYY/MM/DD')}` + `\n\`${moment(message.guild.createdAt, "YYYYMMDD").fromNow()}\``, true)
        .addField(`Members`, `${message.guild.memberCount}`, true)
        .addField("Verification Level", `${message.guild.verificationLevel}`, true)
        .addField("Roles", `${message.guild.roles.cache.size}`, true)
        //    .addField("Emojis", `${message.guild.emojis.cache.size}`, true)
        .addField("Boost", `${message.guild.premiumSubscriptionCount}/14`, true)
        .setTitle(`**${message.guild.name}**`)
        .setThumbnail(message.guild.iconURL()).setColor("2f3136")
        .setTimestamp()
        .setFooter(`Requested by ${message.user.tag}`, message.user.displayAvatarURL({ dynamic: true }));
      message.reply({ embeds: [embed] })
    } catch (e) {
      console.log(e)
    }
  }
});
//////////////////////////////////////////
client.on("interactionCreate", message => {
  if (!message.guild) return;
  if (message.channel.type == "dm") return;
  if (message.commandName == 'avatar') {
    let user = message.options.getUser('user') || message.member;
    if (!user) user = message.user
    try {
      var embed = new MessageEmbed()
        .setTitle('Avatar Link')
        .setURL(message.user.avatarURL({ dynamic: true, size: 512 }))
        .setAuthor(`${message.user.tag}`, message.user.displayAvatarURL({ dynamic: true }))
        .setImage((message.user.avatarURL({ dynamic: true, size: 512 })))
        .setColor(`515abd`)
        .setTimestamp()
        .setFooter(`Requested by ${message.user.tag}`, message.user.displayAvatarURL({ dynamic: true }));
      message.reply({ embeds: [embed] });
    } catch (e) {
      console.log(e)
    }
  }
});
//////////////////////////////////////////
client.on("interactionCreate", message => {
  if (!message.guild) return;
  if (message.channel.type == "dm") return;
  if (message.commandName == 'roles') {
    try {
      let roles = message.guild.roles.cache.filter(r => r.name != '@everyone').sort((a, b) => a.id - b.id).map(r => {
        if (r.name.length < 22) {
          return `${r.name + Array(22 - (r.name.length)).map(a => ' ').join(' ') + r.members.size} members`
        }
        else {
          return `${r.name + '  ' + r.members.size} members`
        }
      })
      var embed = new MessageEmbed()
        .setDescription(roles.join('\n'), { split: true, code: true })
        .setColor(`515abd`)
      message.reply({ embeds: [embed] })
    } catch (e) {
      console.log(e)
    }
  }
})
//////////////////////////////////////////
client.on("interactionCreate", async message => {
  if (!message.guild) return;
  if (message.channel.type == "dm") return;
  if (message.commandName == 'ping') {
    let user = message.options.getString('user') || message.member;
    if (!user) user = message.user
    try {
      var embed = new MessageEmbed()
        .setColor('515abd')
        .setDescription(`**Time Taken:** \`\`${new Date - message.createdTimestamp}ms\`\`
**WebSocket:** \`\`${(client.ws.ping)}ms\`\``)
        .setTimestamp()
        .setFooter(`${message.user.username}`, message.user.displayAvatarURL({ dynamic: true }));
      message.reply({ embeds: [embed] })
    } catch (e) {
      console.log(e)
    }
  }
});
//////////////////////////////////////////
client.on("interactionCreate", async message => {
  if (!message.guild) return;
  if (message.channel.type == "dm") return;
  if (message.commandName == 'invite') {
    try {
      var embed = new MessageEmbed()
        .setColor(`515abd`)
        .setTitle(`Invite Links`)
        .setDescription(`
[Add To Your Server](https://discord.com/api/oauth2/authorize?client_id=823506478002470923&permissions=8&scope=bot)
[Support Server](https://discord.gg/GjyWYqS6mD)
[Vote Bot](https://top.gg/bot/823506478002470923)
`)
        .setFooter(`Requested by ${message.user.tag}`, message.user.displayAvatarURL({ dynamic: true }));
      message.reply({ embeds: [embed], ephemeral: true })
    } catch (e) {
      console.log(e)
    }
  }
});
//////////////////////////////////////////
/*
const { DiscordInteractions } = require("slash-commands");
*/








//////////////////////////////////////////
client.on("interactionCreate", async message => {
  if (!message.guild) return;
  if (message.channel.type == "dm") return;
  if (message.user.bot) return;
  if (message.commandName == 'ban') {
    if (!message.member.permissions.has("BAN_ROLES")) return message.reply(`** 😕 You don't have permission **`);
    if (!message.guild.me.permissions.has('BAN_ROLES')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position. **`);

    let user = message.options.getMember('user')
    if (user.roles.highest.position >= message.member.roles.highest.position && message.user.id !== message.guild.fetchOwner().id) return message.reply(`** ❌ You can't ban this user**`);
    if (!user.bannable) return message.reply(`** ❌ You can't ban this user**`);
    await user.ban().catch(err => { console.log(err) });
    await message.reply(`✅ **${user.user.tag} banned from the server!**✈️`);
  }
})
//////////////////////////////////////////
client.on("interactionCreate", async message => {
  if (!message.guild) return;
  if (message.channel.type == "dm") return;
  if (message.user.bot) return;
  if (message.commandName == 'unban') {

    if (!message.member.permissions.has("BAN_ROLES")) return message.reply(`** 😕 You don't have permission **`);
    if (!message.guild.me.permissions.has('BAN_ROLES')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position. **`);

    let id = message.options.getString('id')
    if (isNaN(id)) {
      return message.reply(`** 😕 Please mention or id **`);
    } else {
      message.guild.members.unban(id).then(mmm => {
        message.reply(`✅** ${mmm.tag} unbanned!**`)
      }).catch(err => message.reply(`**I can't find this member in bans list**`));
    }
  }
})
//////////////////////////////////////////
client.on("interactionCreate", async message => {
  if (!message.guild) return;
  if (message.channel.type == "dm") return;
  if (message.user.bot) return;
  if (message.commandName == 'kick') {
    if (!message.member.permissions.has("KICK_ROLES")) return message.reply(`** 😕 You don't have permission **`);
    if (!message.guild.me.permissions.has('KICK_ROLES')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position. **`);

    let user = message.options.getMember('user')
    if (user.roles.highest.position >= message.member.roles.highest.position && message.user.id !== message.guild.fetchOwner().id) return message.reply(`** ❌ You can't kick this user**`);
    if (!user.bannable) return message.reply(`** ❌ You can't kick this user**`);
    await user.kick().catch(err => { console.log(err) });
    await message.reply(`✅ **${user.user.tag} kicked from the server!**✈️`);
  }
})
//////////////////////////////////////////
client.on("interactionCreate", async message => {
  if (!message.guild) return;
  if (message.channel.type == "dm") return;
  if (!message.channel.guild) return;
  if (message.commandName == 'mute') {

    if (!message.member.permissions.has("MANAGE_ROLES")) return message.reply(`** 😕 You don't have permission **`);
    if (!message.guild.me.permissions.has('MANAGE_ROLES')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position. **`);

    var member = message.options.getMember('user')
    if (!reason) reason = 'No Reason Provived .'
    if (member.id === message.user.id) return;
    if (member.id === message.guild.me.id) return;
    if (member.roles.highest.position > message.guild.members.resolve(client.user).roles.highest.position) return message.reply(`** ❌ I can't mute this user **`)
    if (member.roles.highest.position > message.guild.members.resolve(message.user).roles.highest.position) return message.reply(`** ❌ You can't mute this user **`)
    let mutedrole = message.guild.roles.cache.find(ro => ro.name === 'Muted')
    if (!mutedrole) {
      try {
        let createdrole = await message.guild.roles.create({
          name: 'Muted',
          permissions: []
        });
        message.guild.channels.cache.filter(c => c.type === "GUILD_TEXT").forEach(async (channel, id) => {
          await channel.permissionOverwrites.create(createdrole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          })
        }).catch(err => console.log(`No perms to manage guild`))
      } catch (err) {
        console.log('Error')
      }
    };
    let muterole = message.guild.roles.cache.find(r => r.name === 'Muted')
    member.roles.add(muterole).catch(err => { return console.log('err') })
    message.reply(`✅** ${member.user.username} muted from text! 🤐**`).catch(err => console.log(`No perms to type`))
  }
})
//////////////////////////////////////////
client.on("interactionCreate", async message => {
  if (!message.guild) return;
  if (message.channel.type == "dm") return;
  if (!message.channel.guild) return;
  if (message.commandName == 'unmute') {
    if (!message.member.permissions.has("MANAGE_ROLES")) return message.reply(`** 😕 You don't have permission **`);
    if (!message.guild.me.permissions.has('MANAGE_ROLES')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position. **`);
    var member = message.options.getMember('user')
    if (member.id === message.user.id) return;
    if (member.id === message.guild.me.id) return;
    let muterole = message.guild.roles.cache.find(r => r.name === 'Muted')
    if (!muterole) return;
    member.roles.remove(muterole)
    message.reply(`✅** ${member.user.username} unmuted!**`)
  }
})
//////////////////////////////////////////
client.on("interactionCreate", async message => {
  if (!message.guild) return;
  if (message.channel.type == "dm") return;
  if (message.commandName == 'clear') {
    if (!message.channel.guild) return message.reply(`** This Command For Servers Only**`);
    if (!message.member.permissions.has('MANAGE_MASSAGE')) return message.reply(`** 😕 You don't have permissions **`);
    if (!message.guild.me.permissions.has('MANAGE_GUILD')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position. **`);
    let messagecount = message.options.getNumber('number_of_messages')
    if (messagecount > 100) return message.channel.send({
      content: `\`\`\`javascript
i cant delete more than 100 messages 
\`\`\``}).then(messages => { setTimeout(() => { messages.delete() }, 4000) })
    if (!messagecount) messagecount = 100;
    message.channel.messages.fetch({ limit: 100 }).then(e => {
      message.reply({ content: 'Deleting messages.', fetchReply: true }).then(function(e) {
        setTimeout(function() {
          e.delete()
        }, 500)
        setTimeout(function() {
          message.channel.bulkDelete(messagecount).then(msgs => {
            let msgsize = msgs.size
            message.channel.send({
              content: `\`\`\`js
${msgsize} messages cleared
\`\`\``}).then(messages => {
                setTimeout(() => {
                  messages.delete()
                }, 4000)
              })
          }).catch(err => 0)
        }, 600)
      })
    })
  }
});
//////////////////////////////////////////
client.on("interactionCreate", message => {
  if (!message.guild) return;
  if (message.channel.type == "dm") return;
  if (message.commandName == 'lock') {
    if (!message.guild) return;
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 You don't have permissions **`);

    if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);

    let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
    message.channel.permissionOverwrites.edit(everyone, {
      SEND_MESSAGES: false
    }).then(() => {
      message.reply(`**🔒 ${message.channel} has been looked.** `)
    })
  }
});
//////////////////////////////////////////
client.on("interactionCreate", message => {
  if (!message.guild) return;
  if (message.channel.type == "dm") return;
  if (message.commandName == 'unlock') {
    if (!message.guild) return;
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 You don't have permissions **`);

    if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);
    let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
    message.channel.permissionOverwrites.edit(everyone, {
      SEND_MESSAGES: true
    }).then(() => {
      message.reply(`**🔒 ${message.channel} has been looked.** `)
    })
  }
});
//////////////////////////////////////////
client.on("interactionCreate", message => {
  if (!message.guild) return;
  if (message.channel.type == "dm") return;
  if (message.commandName == 'hide') {
    if (!message.guild) return;
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 You don't have permissions **`);

    if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);

    let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
    message.channel.permissionOverwrites.edit(everyone, {
      VIEW_CHANNEL: false
    }).then(() => {
      message.reply(`**✅  ${message.channel} Done hide this room.**`)
    })
  }
});
//////////////////////////////////////////
client.on("interactionCreate", message => {
  if (!message.guild) return;
  if (message.channel.type == "dm") return;
  if (message.commandName == 'show') {
    if (!message.guild) return;
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 You don't have permissions **`);
    if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);

    let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
    message.channel.permissionOverwrites.edit(everyone, {
      VIEW_CHANNEL: true
    }).then(() => {
      message.reply(`**✅  ${message.channel} Done show this room.**`)
    })
  }
});
//////////////////////////////////////////