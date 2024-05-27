const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Express app!')
});


const { Client, MessageEmbed, Modal, Collection, Interaction, MessageActionRow,
       MessageButton, WebhookClient, TextInputComponent, MessageSelectMenu,
       RichEmbed, Util, Permissions, MessageAttachment } = require('discord.js');
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
const keepAlive = require("./server")
keepAlive();


process.on('unhandledRejection', e => {
  console.log(e.message);
});

setTimeout(() => {
  if (!client || !client.user) {
    console.log("Client Not Login, Process Kill")
    process.kill(1);
  } else {
    console.log("Client Login")
  }
}, 3*1000*60);


client.login(process.env.token)
////////
const name = ["Abd#5531"]
const dev = ["674212054684401672"]
///////////////////////


//////// Activity Bot
client.on("ready", async () => {
  console.log(``)
  await client.user.setActivity(`/help`, {
    type: "PLAYING",
  })
});
////////////////////////


//////////////////////////////////////////
client.on("ready", async () => {
client.application.commands.set(cmd)
console.log("Done")})
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
    name:"invite",
    description:"🚪 Looking for the bot invite link?",
  },



  
  {
    name:"listban",
    description:"To show the list of banned people.",
  },
  {
    name: 'ban',
    description: "Bans a member.",
    options: [{
            name: 'user',
            description: 'User to get banner.',
            type: "USER",
            required: true
  }]
  },
  {
    name: 'unban',
    description: "Unbans a member.",
    options: [{
            name: 'id',
            description: 'User to remove the ban of.', 
            type: "STRING",
            required: true
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
client.on("interactionCreate",async message =>  {
if(!message.guild) return;
if(message.channel.type=="dm") return;
if (message.commandName == 'help') {
    let user = message.options.getString('user') || message.member;
    if (!user) user = message.user
           try {
var embed = new MessageEmbed()
    .setColor('#515abd')
    .setDescription(`
***General Command***
**/**help - \`Help List.\`
**/**user - \`Shows info, such as id and join date, about yourself or a user.\`
**/**server - \`Shows information about the server.\`
**/**avatar (@mention) - \`Get a user's avatar.\`
**/**roles - \`Get a list of server roles and member counts.\`
**/**ping - \`Bot response time test.\`
**/**invite - \`Giving you an invitation to the bot to add it to your server.\`

***Moderation Command***
**/**listban - \`Show list of banneds.\`
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
    .setFooter(`Developer By: Abd#5531`)
message.reply({embeds: [embed]})
           } catch(e) {
             console.log(e)
           }
      }
}); 
//////////////////////////////////////////
client.on("interactionCreate",async message =>  {
if(!message.guild) return;
if(message.channel.type=="dm") return;
if (message.commandName == 'user') {
    let user = message.options.getUser('user') || message.member || message.mentions.users.first() || message.author || message.guild.member.cache.get();
    if (!user) user = message.user
           try {
var embed = new MessageEmbed()
    .setColor('#515abd')
    .setThumbnail(user.displayAvatarURL({dynamic:true}))
    .setDescription(`**User : \`${message.user.tag}\` | ID : \`${message.user.id}\`**`, true)
    .addField("Join Discord :", `\`${moment(message.user.createdAt, "YYYYMMDD").fromNow()}\``, true)
    .addField("Join Server :", `\`${moment(user.joinedAt, "YYYYMMDD").fromNow()}\``, true)
    .setTimestamp()
    .setFooter(`Requested by ${message.user.tag}`, message.user.displayAvatarURL({ dynamic: true }));
message.reply({embeds: [embed]})
           } catch(e) {
             console.log(e)
           }
      }
});
//////////////////////////////////////////
client.on("interactionCreate",async message =>  {
if(!message.guild) return;
if(message.channel.type=="dm") return;
if (message.commandName == 'server') {
           try {
const user = message.options.getString('user') || message.member;
const owner = message.guild.members.cache.find(member => member.id === message.guild.ownerId);
const roles = message.guild.roles.cache.size
const boosts = message.guild.premiumSubscriptionCount
const text = message.guild.channels.cache.filter(r => r.type === 'GUILD_TEXT').size;
const voice = message.guild.channels.cache.filter(r => r.type === 'GUILD_VOICE').size;
const categorie = message.guild.channels.cache.filter(r => r.type === 'GUILD_CATEGORY').size;
const online = message.guild.members.cache.filter(m => m.presence == 'online').size;
const idle = message.guild.members.cache.filter(m => m.presence == 'idle').size;
const offline = message.guild.members.cache.filter(m => m.presence !== 'offline').size;
const dnd = message.guild.members.cache.filter(m => m.presence == 'dnd').size; 
             
var embed = new MessageEmbed()
    .setColor('#515abd')
    .setDescription(`**OWNER:** ${owner} **|** **ID:** \`${message.guild.id}\``)
    .addField(`**Created At**`, `**\`${moment(message.guild.createdAt, "YYYYMMDD").fromNow()}\`**`, true)
    .addField(`**Members (${message.guild.memberCount})**`, `**${online}** Online \n **${offline}** Offline`, true)
    .addField(`**Channels (${message.guild.channels.cache.size})**`, `**${text}** Text | **${voice}** Voice \n **${categorie}** Categories`, true)
    .addField(`**Roles (${message.guild.roles.cache.size})**`, `To see all roles use **/roles**`, true)
//    .addField("Boost", `${message.guild.premiumSubscriptionCount}/14`, true)
    .setAuthor(`${message.guild.name}`, message.guild.iconURL())
    .setThumbnail(message.guild.iconURL())
    .setTimestamp()  
    .setFooter(`Requested by ${message.user.tag}`, message.user.displayAvatarURL({ dynamic: true }));
message.reply({embeds: [embed]})
           } catch(e) {
             console.log(e)
           }
      }
});
//////////////////////////////////////////
client.on("interactionCreate", message  =>  {
if(!message.guild) return;
if(message.channel.type=="dm") return;
if (message.commandName == 'avatar') {
    let user = message.options.getUser('user') || message.user;
    if (!user) user = message.user
           try {
      var embed = new MessageEmbed()
.setTitle('Avatar Link')
.setURL(user.avatarURL({dynamic : true, size : 512 })) 
.setAuthor(`${user.tag}`, user.displayAvatarURL({ dynamic: true }))
.setImage((user.avatarURL({dynamic : true, size : 512 })))
.setColor('#515abd')
.setTimestamp()
.setFooter(`Requested by ${message.user.tag}`, message.user.displayAvatarURL({ dynamic: true }));
   message.reply({embeds: [embed]});
           } catch(e) {
             console.log(e)
           }
      }
});
//////////////////////////////////////////
client.on("interactionCreate",message => {
if(!message.guild) return;
if(message.channel.type=="dm") return;
if (message.commandName == 'roles') {
           try {
       let roles = message.guild.roles.cache.filter(r=> r.name != '@everyone').sort((a,b)=> a.id - b.id).map( r => {
            if(r.name.length < 22) 
            {
                return `${r.name + Array(22 - (r.name.length)).map(a=> ' ').join(' ')+ r.members.size} members`
            } 
            else 
            {
                return `${r.name + '  ' + r.members.size} members`
            }
        })
  var embed = new MessageEmbed()
  .setDescription(roles.join('\n'),{split:true,code:true})
  .setColor(`515abd`)
  message.reply({embeds: [embed]})
           } catch(e) {
             console.log(e)
           }
      }
})
//////////////////////////////////////////
client.on("interactionCreate",async message =>  {
if(!message.guild) return;
if(message.channel.type=="dm") return;
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
message.reply({embeds: [embed]})
           } catch(e) {
             console.log(e)
           }
      }
}); 
//////////////////////////////////////////
client.on("interactionCreate",async message =>  {
if(!message.guild) return;
if(message.channel.type=="dm") return;
if (message.commandName == 'invite') {
           try {
var embed = new MessageEmbed()
.setColor('#515abd')
.setTitle(`Helpful Links`)
.setDescription(`
**${message.guild.name}** prefix is \`/\`
Add Bot To Your Server ✨ [Click Here](https://discord.com/oauth2/authorize?client_id=823506478002470923&permissions=8&scope=applications.commands%20bot)
Looking for support? https://discord.gg/GjyWYqS6mD
If you want a vote for the PS [Click Here](https://top.gg/bot/823506478002470923)
`)
.setImage(`https://media.discordapp.net/attachments/1022347640786141244/1022355423891824670/qr231.png`)
.setTimestamp()  
.setFooter(`Developer By: Abd#5531`)
             message.reply({embeds: [embed], ephemeral: true})
           } catch(e) {
             console.log(e)
           }
      }
});
//////////////////////////////////////////











//////////////////////////////////////////
client.on("interactionCreate",async message =>  {
if(!message.guild) return;
if(message.channel.type=="dm") return;
if (message.commandName == 'listban') {
if(!message.member.permissions.has("BAN_ROLES")) return message.reply(`** 😕 You don't have permission **`);
   if(!message.guild.me.permissions.has('BAN_ROLES')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position. **`);
           try {
    let banslist = []
    message.guild.bans.fetch().then(banned  => {
      let list = banned.map(user => user.user.tag).join('\n');
      let listid = banned.map(user => user.user.id).join('\n');
     let embed = new Discord.MessageEmbed()
     .setAuthor(`${message.guild.name}`, message.guild.iconURL({ dynamic: true }))
     .setDescription(`**${banned.size} users are banned:**`)
     .addField("**Username:**", `\`${list}\``, true) 
     .addField("**ID:**", `\`${listid}\``, true)
     .setColor(`515abd`)
    message.reply({embeds: [embed], ephemeral: true})
});
           } catch(e) {
             console.log(e)
           }
      }
});
//////////////////////////////////////////
client.on("interactionCreate", async message => {
if(!message.guild) return;
if(message.channel.type=="dm") return;
    if (message.user.bot) return;
    if (message.commandName == 'ban') {     
if(!message.member.permissions.has("BAN_ROLES")) return message.reply(`** 😕 You don't have permission **`);
   if(!message.guild.me.permissions.has('BAN_ROLES')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position. **`);
      
    let user = message.options.getMember('user')
    if(user.roles.highest.position >= message.member.roles.highest.position && message.user.id !== message.guild.fetchOwner().id) return message.reply(`** ❌ You can't ban this user**`);
    if(!user.bannable) return message.reply(`** ❌ You can't ban this user**`);
    await user.ban().catch(err => {console.log(err)});
     await message.reply(`✅ **${user.user.tag} banned from the server!**✈️`);
    }
}) 
//////////////////////////////////////////
client.on("interactionCreate", async message => {
if(!message.guild) return;
if(message.channel.type=="dm") return;
    if (message.user.bot) return;
    if (message.commandName == 'unban') { 
      
if(!message.member.permissions.has("BAN_ROLES")) return message.reply(`** 😕 You don't have permission **`);
   if(!message.guild.me.permissions.has('BAN_ROLES')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position. **`);
      
    let id = message.options.getString('id')
    if(isNaN(id)) {
       return message.reply(`** 😕 Please mention or id **`);
    } else {
message.guild.members.unban(id).then(mmm => {
        message.reply(`✅** ${mmm.tag} unbanned!**`)
      })
      }
    }
}) 
//////////////////////////////////////////
client.on("interactionCreate", async message => {
if(!message.guild) return;
if(message.channel.type=="dm") return;
    if (message.user.bot) return;
    if (message.commandName == 'kick') {     
if(!message.member.permissions.has("KICK_ROLES")) return message.reply(`** 😕 You don't have permission **`);
   if(!message.guild.me.permissions.has('KICK_ROLES')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position. **`);
      
    let user = message.options.getMember('user')
    if(user.roles.highest.position >= message.member.roles.highest.position && message.user.id !== message.guild.fetchOwner().id) return message.reply(`** ❌ You can't kick this user**`);
    if(!user.bannable) return message.reply(`** ❌ You can't kick this user**`);
    await user.kick().catch(err => {console.log(err)});
     await message.reply(`✅ **${user.user.tag} kicked from the server!**✈️`);
    }
})
//////////////////////////////////////////
client.on("interactionCreate", async message => {
if(!message.guild) return;
if(message.channel.type=="dm") return;
if (!message.channel.guild) return;
if (message.commandName == 'mute') {
  
if(!message.member.permissions.has("MANAGE_ROLES")) return message.reply(`** 😕 You don't have permission **`);
   if(!message.guild.me.permissions.has('MANAGE_ROLES')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position. **`); 
  
var member = message.options.getMember('user')

if (member.id === message.user.id)return;
if (member.id === message.guild.me.id)return;
if(member.roles.highest.position > message.guild.members.resolve(client.user).roles.highest.position) return message.reply(`** ❌ I can't mute this user **`)
if(member.roles.highest.position > message.guild.members.resolve(message.user).roles.highest.position) return message.reply(`** ❌ You can't mute this user **`)
let mutedrole = message.guild.roles.cache.find(ro => ro.name === 'Muted')
if(!mutedrole) {
try {
			let createdrole = await message.guild.roles.create({
        	    name: 'Muted',

			});
			message.guild.message.cache.filter(c => c.type === "GUILD_TEXT").forEach(async (message, id) => {
					await message.permissionOverwrites.create(createdrole, {  
							SEND_MESSAGES: false,
							ADD_REACTIONS: false
					})
			}).catch(err => console.log(`No perms to manage guild`))} catch (err){
console.log('Error')}};
let muterole = message.guild.roles.cache.find(r => r.name === 'Muted')
member.roles.add(muterole).catch(err => {return console.log('err')})
message.reply(`✅** ${member.user.username} muted from text! 🤐**`).catch(err => console.log(`No perms to type`))
    }
}) 
//////////////////////////////////////////
client.on("interactionCreate", async message => {
if(!message.guild) return;
if(message.channel.type=="dm") return;
if (!message.channel.guild) return;
if (message.commandName == 'unmute') {
if(!message.member.permissions.has("MANAGE_ROLES")) return message.reply(`** 😕 You don't have permission **`);
   if(!message.guild.me.permissions.has('MANAGE_ROLES')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position. **`);
var member = message.options.getMember('user')
    if (member.id === message.user.id)return;
      if (member.id === message.guild.me.id)return;
let muterole = message.guild.roles.cache.find(r => r.name === 'Muted')
if (!muterole) return; 
member.roles.remove(muterole)
message.reply(`✅** ${member.user.username} unmuted!**`) 
    }
})
//////////////////////////////////////////
client.on("interactionCreate",async message => {
if(!message.guild) return;
if(message.channel.type=="dm") return;
if (message.commandName == 'clear') { 
    if(!message.channel.guild) return message.reply(`** This Command For Servers Only**`); 
     if(!message.member.permissions.has('MANAGE_MASSAGE')) return message.reply(`** 😕 You don't have permissions **`);
   if(!message.guild.me.permissions.has('MANAGE_GUILD')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position. **`);
    let messagecount = message.options.getNumber('number_of_messages')
    if (messagecount > 100) return message.channel.send({content: `\`\`\`javascript
i cant delete more than 100 messages 
\`\`\``}).then(messages => {setTimeout(() => {messages.delete()}, 4000)})
if(!messagecount) messagecount = 100;
    message.channel.messages.fetch({limit: 100 }).then(e => {
    message.reply({content: 'Deleting messages.', fetchReply:true}).then(function(e) {
    setTimeout(function() {
        e.delete()
    }, 500)
    setTimeout(function() {
        message.channel.bulkDelete(messagecount).then(msgs => {
        let msgsize = msgs.size
    message.channel.send({content: `\`\`\`js
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
if(!message.guild) return;
if(message.channel.type=="dm") return;
if (message.commandName == 'lock') {
if(!message.guild) return;
if(!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 You don't have permissions **`); 
  
  if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);
  
let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
message.channel.permissionOverwrites.edit(everyone, {
             SEND_MESSAGES : false
            }).then(() => {
message.reply(`**🔒 ${message.channel} has been looked.** `) 
})
}
});
//////////////////////////////////////////
client.on("interactionCreate", message => {
if(!message.guild) return;
if(message.channel.type=="dm") return;
if (message.commandName == 'unlock') {
if(!message.guild) return;
if(!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 You don't have permissions **`); 
  
  if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);
let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
message.channel.permissionOverwrites.edit(everyone, {
            SEND_MESSAGES : true
            }).then(() => {
message.reply(`**🔒 ${message.channel} has been unlooked.** `) 
 })
}
});
//////////////////////////////////////////
client.on("interactionCreate", message => {
if(!message.guild) return;
if(message.channel.type=="dm") return;
if (message.commandName == 'hide') {
if(!message.guild) return;
if(!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 You don't have permissions **`); 
  
  if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);
  
let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
message.channel.permissionOverwrites.edit(everyone, {
            VIEW_CHANNEL : false
            }).then(() => {
message.reply(`**✅  ${message.channel} Done hide this room.**`)
})
}
});
//////////////////////////////////////////
client.on("interactionCreate", message => {
if(!message.guild) return;
if(message.channel.type=="dm") return;
if (message.commandName == 'show') {
if(!message.guild) return;
if(!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 You don't have permissions **`);
  if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);
  
let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
message.channel.permissionOverwrites.edit(everyone, {
            VIEW_CHANNEL : true
            }).then(() => {
message.reply(`**✅  ${message.channel} Done show this room.**`)
})
}
});
//////////////////////////////////////////
/*const durations = [
    { name: "60 seconds", value: 60 * 1000 },
    { name: "5 minutes", value: 5 * 60 * 1000 },
    { name: "10 minutes", value: 10 * 60 * 1000 },
    { name: "30 minutes", value: 30 * 60 * 1000 },
    { name: "1 hour", value: 60 * 60 * 1000 },
    { name: "1 day", value: 24 * 60 * 60 * 1000 },
    { name: "1 week", value: 7 * 24 * 60 * 60 * 1000 },
]

client.on("interactionCreate", async message => {
if(!message.guild) return;
if(message.channel.type=="dm") return;
    if (message.user.bot) return;
    if (message.commandName == 'timeout') {     
    let member = message.options.getMember("user")
    let duration = message.options.getNumber("duration")
    let reason = message.options.getString("reason") || "No reason given"

    if (!member) return message.reply("Invalid member")

    try {
        await member.timeout(duration, reason)
        return message.reply(`${member.user.tag} has been timed out for ${durations.find(d=> duration === d.value)?.name} with a reason of ${reason}`)
    }
    catch(err){
        if (err){
            console.error(err)
            return message.reply(`Failed to timeout ${member.user.tag}`)
        }
    }
}
});*/
//////////////////////////////////////////