require('dotenv').config()

const TOKEN = process.env.TOKEN;
const token = process.env.NEW_ENV;
const { Client, Events, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const express = require('express');
const app = express();
const axios = require('axios');

const chSource = [
    '814772719542599680', '814772747141382155', '790588103261552651', '790588104939143188', '790588106112761876', '790588107359649802', '790588108961611878', '790588110504853534', '790588111813214208', '790588112715644990', '790588114216288256', '790588115139559435', '790588116925939812', '790588118209789955', '790588119895769107', '790588121451593779'
];

const chDest = [
    '1074588678330007582', '1074646341474594847', '1074646376572538881', '1074646409816576051', '1074646441986887770', '1074646472500457492', '1074646511679459358', '1074646551273689129', '1074646593107677295', '1074646621301788752', '1074646637059772457', '1074646663836213330', '1074646678444982292', '1074646705850548255', '1074646735386857502', '1074646748577931384'
]

// Create a new client instance
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

class ClassWithStaticProperty {
    static beforeValue = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ];
    //static staticMethod() {
    //    return 'static method has been called.';
    //}
    //static {
    //    console.log('Class static initialization block called');
    //}
}

async function forwardMessage(discord_api, channel, url, idx) {
    let res = await discord_api.get(url);
    console.log('url', url);
    if (res.data) {
        const len = res.data.length;
        
        if (len > 0) {
            const sortRes = res.data.sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));
            for (let resp of sortRes) {
                let content = resp.content.split('||')[0];

                channel.send(content);

                const receivedEmbed = resp.embeds[0];
                if (receivedEmbed) {
                    const exampleEmbed = EmbedBuilder.from(receivedEmbed);

                    channel.send({ embeds: [exampleEmbed] });
                }
            }
            ClassWithStaticProperty.beforeValue[idx] = sortRes[len - 1].id ?? 0;
        }            
    }
}

client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.login(TOKEN);

app.get('/', async (req, res) => {
    return res.send('Follow documentation ')
})

app.get('/newMessage', async (req, res) => {
    const discord_api = axios.create({
        baseURL: 'https://discord.com/api/',
        timeout: 3000,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
            "Access-Control-Allow-Headers": "Authorization",
            "Authorization": `${token}`
        }
    });
    console.log('ClassWithStaticProperty.beforeValue', ClassWithStaticProperty.beforeValue);
    let url = '';

    for (let x = 0; x < 16; x++) {
        if (ClassWithStaticProperty.beforeValue[x] === 0) {
            url = `/channels/${chSource[x]}/messages?limit=100`;
        }
        else {
            url = `/channels/${chSource[x]}/messages?limit=100&after=${ClassWithStaticProperty.beforeValue[x]}`;
        }
        const channel = client.channels.cache.get(chDest[x]);
        await forwardMessage(discord_api, channel, url, x);
    }
    
    return res.send('Done !')
})

app.listen(8999, () => {

})