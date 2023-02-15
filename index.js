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
    '814772719542599680', '814772747141382155', '790588103261552651', '790588104939143188', '790588106112761876', '790588107359649802', '790588108961611878', '790588110504853534', '790588111813214208', '790588112715644990', '790588114216288256', '790588115139559435', '790588116925939812', '790588118209789955', '790588119895769107', '790588121451593779'
];

const chDest = [
    //'1074588678330007582', '1074646341474594847', '1074646376572538881', '1074646409816576051', '1074646441986887770', '1074646472500457492', '1074646511679459358', '1074646551273689129', '1074646593107677295', '1074646621301788752', '1074646637059772457', '1074646663836213330', '1074646678444982292', '1074646705850548255', '1074646735386857502', '1074646748577931384'
    '1075252834846638080', '1075252888814768168', '1075259678809935992', '1075259719670841394', '1075259743335096370', '1075259767737561200', '1075259786339291201', '1075259812637585471', '1075259840567451699', '1075260184328421399', '1075260208357584936', '1075260228813205514', '1075260239923908648', '1075260261755277352', '1075260285369196545', '1075260330306961428'
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
    axios.all(urlTemp).then(axios.spread((obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8,
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

app.listen(8999, () => {

})

// Schedule tasks to be run on the server.
cron.schedule('*/1 * * * *', function () {
    console.log('Running cronjobs');
    runFunction();
});