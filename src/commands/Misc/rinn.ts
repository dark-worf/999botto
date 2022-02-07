import { MessageType, Mimetype } from '@adiwajshing/baileys'

import { join } from 'path'

import MessageHandler from '../../Handlers/MessageHandler'

import BaseCommand from '../../lib/BaseCommand'

import WAClient from '../../lib/WAClient'

import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {

    constructor(client: WAClient, handler: MessageHandler) {

        super(client, handler, {

            command: 'carter',

            description: 'Displays the info.',

            category: 'misc',

            usage: `${client.config.prefix}rin`

        })

    }

    run = async (M: ISimplifiedMessage): Promise<void> => {

        const n = [

            './assets/Rin/rin-git.mp4'

        ]

        let rin = n[Math.floor(Math.random() * n.length)]

        return void this.client.sendMessage(M.from, { url: rin }, MessageType.video, {quoted:M.WAMessage,

            mimetype: Mimetype.gif,

            caption: `Hey there🍃, am carter just looking forward for a better place😅
            
𝐚𝐦 𝐣𝙪𝙨𝙩 𝙖 𝙨𝙩𝙪𝙙𝙚𝙣𝙩, 
𝘵𝘶𝘳𝘯𝘪𝘯𝘨 𝘣𝘢𝘥 𝘵𝘩𝘪𝘯𝘨𝘴 𝘵𝘰 𝘨𝘰𝘰𝘥 𝘰𝘯𝘦𝘴. 

 

🏮WhatsApp 🏮

http://Wa.me/265994894966

⭕github⭕

https://github.com/dark-worf

　

[ |•♪♩ℋ͎Ꭿ͎ℙ͎ℙ͎Ꮍ͎ ℋ͎Ꮎ͎U͎ℛ͎♩ ]* \n` }

        )

    }

}
