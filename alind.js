const { Client, MessageEmbed } = require("discord.js");
var { Util } = require("discord.js");
const client = new Client({ disableEveryone: true });
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss");
const botversion = require("./package.json").version;
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const ms = require("ms");
const jimp = require("jimp");
const math = require("math-expression-evaluator");
const { get } = require("snekfetch");
const guild = require("guild");

const dateFormat = require("dateformat");
var table = require("table").table;
const Discord = require("discord.js");
const cmd = require("node-cmd");
const prefix = "!";

////////////
client.on("ready", () => {
  console.log(`${client.user.tag}`);
  client.user.setActivity(`${prefix}help`, {
    Type: "Playing"
  });
});
////Help Command////
client.on("message", async message => {
  if (message.content.startsWith(prefix + "help")) {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let help = new Discord.MessageEmbed()
      .setColor(color))
      .setThumbnail(message.member.user.displayAvatarURL({ dynamic: true }))
      .setDescription(`
**Info Commands**
\`${prefix}botinfo\`
\`${prefix}userinfo\`
\`${prefix}serverinfo\`
\`${prefix}invite\`
\`${prefix}profilep\`

**Moderation Commands**
\`${prefix}lock\`
\`${prefix}unlock\`
\`${prefix}ban\` : @User
\`${prefix}kick\` : @User
\`${prefix}unban\` : Id/all
**Links**
[Support]() - [Invite]()
      
      
      `);
    message.channel.send(help);
  }
});
////invite Command////
client.on("message", async message => {
  if (message.content.startsWith(prefix + "invite")) {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let help = new Discord.MessageEmbed()
      .setColor(RANDOM)
      .setDescription(`
[Click here]) **to invite the bot.**
`);
    message.channel.send(help);
  }
});
////Profile////
client.on("message", async message => {
  if (message.content.toLowerCase() === prefix + "profile") {
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.stopTyping();
    }, Math.random() * (1 - 3) + 1 * 200).then(
      message.channel.send({
        files: [
          {
            name: "prfoilebycutie.png",
            attachment: `https://api.probot.io/profile/${message.author.id}`
          }
        ]
      })
    );
  }
});
////Botinfo////
client.on("message", message => {
  if (message.content.startsWith(`${prefix}botinfo`)) {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    const tnx = new Discord.MessageEmbed()
      .setColor(callicolor)
      .addField("Name", `${client.user.tag}`, true)
      .addField("Name", `${client.user.tag}`, true)
      .addField("ID", `${client.user.id}`, true)
      .addField("Version", `${process.version}`, true)
      .addField("Guilds", `${client.guilds.cache.size} Guilds`, true)
      .addField("Users", `${client.users.cache.size} Users`, true)
      .addField(
        "Ping",
        `${Date.now() - message.createdTimestamp}` + "ms",
        true
      );

    message.channel.send(tnx);
  }
});
////Serverinfo////
client.on("message", message => {
  if (message.content.startsWith(prefix + "serverinfo")) {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    var EMBED = new Discord.MessageEmbed()
      .addField("Server Name", `${message.guild.name}`)
      .addField("Server Id", `${message.guild.id}`)
      .addField("Guild Owner", `${message.guild.owner}`)
      .addField("Boosts", `${message.guild.premiumSubscriptionCount}`)
      .addField("Channels", `${message.guild.channels.cache.size} Channels`)
      .addField("Roles", `${message.guild.roles.cache.size} Roles`)
      .addField("Members", `${message.guild.memberCount} Members`)
      .setThumbnail(message.guild.iconURL())
      .setColor(callicolor);
    message.channel.send(EMBED);
  }
});
////User info////
client.on("message", prof => {
  if (prof.content.startsWith(prefix + "userinfo")) {
    if (cooldown.has(prof.author.id)) {
      return prof.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(prof.author.id);
    setTimeout(() => {
      cooldown.delete(prof.author.id);
    }, cdtime * 1000);
    var professor = new Discord.MessageEmbed()
      .setThumbnail(prof.member.user.displayAvatarURL({ dynamic: true }))
      .setColor(callicolor)
      .addField("Usernaem", `<@${prof.author.id}>`)
      .addField("User Id", `${prof.author.id}`)
      .addField(
        "Joined Server At",
        moment(prof.joinedAt).format("D/M/YYYY h:mm a"),
        true
      )
      .addField("Create User", prof.author.createdAt.toLocaleString());
    prof.channel.send(professor);
  }
});
////Lock Command////
client.on("message", message => {
  if (message.content.startsWith(prefix + "lock")) {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS"))
      return message.channel.send(
        "**You must have a higher role use this command**"
      );
    message.channel
      .createOverwrite(message.guild.id, { SEND_MESSAGES: false })
      .then(() => {
        const embed = new Discord.MessageEmbed()
          .setDescription(
            `
🔒 A channel has been locked.
Channel: <#${message.channel.id}>
Moderator: <@${message.author.id}>
**Reason**
Not-Provided
          `
          )
          .setColor(callicolor);
        return message.channel.send(embed);
      });
  }
});
////Unlock Command////
client.on("message", message => {
  if (message.content.startsWith(prefix + "unlock")) {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.channel.send(
        "**You must have a higher role use this command**"
      );
    message.channel
      .createOverwrite(message.guild.id, { SEND_MESSAGES: true })
      .then(() => {
        const embed = new Discord.MessageEmbed()
          .setDescription(
            `
🔒 A channel has been unloked.
Channel: <#${message.channel.id}>
Moderator: <@${message.author.id}>
**Reason**
Not-Provided
          
          `
          )
          .setColor(callicolor);
        return message.channel.send(embed);
      });
  }
});
////Kick And Ban Command////
client.on("message", async message => {
  if (
    message.author.bot ||
    !message.guild ||
    !message.content.startsWith(prefix)
  )
    return;
  const args = message.content
      .slice(prefix.length)
      .trim()
      .split(/ +/),
    commandName = args.shift().toLowerCase();
  if (["ban", "kick"].includes(commandName)) {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let mode = commandName;
    if (
      !message.member.hasPermission(
        mode == "kick" ? "KICK_MEMBERS" : "BAN_MEMBERS"
      )
    )
      return message.channel.send(
        "**You must have a higher role use this command**"
      );
    let user = message.guild.member(
      message.mentions.users.first() ||
        message.guild.members.cache.find(x => x.id == args[0])
    );
    if (!user) return message.channel.send("** Member not found!**");
    let bot = message.guild.member(client.user);
    if (user.user.id == client.user.id) return message.channel.send("lol no");
    if (user.user.id == message.guild.owner.id)
      return message.channel.send(`** You can't ${mode} the owner!**`);
    if (
      user.roles.highest.position >= message.member.roles.highest.position &&
      message.author.id !== message.guild.ownerID
    )
      return message.channel.send(
        `** You can't ${mode} people higher ranked than yourself!**`
      );
    if (user.roles.highest.position >= bot.roles.highest.position)
      return message.channel.send(
        `** I can't ${mode} people who are higher ranked than me!**`
      );
    if (!user[`${mode == "ban" ? "bann" : mode}able`])
      return message.channel.send(`** Specified user is not ${mode}able.**`);
    user[mode](
      mode == "ban"
        ? { days: 7, reason: `Banned by ${message.author.tag}` }
        : `Kicked by ${message.author.tag}`
    )
      .then(() =>
        message.channel.send(
          `**✅ ${message.author.tag} ${
            mode == "ban" ? "banned" : mode
          } from the server! ✈️**`
        )
      )
      .catch(console.error);
  }
});
////Un Ban Command////
client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command == prefix + "unban") {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (args == "all") {
      message.guild.fetchBans().then(zg => {
        zg.forEach(JxA => {
          message.guild.unban(JxA);
        });
      });
      return message.channel.send("**🟢 Unban all members **");
    }
    if (!args)
      return message.channel.send("**Please Type the member ID / all**");
    message.guild
      .unban(args)
      .then(m => {
        message.channel.send(`**🟢 Unban this member ${m.username}**`);
      })
      .catch(stry => {
        message.channel.send(
          `**I can't find that person \`${args}\` in ban list**`
        );
      });
  }
});
////Tokin////

client.login("")


Code By Respect.


