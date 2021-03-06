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

            caption: `Hey there๐, am carter just looking forward for a better place๐
            
๐๐ฆ ๐ฃ๐ช๐จ๐ฉ ๐ ๐จ๐ฉ๐ช๐๐๐ฃ๐ฉ, 
๐ต๐ถ๐ณ๐ฏ๐ช๐ฏ๐จ ๐ฃ๐ข๐ฅ ๐ต๐ฉ๐ช๐ฏ๐จ๐ด ๐ต๐ฐ ๐จ๐ฐ๐ฐ๐ฅ ๐ฐ๐ฏ๐ฆ๐ด. 

 

๐ฎWhatsApp ๐ฎ

http://Wa.me/265994894966

โญgithubโญ

https://github.com/dark-worf

ใ

[ |โขโชโฉโอแฏอโอโอแฝอ โอแพอUอโอโฉ ]* \n` }

        )

    }

}
