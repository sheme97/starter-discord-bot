require('dotenv').config()

const TOKEN = process.env.TOKEN;
const token = process.env.NEW_ENV;
const { Client, Events, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const express = require('express');
const app = express();
const axios = require('axios');
//const axios2 = require('axios');
const retry = require('axios-retry-after');
const cron = require('node-cron');

// Create a new client instance
//const client = new Client({
//    intents: [
//        GatewayIntentBits.Guilds,
//        GatewayIntentBits.GuildMessages,
//        GatewayIntentBits.MessageContent
//    ]
//});
//client.once(Events.ClientReady, c => {
//    console.log(`Ready! Logged in as ${c.user.tag}`);
//});

//client.login(TOKEN);

const discord_api = axios.create({
    baseURL: 'https://discord.com/api/',
    timeout: 30000,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        "Access-Control-Allow-Headers": "Authorization",
        "Authorization": `${token}`
    }
});
discord_api.interceptors.response.use(null, retry(discord_api))

const discord_api_bot = axios.create({
    baseURL: 'https://discord.com/api/',
    timeout: 30000,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        "Access-Control-Allow-Headers": "Authorization",
        "Authorization": `Bot ${TOKEN}`
    }
});
discord_api_bot.interceptors.response.use(null, retry(discord_api_bot))

const chSource = [
    '838798779003568158', '838798794844930078', '790588126615175180', '790588125327523860', '790588128250953758', '790588130796896286', '790588132256776222', '790588129232814092', '790588133666324510', '790588135071154176', '790588136547680276', '790588138657153075', '790588137528098827', '790588140145868860', '790588141336657920', '790588142591803422'
];

const chDest = [
    '1076409686489829386', '1076409549780688966', '1076409770669510697', '1076409711475294309', '1076409790084948049', '1076409829318463539', '1076409869474734190', '1076409805964591144', '1076409930602516510', '1076409979470352384', '1076410028648570890', '1076410094583021669', '1076410052430282852', '1076410121283977227', '1076410145086636043', '1076410168679612497'
]

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

async function forwardMessage(channel, res, idx) {
    //let res = await discord_api.get(url);
    //console.log('url', url);
    if (res.data) {
        const len = res.data.length;
        
        if (len > 0) {
            const sortRes = res.data.sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));
            for (let resp of sortRes) {
                let content = resp.content.split('||')[0];
                console.log('send channel', channel);
                console.log('content', content);
                //channel.send(content);
                let resAxios = await discord_api_bot.post(`/channels/${channel}/messages`, {
                    content: content,
                });

                //console.log('res', res.data);

                const receivedEmbed = resp.embeds[0];
                if (receivedEmbed) {
                    const exampleEmbed = EmbedBuilder.from(receivedEmbed);
                    console.log('send channel2', channel);
                    //channel.send({ embeds: [exampleEmbed] });
                    let resAxios2 = await discord_api_bot.post(`/channels/${channel}/messages`, {
                        embeds: [exampleEmbed],
                    });
                }
            }
            ClassWithStaticProperty.beforeValue[idx] = sortRes[len - 1].id ?? 0;
        }            
    }
}


async function runFunction() {
    console.log('ClassWithStaticProperty.beforeValue', ClassWithStaticProperty.beforeValue);
    let url = '';
    let urlTemp = [];
    for (let x = 0; x < 16; x++) {
        if (ClassWithStaticProperty.beforeValue[x] === 0) {
            url = `/channels/${chSource[x]}/messages?limit=100`;
        }
        else {
            url = `/channels/${chSource[x]}/messages?limit=100&after=${ClassWithStaticProperty.beforeValue[x]}`;
        }
        //const channel = client.channels.cache.get(chDest[x]);
        //const forward = await forwardMessage(chDest[x], url, x);
        urlTemp.push(discord_api.get(url));
    }
    Promise.all(urlTemp).then(axios.spread((obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8,
        obj9, obj10, obj11, obj12, obj13, obj14, obj15, obj16) => {
        // Both requests are now complete
        forwardMessage(chDest[0], obj1, 0);
        forwardMessage(chDest[1], obj2, 1);
        forwardMessage(chDest[2], obj3, 2);
        forwardMessage(chDest[3], obj4, 3);
        forwardMessage(chDest[4], obj5, 4);
        forwardMessage(chDest[5], obj6, 5);
        forwardMessage(chDest[6], obj7, 6);
        forwardMessage(chDest[7], obj8, 7);
        forwardMessage(chDest[8], obj9, 8);
        forwardMessage(chDest[9], obj10, 9);
        forwardMessage(chDest[10], obj11, 10);
        forwardMessage(chDest[11], obj12, 11);
        forwardMessage(chDest[12], obj13, 12);
        forwardMessage(chDest[13], obj14, 13);
        forwardMessage(chDest[14], obj15, 14);
        forwardMessage(chDest[15], obj16, 15);
    }));
}

app.get('/', async (req, res) => {
    return res.send('Follow documentation ')
})

app.get('/newMessage', async (req, res) => {
    
    runFunction();
    
    
    
    return res.send('Done !')
})

app.get('/check', async (req, res) => {

    console.log('discord_api', discord_api);    
    console.log('discord_api_bot', discord_api_bot);
    console.log('discord_api', discord_api.toString());
    console.log('discord_api_bot', discord_api_bot.toString());

    return res.send('ok');
})

app.get('/check1', async (req, res) => {

    const result = await discord_api.get(`/channels/${chSource[0]}/messages?limit=100`);
    console.log('result', result.data);

    return res.send(result.data);
})

app.listen(8999, () => {

})

// Schedule tasks to be run on the server.
//cron.schedule('*/1 * * * *', function () {
//    console.log('Running cronjobs');
//    runFunction();
//});