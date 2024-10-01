import TelegramApi from "node-telegram-bot-api";
import schedule from 'node-schedule'

const token = '7683656810:AAEAVOjlKtxHePeaaCOi1ZjjOOTdZJ6wfMU'

const bot = new TelegramApi(token, { polling: true });

bot.setMyCommands([
    { command: '/start', description: "Почати бот" },
    {command: "/setScheduledReminder", description: "Запланувати постійне нагадування"}
])

bot.on("message", async msg => {
    const text = msg.text;
    const chatId = msg.chat.id;

    if (text === '/start') {
        await bot.sendSticker(chatId, `https://tlgrm.eu/_/stickers/b16/009/b160099f-2bc1-4a57-9f9e-88f75d5b80bb/1.webp`)
        await bot.sendMessage(chatId, `Привіт, ${msg.from.first_name}! `)
    }

    // await bot.sendMessage(chatId, `Your message was ${text}`)
})