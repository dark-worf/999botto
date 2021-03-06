import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help3',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help3 (command_name)`,
            dm: true,
            aliases: ['h3']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/Rin/rin.mp4','./assets/Rin/rin-1.mp4','./assets/Rin/rin-2.mp4','./assets/Rin/rin-3.mp4','./assets/Rin/rin-4.mp4','./assets/Rin/rin-5.mp4','./assets/Rin/rin-6.mp4'
        ]
        let well = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: well }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `-π΅ππ½ π»πΈππ π§£
ββββββββββββββ
πͺ ${this.client.config.prefix}α΄Κα΄κ±κ±
πͺ ${this.client.config.prefix}Qα΄α΄α΄α΄
πͺ ${this.client.config.prefix}Κα΄α΄α΄α΄
πͺ ${this.client.config.prefix}α΄ΚΙͺΙ’Ι’α΄Κ
πͺ ${this.client.config.prefix}α΄Κα΄α΄Κ
πͺ ${this.client.config.prefix}α΄Κα΄α΄
πͺ ${this.client.config.prefix}α΄α΄Κα΄
πͺ ${this.client.config.prefix}κ°α΄α΄α΄
πͺ ${this.client.config.prefix}κ±α΄κ°α΄α΄α΄α΄α΄
πͺ ${this.client.config.prefix}κ±ΚΙͺα΄
πͺ ${this.client.config.prefix}α΄ΚΙͺα΄ Ιͺα΄
πͺ ${this.client.config.prefix}JAIL
πͺ ${this.client.config.prefix}WANTED
πͺ ${this.client.config.prefix}RIP
πͺ ${this.client.config.prefix}TRASH
ββββββββββββββ` }
        )
    }
}
