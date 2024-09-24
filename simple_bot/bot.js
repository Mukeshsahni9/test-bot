const express = require('express');
const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');
require('dotenv').config();

const port = 4000;
const token = process.env.BOT_TOKEN;

const app = express();

app.get('/', function (req, res) {
  res.send('Bot is alive');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const userInput = msg.text;
  const messageId = msg.message_id;

  // Send a reply to the user
  await bot.sendMessage(chatId, userInput, {
    reply_to_message_id: messageId,
  });
});
