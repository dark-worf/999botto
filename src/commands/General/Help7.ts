import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help7',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help7 (command_name)`,
            dm: true,
            aliases: ['h7']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/Rin/rin.mp4','./assets/Rin/rin-1.mp4','./assets/Rin/rin-2.mp4','./assets/Rin/rin-3.mp4','./assets/Rin/rin-4.mp4','./assets/Rin/rin-5.mp4','./assets/Rin/rin-6.mp4'
        ]
        let well = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: well }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `-π΄π³ππ²π°ππΈππ΄ π»πΈππ π§£
ββββββββββββββ
π ${this.client.config.prefix}α΄α΄Κα΄α΄Κα΄α΄α΄Κ
π ${this.client.config.prefix}α΄α΄α΄ Ιͺα΄
π ${this.client.config.prefix}α΄α΄κ°ΙͺΙ΄α΄
π ${this.client.config.prefix}α΄Κα΄α΄α΄Ι΄α΄κ±
π ${this.client.config.prefix}Ι’Ιͺα΄Κα΄Κ
π ${this.client.config.prefix}α΄ΚΚα΄Ι΄α΄Ιͺα΄α΄Ιͺα΄Ι΄α΄ΚΚ
π ${this.client.config.prefix}α΄‘α΄α΄α΄Κα΄Κ
ββββββββββββββ` }
        )
    }
}
