
//----------

import { } from 'dotenv/config';
const TOKEN = process.env.TOKEN;
const NEW_ENV = process.env.NEW_ENV
import { Client, Events, GatewayIntentBits } from 'discord.js';

// Create a new client instance
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.login(TOKEN);

//-------------
import selfcore from "selfcore";
const gateway = new selfcore.Gateway(NEW_ENV);

gateway.on("message", m => {
    console.log('message in');
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
