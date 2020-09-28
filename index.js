const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const command = require('./command')

client.on('ready', () => {
  command(client, 'ban', (message) => {
    const { member, mentions } = message

    const tag = `<@${member.id}>`

    if (
      member.hasPermission('ADMINISTRATOR') ||
      member.hasPermission('BAN_MEMBERS')
    ) {
      const target = mentions.users.first()
      if (target) {
        const targetMember = message.guild.members.cache.get(target.id)
        targetMember.ban()
        message.channel.send(`${tag} Member telah diBanned!`)
      } else {
        message.channel.send(`${tag} Tag seseorang yang akan di banned!.`)
      }
    } else {
      message.channel.send(
        `${tag} Anda tidak memiliki izin untuk menggunakan perintah ini!.`
      )
    }
  })

  command(client, 'kick', (message) => {
    const { member, mentions } = message

    const tag = `<@${member.id}>`

    if (
      member.hasPermission('ADMINISTRATOR') ||
      member.hasPermission('KICK_MEMBERS')
    ) {
      const target = mentions.users.first()
      if (target) {
        const targetMember = message.guild.members.cache.get(target.id)
        targetMember.kick()
        message.channel.send(`${tag} Member telah dikick.`)
      } else {
        message.channel.send(`${tag} Tag seseorang yang akan di kick.`)
      }
    } else {
      message.channel.send(
        `${tag} Anda tidak memiliki izin untuk menggunakan perintah ini!`
      )
    }
  })
})

client.login(config.token)