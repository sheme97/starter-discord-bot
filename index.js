require('dotenv').config()

const TOKEN = process.env.TOKEN;
const token = process.env.NEW_ENV;
const { EmbedBuilder } = require('discord.js');
const express = require('express');
const app = express();
const axios = require('axios');
const retry = require('axios-retry-after');

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
}

async function forwardMessage(channel, res, idx) {
    let result = [];
    if (res.data) {
        const len = res.data.length;        
        if (len > 0) {
            const sortRes = res.data.sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));
            for (let resp of sortRes) {
                let content = resp.content.split('||')[0];
                console.log('send channel', channel);
                console.log('content', content);
                const resAxios = await discord_api_bot.post(`/channels/${channel}/messages`, {
                    content: content,
                });

                const receivedEmbed = resp.embeds[0];
                if (receivedEmbed) {
                    const exampleEmbed = EmbedBuilder.from(receivedEmbed);
                    console.log('send channel2', channel);
                    //channel.send({ embeds: [exampleEmbed] });
                    const resAxios2 = await discord_api_bot.post(`/channels/${channel}/messages`, {
                        embeds: [exampleEmbed],
                    });
                }
            }
            //await Promise.all(requestData);
            ClassWithStaticProperty.beforeValue[idx] = sortRes[len - 1].id ?? 0;
        }    
        result.push(len);
    }
    return result;
}

async function preRun() {
    let ret = [];
    try {
        let urlTemp = [];
        const data1 = discord_api.get(`/channels/${chSource[0]}/messages?limit=100`);
        const data2 = discord_api.get(`/channels/${chSource[1]}/messages?limit=100`);
        urlTemp.push(data1);
        urlTemp.push(data2);
        const data3 = await Promise.all(urlTemp);
        var now = new Date();
        var then = new Date(now.setMinutes(now.getMinutes() - 15));
        //console.log('data1.data', JSON.stringify(data1.data));
        const filteredData = data3.map(word => ({ data: word.data.filter(x => new Date(x.timestamp) >= then) }));
        ret = filteredData;
    }
    catch (error) {
        console.log(error);
    }
    return ret;
}

async function runFunction() {
    try {
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
            urlTemp.push(discord_api.get(url));
        }
        const data1 = await Promise.all(urlTemp);
        const now = new Date();
        const then = new Date(now.setMinutes(now.getMinutes() - 15)); //filter last 15 minutes

        const filteredData = data1.map(word => ({ data: word.data.filter(x => new Date(x.timestamp) >= then) }));

        const data2 = await Promise.all([
            forwardMessage(chDest[0], filteredData[0], 0),
            forwardMessage(chDest[1], filteredData[1], 1),
            forwardMessage(chDest[2], filteredData[2], 2),
            forwardMessage(chDest[3], filteredData[3], 3),
            forwardMessage(chDest[4], filteredData[4], 4),
            forwardMessage(chDest[5], filteredData[5], 5),
            forwardMessage(chDest[6], filteredData[6], 6),
            forwardMessage(chDest[7], filteredData[7], 7),
            forwardMessage(chDest[8], filteredData[8], 8),
            forwardMessage(chDest[9], filteredData[9], 9),
            forwardMessage(chDest[10], filteredData[10], 10),
            forwardMessage(chDest[11], filteredData[11], 11),
            forwardMessage(chDest[12], filteredData[12], 12),
            forwardMessage(chDest[13], filteredData[13], 13),
            forwardMessage(chDest[14], filteredData[14], 14),
            forwardMessage(chDest[15], filteredData[15], 15)
        ]);
        console.log('runFunction ok');
    }
    catch (error) {
        console.log(error);
    }
    return 'runFunction ok';
}

app.get('/', async (req, res) => {
    return res.send('Follow documentation ')
})

//app.get('/preRun', async (req, res) => {
//    console.time("response time")
//    const ret = await preRun();


//    console.log('done');
//    console.timeEnd("response time")
//    return res.send(ret)
//})

app.get('/newMessage', async (req, res) => {
    console.time("response time")
    await runFunction();
    
    
    console.log('done');
    console.timeEnd("response time")
    return res.send('Done !')
})

app.get('/check', async (req, res) => {
    const x = 0;
    const result = await check(x);

    return res.send(`${result.length} data updated`);
})

app.get('/check1', async (req, res) => {
    const x = 1;
    const result = await check(x);

    return res.send(`${result.length} data updated`);
})

app.get('/check2', async (req, res) => {
    const x = 2;
    const result = await check(x);

    return res.send(`${result.length} data updated`);
})

app.get('/check3', async (req, res) => {
    const x = 3;
    const result = await check(x);

    return res.send(`${result.length} data updated`);
})

app.get('/check4', async (req, res) => {
    const x = 4;
    const result = await check(x);

    return res.send(`${result.length} data updated`);
})

app.get('/check5', async (req, res) => {
    const x = 5;
    const result = await check(x);

    return res.send(`${result.length} data updated`);
})

app.get('/check6', async (req, res) => {
    const x = 6;
    const result = await check(x);

    return res.send(`${result.length} data updated`);
})

app.get('/check7', async (req, res) => {
    const x = 7;
    const result = await check(x);

    return res.send(`${result.length} data updated`);
})

app.get('/check8', async (req, res) => {
    const x = 8;
    const result = await check(x);

    return res.send(`${result.length} data updated`);
})

app.get('/check9', async (req, res) => {
    const x = 9;
    const result = await check(x);

    return res.send(`${result.length} data updated`);
})

app.get('/check10', async (req, res) => {
    const x = 10;
    const result = await check(x);
    
    return res.send(`${result.length} data updated`);
})

app.get('/check11', async (req, res) => {
    const x = 11;
    const result = await check(x);

    return res.send(`${result.length} data updated`);
})

app.get('/check12', async (req, res) => {
    const x = 12;
    const result = await check(x);

    return res.send(`${result.length} data updated`);
})

app.get('/check13', async (req, res) => {
    const x = 13;
    const result = await check(x);

    return res.send(`${result.length} data updated`);
})

app.get('/check14', async (req, res) => {
    const x = 14;
    const result = await check(x);

    return res.send(`${result.length} data updated`);
})

app.get('/check15', async (req, res) => {
    const x = 15;
    const result = await check(x);

    return res.send(`${result.length} data updated`);
})

async function check(x) {
    let resultCheck = [];
    try {
        console.time("response time")
        console.log('ClassWithStaticProperty.beforeValue', ClassWithStaticProperty.beforeValue);
        if (ClassWithStaticProperty.beforeValue[x] === 0) {
            url = `/channels/${chSource[x]}/messages?limit=100`;
        }
        else {
            url = `/channels/${chSource[x]}/messages?limit=100&after=${ClassWithStaticProperty.beforeValue[x]}`;
        }
        const result = await discord_api.get(url);
        const result2 = await forwardMessage(chDest[x], result, x);
        console.log('ClassWithStaticProperty.beforeValue after', ClassWithStaticProperty.beforeValue);
        console.timeEnd("response time")
        resultCheck = result2;
    }
    catch (error) {
        console.log(error)
    }
    
    return resultCheck;
}

app.listen(8999, () => {

})