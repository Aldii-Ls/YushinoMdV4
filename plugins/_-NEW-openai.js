import { Configuration, OpenAIApi } from "openai";
import fetch from "node-fetch"
import { generateWAMessageFromContent } from "@adiwajshing/baileys"

import fs from 'fs'
let handler = async (m, { conn, text }) => {
if (!text) throw "Hay adakah yang bisa saya bantu??"
const configuration = new Configuration({
    apiKey: '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'
});
const openai = new OpenAIApi(configuration);
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: text,
            temperature: 0,
            max_tokens: 3000,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0
        });
m.reply(response.data.choices[0].text)
    }
handler.help = ['openai']
handler.tags = ['fun']
 handler.command = /^(yus|ai|openai)$/i
export default handler
