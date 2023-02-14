require('dotenv').config()
const WebSocket = require('ws')
const ws = new WebSocket('wss://gateway.discord.gg/?v=10&encoding=json')
const fetch = require('node-fetch')
let interval = 0;
TOKEN = process.env.TOKEN

const { Client, Events, GatewayIntentBits, EmbedBuilder } = require('discord.js');

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

token = process.env.NEW_ENV
payload = {
    op: 2,
    d: {
        token: token,
        intents: 131071,
        properties: {
            $os: 'linux',
            $browser: 'chrome',
            $device: 'chrome'
        },
        presence: {
            activities: [{
                name: "Cards Against Humanity",
                type: 0
            }],
            status: "dnd",
            since: 91879201,
            afk: false
        },
    }
}

ws.on('open', function open(data) {
    ws.send(JSON.stringify(payload))
})

ws.addEventListener('message', function (event) {
    const payload = event.data
    let parsePayload = JSON.parse(payload);
    //console.log(parsePayload);
    console.log('----------message----------');
    //if (parsePayload.t === 'MESSAGE_CREATE' && parsePayload.JSON.stringify(JSON.stringify(d.embeds)) !== []) {
    //    if (parsePayload.d.channel_id === '1074605389926125600') { //discord server 2
    //        let URL = `https://discord.com/api/v9/channels/1074588551301300227/messages`;
    //        var requestOptions = {
    //            method: 'POST',
    //            headers: {
    //                "Authorization": `${token}`,
    //                "Content-Type": "application/json"
    //            },
    //            body: JSON.stringify({
    //                "content": parsePayload.d.content,
    //                "tts": false,
    //                "embeds": parsePayload.JSON.stringify(JSON.stringify(d.embeds))
    //            })
    //        };

    //        fetch(URL, requestOptions)
    //            .then(response => response.text())
    //            .then(console.log)
    //            .catch(console.error);
    //    }
    //    else if (parsePayload.d.channel_id === '814772719542599680') { //rare items
    //        let URL = `https://discord.com/api/v9/channels/1074588678330007582/messages`;
    //        var requestOptions = {
    //            method: 'POST',
    //            headers: {
    //                "Authorization": `${token}`,
    //                "Content-Type": "application/json"
    //            },
    //            body: JSON.stringify({
    //                "content": parsePayload.d.content,
    //                "tts": false,
    //                "embeds": [parsePayload.JSON.stringify(JSON.stringify(d.embeds))[0]]
    //            })
    //        };

    //        fetch(URL, requestOptions)
    //            .then(response => response.text())
    //            .then(console.log)
    //            .catch(console.error);
    //    }
    //    else if (parsePayload.d.channel_id === '814772747141382155') { //no enchant
    //        let URL = `https://discord.com/api/v9/channels/1074646341474594847/messages`;
    //        var requestOptions = {
    //            method: 'POST',
    //            headers: {
    //                "Authorization": `${token}`,
    //                "Content-Type": "application/json"
    //            },
    //            body: JSON.stringify({
    //                "content": parsePayload.d.content,
    //                "tts": false,
    //                "embeds": [parsePayload.JSON.stringify(JSON.stringify(d.embeds))[0]]
    //            })
    //        };

    //        fetch(URL, requestOptions)
    //            .then(response => response.text())
    //            .then(console.log)
    //            .catch(console.error);
    //    }
    //    else if (parsePayload.d.channel_id === '790588103261552651') { //anti mage
    //        let URL = `https://discord.com/api/v9/channels/1074646376572538881/messages`;
    //        var requestOptions = {
    //            method: 'POST',
    //            headers: {
    //                "Authorization": `${token}`,
    //                "Content-Type": "application/json"
    //            },
    //            body: JSON.stringify({
    //                "content": parsePayload.d.content,
    //                "tts": false,
    //                "embeds": [parsePayload.JSON.stringify(JSON.stringify(d.embeds))[0]]
    //            })
    //        };

    //        fetch(URL, requestOptions)
    //            .then(response => response.text())
    //            .then(console.log)
    //            .catch(console.error);
    //    }
    //    else if (parsePayload.d.channel_id === '790588104939143188') { //arcane
    //        let URL = `https://discord.com/api/v9/channels/1074646409816576051/messages`;
    //        var requestOptions = {
    //            method: 'POST',
    //            headers: {
    //                "Authorization": `${token}`,
    //                "Content-Type": "application/json"
    //            },
    //            body: JSON.stringify({
    //                "content": parsePayload.d.content,
    //                "tts": false,
    //                "embeds": [parsePayload.JSON.stringify(JSON.stringify(d.embeds))[0]]
    //            })
    //        };

    //        fetch(URL, requestOptions)
    //            .then(response => response.text())
    //            .then(console.log)
    //            .catch(console.error);
    //    }
    //    else if (parsePayload.d.channel_id === '790588106112761876') { //arch
    //        let URL = `https://discord.com/api/v9/channels/1074646441986887770/messages`;
    //        var requestOptions = {
    //            method: 'POST',
    //            headers: {
    //                "Authorization": `${token}`,
    //                "Content-Type": "application/json"
    //            },
    //            body: JSON.stringify({
    //                "content": parsePayload.d.content,
    //                "tts": false,
    //                "embeds": [parsePayload.JSON.stringify(JSON.stringify(d.embeds))[0]]
    //            })
    //        };

    //        fetch(URL, requestOptions)
    //            .then(response => response.text())
    //            .then(console.log)
    //            .catch(console.error);
    //    }
    //    else if (parsePayload.d.channel_id === '790588107359649802') { //armor
    //        let URL = `https://discord.com/api/v9/channels/1074646472500457492/messages`;
    //        var requestOptions = {
    //            method: 'POST',
    //            headers: {
    //                "Authorization": `${token}`,
    //                "Content-Type": "application/json"
    //            },
    //            body: JSON.stringify({
    //                "content": parsePayload.d.content,
    //                "tts": false,
    //                "embeds": [parsePayload.JSON.stringify(JSON.stringify(d.embeds))[0]]
    //            })
    //        };

    //        fetch(URL, requestOptions)
    //            .then(response => response.text())
    //            .then(console.log)
    //            .catch(console.error);
    //    }
    //    else if (parsePayload.d.channel_id === '790588108961611878') { //armor breaking
    //        let URL = `https://discord.com/api/v9/channels/1074646511679459358/messages`;
    //        var requestOptions = {
    //            method: 'POST',
    //            headers: {
    //                "Authorization": `${token}`,
    //                "Content-Type": "application/json"
    //            },
    //            body: JSON.stringify({
    //                "content": parsePayload.d.content,
    //                "tts": false,
    //                "embeds": [parsePayload.JSON.stringify(JSON.stringify(d.embeds))[0]]
    //            })
    //        };

    //        fetch(URL, requestOptions)
    //            .then(response => response.text())
    //            .then(console.log)
    //            .catch(console.error);
    //    }
    //    else if (parsePayload.d.channel_id === '790588110504853534') { //blasphemy
    //        let URL = `https://discord.com/api/v9/channels/1074646551273689129/messages`;
    //        var requestOptions = {
    //            method: 'POST',
    //            headers: {
    //                "Authorization": `${token}`,
    //                "Content-Type": "application/json"
    //            },
    //            body: JSON.stringify({
    //                "content": parsePayload.d.content,
    //                "tts": false,
    //                "embeds": [parsePayload.JSON.stringify(JSON.stringify(d.embeds))[0]]
    //            })
    //        };

    //        fetch(URL, requestOptions)
    //            .then(response => response.text())
    //            .then(console.log)
    //            .catch(console.error);
    //    }
    //    else if (parsePayload.d.channel_id === '790588111813214208') { //divine blessing
    //        let URL = `https://discord.com/api/v9/channels/1074646593107677295/messages`;
    //        var requestOptions = {
    //            method: 'POST',
    //            headers: {
    //                "Authorization": `${token}`,
    //                "Content-Type": "application/json"
    //            },
    //            body: JSON.stringify({
    //                "content": parsePayload.d.content,
    //                "tts": false,
    //                "embeds": [parsePayload.JSON.stringify(JSON.stringify(d.embeds))[0]]
    //            })
    //        };

    //        fetch(URL, requestOptions)
    //            .then(response => response.text())
    //            .then(console.log)
    //            .catch(console.error);
    //    }
    //    else if (parsePayload.d.channel_id === '790588111813214208') { //divine blessing
    //        let URL = `https://discord.com/api/v9/channels/1074646593107677295/messages`;
    //        var requestOptions = {
    //            method: 'POST',
    //            headers: {
    //                "Authorization": `${token}`,
    //                "Content-Type": "application/json"
    //            },
    //            body: JSON.stringify({
    //                "content": parsePayload.d.content,
    //                "tts": false,
    //                "embeds": [parsePayload.JSON.stringify(JSON.stringify(d.embeds))[0]]
    //            })
    //        };

    //        fetch(URL, requestOptions)
    //            .then(response => response.text())
    //            .then(console.log)
    //            .catch(console.error);
    //    }
    //    else if (parsePayload.d.channel_id === '790588112715644990') { //insight
    //        let URL = `https://discord.com/api/v9/channels/1074646621301788752/messages`;
    //        var requestOptions = {
    //            method: 'POST',
    //            headers: {
    //                "Authorization": `${token}`,
    //                "Content-Type": "application/json"
    //            },
    //            body: JSON.stringify({
    //                "content": parsePayload.d.content,
    //                "tts": false,
    //                "embeds": [parsePayload.JSON.stringify(JSON.stringify(d.embeds))[0]]
    //            })
    //        };

    //        fetch(URL, requestOptions)
    //            .then(response => response.text())
    //            .then(console.log)
    //            .catch(console.error);
    //    }
    //    else if (parsePayload.d.channel_id === '790588114216288256') { //magic
    //        let URL = `https://discord.com/api/v9/channels/1074646637059772457/messages`;
    //        var requestOptions = {
    //            method: 'POST',
    //            headers: {
    //                "Authorization": `${token}`,
    //                "Content-Type": "application/json"
    //            },
    //            body: JSON.stringify({
    //                "content": parsePayload.d.content,
    //                "tts": false,
    //                "embeds": [parsePayload.JSON.stringify(JSON.stringify(d.embeds))[0]]
    //            })
    //        };

    //        fetch(URL, requestOptions)
    //            .then(response => response.text())
    //            .then(console.log)
    //            .catch(console.error);
    //    }
    //    else if (parsePayload.d.channel_id === '790588115139559435') { //morale
    //        let URL = `https://discord.com/api/v9/channels/1074646663836213330/messages`;
    //        var requestOptions = {
    //            method: 'POST',
    //            headers: {
    //                "Authorization": `${token}`,
    //                "Content-Type": "application/json"
    //            },
    //            body: JSON.stringify({
    //                "content": parsePayload.d.content,
    //                "tts": false,
    //                "embeds": [parsePayload.JSON.stringify(JSON.stringify(d.embeds))[0]]
    //            })
    //        };

    //        fetch(URL, requestOptions)
    //            .then(response => response.text())
    //            .then(console.log)
    //            .catch(console.error);
    //    }
    //    else if (parsePayload.d.channel_id === '790588116925939812') { //sharp
    //        let URL = `https://discord.com/api/v9/channels/1074646678444982292/messages`;
    //        var requestOptions = {
    //            method: 'POST',
    //            headers: {
    //                "Authorization": `${token}`,
    //                "Content-Type": "application/json"
    //            },
    //            body: JSON.stringify({
    //                "content": parsePayload.d.content,
    //                "tts": false,
    //                "embeds": [parsePayload.JSON.stringify(JSON.stringify(d.embeds))[0]]
    //            })
    //        };

    //        fetch(URL, requestOptions)
    //            .then(response => response.text())
    //            .then(console.log)
    //            .catch(console.error);
    //    }
    //    else if (parsePayload.d.channel_id === '790588118209789955') { //sharp blade
    //        let URL = `https://discord.com/api/v9/channels/1074646705850548255/messages`;
    //        var requestOptions = {
    //            method: 'POST',
    //            headers: {
    //                "Authorization": `${token}`,
    //                "Content-Type": "application/json"
    //            },
    //            body: JSON.stringify({
    //                "content": parsePayload.d.content,
    //                "tts": false,
    //                "embeds": [parsePayload.JSON.stringify(JSON.stringify(d.embeds))[0]]
    //            })
    //        };

    //        fetch(URL, requestOptions)
    //            .then(response => response.text())
    //            .then(console.log)
    //            .catch(console.error);
    //    }
    //    else if (parsePayload.d.channel_id === '790588119895769107') { //tenacity
    //        let URL = `https://discord.com/api/v9/channels/1074646735386857502/messages`;
    //        var requestOptions = {
    //            method: 'POST',
    //            headers: {
    //                "Authorization": `${token}`,
    //                "Content-Type": "application/json"
    //            },
    //            body: JSON.stringify({
    //                "content": parsePayload.d.content,
    //                "tts": false,
    //                "embeds": [parsePayload.JSON.stringify(JSON.stringify(d.embeds))[0]]
    //            })
    //        };

    //        fetch(URL, requestOptions)
    //            .then(response => response.text())
    //            .then(console.log)
    //            .catch(console.error);
    //    }
    //    else if (parsePayload.d.channel_id === '790588121451593779') { //zeal
    //        let URL = `https://discord.com/api/v9/channels/1074646748577931384/messages`;
    //        var requestOptions = {
    //            method: 'POST',
    //            headers: {
    //                "Authorization": `${token}`,
    //                "Content-Type": "application/json"
    //            },
    //            body: JSON.stringify({
    //                "content": parsePayload.d.content,
    //                "tts": false,
    //                "embeds": [parsePayload.JSON.stringify(JSON.stringify(d.embeds))[0]] //let embed = { embeds: [m.embeds[0]] };
    //            })
    //        };

    //        fetch(URL, requestOptions)
    //            .then(response => response.text())
    //            .then(console.log)
    //            .catch(console.error);
    //    }
    //}
    //console.log(JSON.parse(payload.toString()))
})

ws.on('message', function incoming(data) {
    let payload = JSON.parse(data)
    const { t, event, op, d } = payload;

    switch (op) {
        case 10:
            const { heartbeat_interval } = d;
            interval = heartbeat(heartbeat_interval)
            break;
    }
    switch (t) {
        case "READY":
            if (t === "READY") {
                console.log('Bot is online!')
            }
            break;
        case "MESSAGE_CREATE":
            //console.log('d', d);
            console.log('---d---');
            let content = d.content.split('||')[0];
            //let embed = { embeds: [m.embeds[0]] };

            let embeds = JSON.stringify(d.embeds);
            //console.log('embeds', embeds);
            //var requestOptions = {
            //    method: 'POST',
            //    headers: {
            //        "Authorization": `${token}`,
            //        "Content-Type": "application/json"
            //    },
            //    body: JSON.stringify({
            //        "content": content,
            //        "tts": false,
            //        "embeds": []
            //    })
            //};
            //var requestOptions2 = {
            //    method: 'POST',
            //    headers: {
            //        "Authorization": `${token}`,
            //        "Content-Type": "application/json"
            //    },
            //    body: JSON.stringify({
            //        "tts": false,
            //        "embeds": embeds
            //    })
            //};
            //console.log('requestOptions', requestOptions);
            //console.log('requestOptions', requestOptions2);
            //let embeds = [];
            //if (JSON.stringify(d.embeds).length > 0) {
            //    embeds = JSON.stringify(JSON.stringify(d.embeds));
            //}
            //console.log('d', JSON.stringify(JSON.stringify(d.embeds)));
            if (d.channel_id === '1074605389926125600') { //discord server 2
                //let URL = `https://discord.com/api/v9/channels/1074588551301300227/messages`;                
                const channel = client.channels.cache.get('1074588551301300227');
                channel.send(content);

                const receivedEmbed = d.embeds[0];
                if (receivedEmbed) {
                    const exampleEmbed = EmbedBuilder.from(receivedEmbed);

                    channel.send({ embeds: [exampleEmbed] });
                }


                //fetch(URL, requestOptions2)
                //    .then(response => response.text())
                //    .then(console.log)
                //    .catch(console.error);
            }
            else if (d.channel_id === '814772719542599680') { //rare items
                //let URL = `https://discord.com/api/v9/channels/1074588678330007582/messages`;

                //fetch(URL, requestOptions)
                //    .then(response => response.text())
                //    .then(console.log)
                //    .catch(console.error);
                const channel = client.channels.cache.get('1074588678330007582');
                channel.send(content);
                //channel.send({ embeds: embeds });

                const receivedEmbed = d.embeds[0];
                if (receivedEmbed) {
                    const exampleEmbed = EmbedBuilder.from(receivedEmbed);

                    channel.send({ embeds: [exampleEmbed] });
                }
            }
            else if (d.channel_id === '814772747141382155') { //no enchant
                //let URL = `https://discord.com/api/v9/channels/1074646341474594847/messages`;

                //fetch(URL, requestOptions)
                //    .then(response => response.text())
                //    .then(console.log)
                //    .catch(console.error);
                const channel = client.channels.cache.get('1074646341474594847');
                channel.send(content);
                const receivedEmbed = d.embeds[0];
                if (receivedEmbed) {
                    const exampleEmbed = EmbedBuilder.from(receivedEmbed);

                    channel.send({ embeds: [exampleEmbed] });
                }
            }
            else if (d.channel_id === '790588103261552651') { //anti mage
                //let URL = `https://discord.com/api/v9/channels/1074646376572538881/messages`;

                //fetch(URL, requestOptions)
                //    .then(response => response.text())
                //    .then(console.log)
                //    .catch(console.error);
                const channel = client.channels.cache.get('1074646376572538881');
                channel.send(content);
                const receivedEmbed = d.embeds[0];
                if (receivedEmbed) {
                    const exampleEmbed = EmbedBuilder.from(receivedEmbed);

                    channel.send({ embeds: [exampleEmbed] });
                }
            }
            else if (d.channel_id === '790588104939143188') { //arcane
                //let URL = `https://discord.com/api/v9/channels/1074646409816576051/messages`;

                //fetch(URL, requestOptions)
                //    .then(response => response.text())
                //    .then(console.log)
                //    .catch(console.error);
                const channel = client.channels.cache.get('1074646409816576051');
                channel.send(content);
                const receivedEmbed = d.embeds[0];
                if (receivedEmbed) {
                    const exampleEmbed = EmbedBuilder.from(receivedEmbed);

                    channel.send({ embeds: [exampleEmbed] });
                }
            }
            else if (d.channel_id === '790588106112761876') { //arch
                //let URL = `https://discord.com/api/v9/channels/1074646441986887770/messages`;

                //fetch(URL, requestOptions)
                //    .then(response => response.text())
                //    .then(console.log)
                //    .catch(console.error);
                const channel = client.channels.cache.get('1074646441986887770');
                channel.send(content);
                const receivedEmbed = d.embeds[0];
                if (receivedEmbed) {
                    const exampleEmbed = EmbedBuilder.from(receivedEmbed);

                    channel.send({ embeds: [exampleEmbed] });
                }
            }
            else if (d.channel_id === '790588107359649802') { //armor
                //let URL = `https://discord.com/api/v9/channels/1074646472500457492/messages`;

                //fetch(URL, requestOptions)
                //    .then(response => response.text())
                //    .then(console.log)
                //    .catch(console.error);
                const channel = client.channels.cache.get('1074646472500457492');
                channel.send(content);
                const receivedEmbed = d.embeds[0];
                if (receivedEmbed) {
                    const exampleEmbed = EmbedBuilder.from(receivedEmbed);

                    channel.send({ embeds: [exampleEmbed] });
                }
            }
            else if (d.channel_id === '790588108961611878') { //armor breaking
                //let URL = `https://discord.com/api/v9/channels/1074646511679459358/messages`;

                //fetch(URL, requestOptions)
                //    .then(response => response.text())
                //    .then(console.log)
                //    .catch(console.error);
                const channel = client.channels.cache.get('1074646511679459358');
                channel.send(content);
                const receivedEmbed = d.embeds[0];
                if (receivedEmbed) {
                    const exampleEmbed = EmbedBuilder.from(receivedEmbed);

                    channel.send({ embeds: [exampleEmbed] });
                }
            }
            else if (d.channel_id === '790588110504853534') { //blasphemy
                //let URL = `https://discord.com/api/v9/channels/1074646551273689129/messages`;

                //fetch(URL, requestOptions)
                //    .then(response => response.text())
                //    .then(console.log)
                //    .catch(console.error);
                const channel = client.channels.cache.get('1074646551273689129');
                channel.send(content);
                const receivedEmbed = d.embeds[0];
                if (receivedEmbed) {
                    const exampleEmbed = EmbedBuilder.from(receivedEmbed);

                    channel.send({ embeds: [exampleEmbed] });
                }
            }
            else if (d.channel_id === '790588111813214208') { //divine blessing
                //let URL = `https://discord.com/api/v9/channels/1074646593107677295/messages`;

                //fetch(URL, requestOptions)
                //    .then(response => response.text())
                //    .then(console.log)
                //    .catch(console.error);
                const channel = client.channels.cache.get('1074646593107677295');
                channel.send(content);
                const receivedEmbed = d.embeds[0];
                if (receivedEmbed) {
                    const exampleEmbed = EmbedBuilder.from(receivedEmbed);

                    channel.send({ embeds: [exampleEmbed] });
                }
            }
            else if (d.channel_id === '790588112715644990') { //insight
                //let URL = `https://discord.com/api/v9/channels/1074646621301788752/messages`;

                //fetch(URL, requestOptions)
                //    .then(response => response.text())
                //    .then(console.log)
                //    .catch(console.error);
                const channel = client.channels.cache.get('1074646621301788752');
                channel.send(content);
                const receivedEmbed = d.embeds[0];
                if (receivedEmbed) {
                    const exampleEmbed = EmbedBuilder.from(receivedEmbed);

                    channel.send({ embeds: [exampleEmbed] });
                }
            }
            else if (d.channel_id === '790588114216288256') { //magic
                //let URL = `https://discord.com/api/v9/channels/1074646637059772457/messages`;

                //fetch(URL, requestOptions)
                //    .then(response => response.text())
                //    .then(console.log)
                //    .catch(console.error);
                const channel = client.channels.cache.get('1074646637059772457');
                channel.send(content);
                const receivedEmbed = d.embeds[0];
                if (receivedEmbed) {
                    const exampleEmbed = EmbedBuilder.from(receivedEmbed);

                    channel.send({ embeds: [exampleEmbed] });
                }
            }
            else if (d.channel_id === '790588115139559435') { //morale
                //let URL = `https://discord.com/api/v9/channels/1074646663836213330/messages`;

                //fetch(URL, requestOptions)
                //    .then(response => response.text())
                //    .then(console.log)
                //    .catch(console.error);
                const channel = client.channels.cache.get('1074646663836213330');
                channel.send(content);
                const receivedEmbed = d.embeds[0];
                if (receivedEmbed) {
                    const exampleEmbed = EmbedBuilder.from(receivedEmbed);

                    channel.send({ embeds: [exampleEmbed] });
                }
            }
            else if (d.channel_id === '790588116925939812') { //sharp
                //let URL = `https://discord.com/api/v9/channels/1074646678444982292/messages`;

                //fetch(URL, requestOptions)
                //    .then(response => response.text())
                //    .then(console.log)
                //    .catch(console.error);
                const channel = client.channels.cache.get('1074646678444982292');
                channel.send(content);
                const receivedEmbed = d.embeds[0];
                if (receivedEmbed) {
                    const exampleEmbed = EmbedBuilder.from(receivedEmbed);

                    channel.send({ embeds: [exampleEmbed] });
                }
            }
            else if (d.channel_id === '790588118209789955') { //sharp blade
                //let URL = `https://discord.com/api/v9/channels/1074646705850548255/messages`;

                //fetch(URL, requestOptions)
                //    .then(response => response.text())
                //    .then(console.log)
                //    .catch(console.error);
                const channel = client.channels.cache.get('1074646705850548255');
                channel.send(content);
                const receivedEmbed = d.embeds[0];
                if (receivedEmbed) {
                    const exampleEmbed = EmbedBuilder.from(receivedEmbed);

                    channel.send({ embeds: [exampleEmbed] });
                }
            }
            else if (d.channel_id === '790588119895769107') { //tenacity
                //let URL = `https://discord.com/api/v9/channels/1074646735386857502/messages`;

                //fetch(URL, requestOptions)
                //    .then(response => response.text())
                //    .then(console.log)
                //    .catch(console.error);
                const channel = client.channels.cache.get('1074646735386857502');
                channel.send(content);
                const receivedEmbed = d.embeds[0];
                if (receivedEmbed) {
                    const exampleEmbed = EmbedBuilder.from(receivedEmbed);

                    channel.send({ embeds: [exampleEmbed] });
                }
            }
            else if (d.channel_id === '790588121451593779') { //zeal
                //let URL = `https://discord.com/api/v9/channels/1074646748577931384/messages`;

                //fetch(URL, requestOptions)
                //    .then(response => response.text())
                //    .then(console.log)
                //    .catch(console.error);
                const channel = client.channels.cache.get('1074646748577931384');
                channel.send(content);
                const receivedEmbed = d.embeds[0];
                if (receivedEmbed) {
                    const exampleEmbed = EmbedBuilder.from(receivedEmbed);

                    channel.send({ embeds: [exampleEmbed] });
                }
            }
            break;
        //case "MESSAGE_CREATE":
        //    const command = d.content
        //    if (command === 'help') {
        //        let URL = `https://discord.com/api/v9/channels/${d.channel_id}/messages`;
        //        var requestOptions = {
        //            method: 'POST',
        //            headers: {
        //                "Authorization": `${token}`,
        //                "Content-Type": "application/json"
        //            },
        //            body: JSON.stringify({
        //                "content": "Hello, World!",
        //                "tts": false,
        //                "embeds": [{
        //                    "title": "Hello World",
        //                    "description": "Embed Message"
        //                }]
        //            })
        //        };

        //        fetch(URL, requestOptions)
        //            .then(response => response.text())
        //            .then(console.log)
        //            .catch(console.error);

        //        return
        //    }
        //    if (command === 'react') {
        //        let URL = `https://discord.com/api/v9/channels/${d.channel_id}/messages/${d.id}/reactions/%E2%9C%85/@me`;
        //        var requestOptions = {
        //            method: 'PUT',
        //            headers: {
        //                "Authorization": `${token}`,
        //                "Content-Type": "application/json"
        //            },
        //        };

        //        fetch(URL, requestOptions)
        //            .then(response => response.text())
        //            .then(console.log)
        //            .catch(console.error);
        //        return
        //    }
        //    if (command === 'create') {
        //        let URL = `https://discord.com/api/v9/guilds/${d.guild_id}/channels`;
        //        var requestOptions = {
        //            method: 'POST',
        //            headers: {
        //                "Authorization": `${token}`,
        //                "Content-Type": "application/json"
        //            },
        //            body: JSON.stringify({
        //                "name": "Hiiiii",
        //                "type": 2,
        //                "topic": "CrazyBotBoy",
        //                "bitrate": 64000,
        //                "user_limit": 10,
        //            })
        //        };

        //        fetch(URL, requestOptions)
        //            .then(response => response.text())
        //            .then(console.log)
        //            .catch(console.error);
        //        return
        //    }
        //    if (command === 'pin') {
        //        let URL = `https://discord.com/api/v9/channels/${d.channel_id}/pins/${d.id}`;
        //        var requestOptions = {
        //            method: 'PUT',
        //            headers: {
        //                "Authorization": `${token}`,
        //                "Content-Type": "application/json"
        //            },
        //        };

        //        fetch(URL, requestOptions)
        //            .then(response => response.text())
        //            .then(console.log)
        //            .catch(console.error);
        //        return
        //    }
        //    if (command === 'delete') {
        //        let URL = `https://discord.com/api/v9/channels/${d.channel_id}/messages/${d.id}`;
        //        var requestOptions = {
        //            method: 'DELETE',
        //            headers: {
        //                "Authorization": `${token}`,
        //                "Content-Type": "application/json"
        //            },
        //        };

        //        fetch(URL, requestOptions)
        //            .then(response => response.text())
        //            .then(console.log)
        //            .catch(console.error);
        //        return
        //    }
        //    if (command === 'slash') {
        //        let URL = `https://discord.com/api/v9/applications/786125193394651166/guilds/829587314924847174/commands`;
        //        var requestOptions = {
        //            method: 'POST',
        //            headers: {
        //                "Authorization": `${token}`,
        //                "Content-Type": "application/json"
        //            },
        //            body: JSON.stringify({
        //                "name": "slash-lol1",
        //                "description": "My first slash command through gateway",
        //                "options": [
        //                    {
        //                        "name": "first-slash1",
        //                        "description": "This is an option for slash-lol",
        //                        "type": 3,
        //                        "required": true,
        //                        "choices": [
        //                            {
        //                                "name": "lol1",
        //                                "value": "LOL"
        //                            }
        //                        ]
        //                    }
        //                ]
        //            })
        //        };

        //        fetch(URL, requestOptions)
        //            .then(response => response.text())
        //            .then(console.log)
        //            .catch(console.error);
        //        return
        //    }
        //    break;
        //case "INTERACTION_CREATE":
        //    let URL = `https://discord.com/api/v9/interactions/${d.id}/${d.token}/callback`;
        //    var requestOptions = {
        //        method: 'POST',
        //        headers: {
        //            "Authorization": `${token}`,
        //            "Content-Type": "application/json"
        //        },
        //        body: JSON.stringify({
        //            "type": 4,
        //            "data": {
        //                "content": "Hello",
        //            }
        //        })
        //    };

        //    fetch(URL, requestOptions)
        //        .then(response => response.text())
        //        .then(console.log)
        //        .catch(console.error);
        //    return
        //    break
    }
})

const heartbeat = (ms) => {
    return setInterval(() => {
        ws.send(JSON.stringify({ op: 1, d: null }))
    }, ms)
}

const express = require('express');
const app = express();
app.get('/', async (req, res) => {
    return res.send('Follow documentation ')
})


app.listen(8999, () => {

})