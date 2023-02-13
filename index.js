
// const { clientId, guildId, token, publicKey } = require('./config.json');
require('dotenv').config()
const APPLICATION_ID = process.env.APPLICATION_ID 
const TOKEN = process.env.TOKEN 
const PUBLIC_KEY = process.env.PUBLIC_KEY || 'not set'
const GUILD_ID = process.env.GUILD_ID 


const axios = require('axios')
const express = require('express');
const { InteractionType, InteractionResponseType, verifyKeyMiddleware } = require('discord-interactions');


const app = express();
// app.use(bodyParser.json());

const discord_api = axios.create({
  baseURL: 'https://discord.com/api/',
  timeout: 3000,
  headers: {
	"Access-Control-Allow-Origin": "*",
	"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
	"Access-Control-Allow-Headers": "Authorization",
	"Authorization": `Bot ${TOKEN}`
  }
});




app.post('/interactions', verifyKeyMiddleware(PUBLIC_KEY), async (req, res) => {
  const interaction = req.body;

  if (interaction.type === InteractionType.APPLICATION_COMMAND) {
    console.log(interaction.data.name)
    if(interaction.data.name == 'yo'){
      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: `Yo ${interaction.member.user.username}!`,
        },
      });
    }

    if(interaction.data.name == 'dm'){
      // https://discord.com/developers/docs/resources/user#create-dm
      let c = (await discord_api.post(`/users/@me/channels`,{
        recipient_id: interaction.member.user.id
      })).data
      try{
        // https://discord.com/developers/docs/resources/channel#create-message
        let res = await discord_api.post(`/channels/${c.id}/messages`,{
          content:'Yo! I got your slash command. I am not able to respond to DMs just slash commands.',
        })
        console.log(res.data)
      }catch(e){
        console.log(e)
      }

      return res.send({
        // https://discord.com/developers/docs/interactions/receiving-and-responding#responding-to-an-interaction
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data:{
          content:'👍'
        }
      });
    }
  }

});



app.get('/register_commands', async (req,res) =>{
  let slash_commands = [
    {
      "name": "yo",
      "description": "replies with Yo!",
      "options": []
    },
    {
      "name": "dm",
      "description": "sends user a DM",
      "options": []
    }
  ]
  try
  {
    // api docs - https://discord.com/developers/docs/interactions/application-commands#create-global-application-command
    let discord_response = await discord_api.put(
      `/applications/${APPLICATION_ID}/guilds/${GUILD_ID}/commands`,
      slash_commands
    )
    console.log(discord_response.data)
    return res.send('commands have been registered')
  }catch(e){
    console.error(e.code)
    console.error(e.response?.data)
    return res.send(`${e.code} error from discord`)
  }
})


app.get('/', async (req,res) =>{
  return res.send('Follow documentation ')
})


app.listen(8999, () => {

})

//-------
//import { } from 'dotenv/config';
//require('dotenv').config()
const NEW_ENV = process.env.NEW_ENV
const { Client, Events, GatewayIntentBits } = require('discord.js')
//import { Client, Events, GatewayIntentBits } from 'discord.js';
//const axios = require('axios')

// Create a new client instance
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.login(TOKEN);

//-------------
//const { selfcore } = require('./self-core.mjs')
////import selfcore from './self-core.mjs';
//selfcore.run();
import('./self-core.mjs').then(mod => {
    const gateway = new mod.selfCore.Gateway(NEW_ENV);

    gateway.on("message", m => {
        if (m.channel_id === "1074605389926125600") { //discord server 2
            let content = m.content.split('||')[0];
            const channel = client.channels.cache.get('1074588551301300227');
            channel.send(content);
        }
        if (m.channel_id === "814772719542599680") { //rare items
            let content = m.content.split('||')[0];
            let embed = { embeds: [m.embeds[0]] };
            const channel = client.channels.cache.get('1074588678330007582');
            channel.send(content);
            channel.send(embed);
        }
        if (m.channel_id === "814772747141382155") { //no enchant
            let content = m.content.split('||')[0];
            let embed = { embeds: [m.embeds[0]] };
            const channel = client.channels.cache.get('1074646341474594847');
            channel.send(content);
            channel.send(embed);
        }
        if (m.channel_id === "790588103261552651") { //anti mage
            let content = m.content.split('||')[0];
            let embed = { embeds: [m.embeds[0]] };
            const channel = client.channels.cache.get('1074646376572538881');
            channel.send(content);
            channel.send(embed);
        }
        if (m.channel_id === "790588104939143188") { //arcane
            let content = m.content.split('||')[0];
            let embed = { embeds: [m.embeds[0]] };
            const channel = client.channels.cache.get('1074646409816576051');
            channel.send(content);
            channel.send(embed);
        }
        if (m.channel_id === "790588106112761876") { //arch
            let content = m.content.split('||')[0];
            let embed = { embeds: [m.embeds[0]] };
            const channel = client.channels.cache.get('1074646441986887770');
            channel.send(content);
            channel.send(embed);
        }
        if (m.channel_id === "790588107359649802") { //armor
            let content = m.content.split('||')[0];
            let embed = { embeds: [m.embeds[0]] };
            const channel = client.channels.cache.get('1074646472500457492');
            channel.send(content);
            channel.send(embed);
        }
        if (m.channel_id === "790588108961611878") { //armor breaking
            let content = m.content.split('||')[0];
            let embed = { embeds: [m.embeds[0]] };
            const channel = client.channels.cache.get('1074646511679459358');
            channel.send(content);
            channel.send(embed);
        }
        if (m.channel_id === "790588110504853534") { //blasphemy
            let content = m.content.split('||')[0];
            let embed = { embeds: [m.embeds[0]] };
            const channel = client.channels.cache.get('1074646551273689129');
            channel.send(content);
            channel.send(embed);
        }
        if (m.channel_id === "790588111813214208") { //divine blessing
            let content = m.content.split('||')[0];
            let embed = { embeds: [m.embeds[0]] };
            const channel = client.channels.cache.get('1074646593107677295');
            channel.send(content);
            channel.send(embed);
        }
        if (m.channel_id === "790588112715644990") { //insight
            let content = m.content.split('||')[0];
            let embed = { embeds: [m.embeds[0]] };
            const channel = client.channels.cache.get('1074646621301788752');
            channel.send(content);
            channel.send(embed);
        }
        if (m.channel_id === "790588114216288256") { //magic
            let content = m.content.split('||')[0];
            let embed = { embeds: [m.embeds[0]] };
            const channel = client.channels.cache.get('1074646637059772457');
            channel.send(content);
            channel.send(embed);
        }
        if (m.channel_id === "790588115139559435") { //morale
            let content = m.content.split('||')[0];
            let embed = { embeds: [m.embeds[0]] };
            const channel = client.channels.cache.get('1074646663836213330');
            channel.send(content);
            channel.send(embed);
        }
        if (m.channel_id === "790588116925939812") { //sharp
            let content = m.content.split('||')[0];
            let embed = { embeds: [m.embeds[0]] };
            const channel = client.channels.cache.get('1074646678444982292');
            channel.send(content);
            channel.send(embed);
        }
        if (m.channel_id === "790588118209789955") { //sharp blade
            let content = m.content.split('||')[0];
            let embed = { embeds: [m.embeds[0]] };
            const channel = client.channels.cache.get('1074646705850548255');
            channel.send(content);
            channel.send(embed);
        }
        if (m.channel_id === "790588119895769107") { //tenacity
            let content = m.content.split('||')[0];
            let embed = { embeds: [m.embeds[0]] };
            const channel = client.channels.cache.get('1074646735386857502');
            channel.send(content);
            channel.send(embed);
        }
        if (m.channel_id === "790588121451593779") { //zeal
            let content = m.content.split('||')[0];
            let embed = { embeds: [m.embeds[0]] };
            const channel = client.channels.cache.get('1074646748577931384');
            channel.send(content);
            channel.send(embed);
        }
    });
})