import { MessageType, Mimetype } from '@adiwajshing/baileys'

import { join } from 'path'

import MessageHandler from '../../Handlers/MessageHandler'

import BaseCommand from '../../lib/BaseCommand'

import WAClient from '../../lib/WAClient'

import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {

    constructor(client: WAClient, handler: MessageHandler) {

        super(client, handler, {

            command: 'rules',

            description: 'will show boy rules.',

            category: 'misc',

            usage: `${client.config.prefix}hi`

        })

    }

    run = async (M: ISimplifiedMessage): Promise<void> => {

        const n = [

            './assets/Rin/rin-hi.mp4'

        ]

        let rin = n[Math.floor(Math.random() * n.length)]

        return void this.client.sendMessage(M.from, { url: rin }, MessageType.video, {quoted:M.WAMessage,

            mimetype: Mimetype.gif,

            caption: `

            🏮 *999BOTTO RULES*

🩸 _Do not call bot, if you do then you'll get automatically blocked by bot._

    

🩸 _Do not spam bot with commands, if bot is not responding then it means either bot is off or there's internet issue at owner's end._

    

🩸 _Do not abuse/disrespect bot and its owner._

    

🩸 _If you see any bug/error in bot then report it to owner with the command /bug/report <problem>._

    

🩸 _If you want this bot in your group then contact owner by typing /owner or /mods._

    

 _Enjoy the botto and have fun._ \n` }

        )

    }

}

          

       

    

        

           

           

            

            

        

    

    

        

           

           

           

   
