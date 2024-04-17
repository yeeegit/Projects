require("dotenv").config();
const axios = require("axios");
const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

client.on("ready", () => {
  console.log(`Server running as: ${client.user.tag}`);
});

let interval;

client.on("messageCreate", async (msg) => {
  switch (msg.content) {
    case "ping":
      await msg.reply("Pong!");
      break;
    case "!meme":
      msg.channel.send("Here's your meme!");
      const img = await getMeme();
      msg.channel.send(img);
      break;
    case "!test":
      msg.channel.send("foo");
      interval = setInterval(function () {
        msg.channel.send("bar").catch(console.error);
      }, 7000);
      break;
    case "!stop":
      msg.channel.send("Test Interval is removed");
      clearInterval(interval);
      break;
    case "hi":
      await msg.reply("Hello");
      break;
  }
});

async function getMeme() {
  const res = await axios.get("https://api.imgflip.com/get_memes");
  const memeCount = res.data.data.memes.length;
  const randomIndex = Math.floor(Math.random() * memeCount);

  const randomMeme = res.data.data.memes[randomIndex].url;
  return randomMeme;
}

client.login(process.env.CLIENT_TOKEN);
