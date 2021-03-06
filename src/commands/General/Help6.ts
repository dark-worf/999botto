import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help6',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help6 (command_name)`,
            dm: true,
            aliases: ['h6']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/Rin/rin.mp4','./assets/Rin/rin-1.mp4','./assets/Rin/rin-2.mp4','./assets/Rin/rin-3.mp4','./assets/Rin/rin-4.mp4','./assets/Rin/rin-5.mp4','./assets/Rin/rin-6.mp4'
        ]
        let well = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: well }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `-πΌπΎπ³π΄ππ°ππΈπΎπ½ π»πΈππ π§£
ββββββββββββββ
β±οΈ ${this.client.config.prefix}α΄α΄α΄Ιͺα΄ α΄α΄α΄
β±οΈ ${this.client.config.prefix}α΄α΄α΄α΄α΄Ιͺα΄ α΄α΄α΄
β±οΈ ${this.client.config.prefix}α΄α΄α΄α΄α΄α΄
β±οΈ ${this.client.config.prefix}Ι’Κα΄α΄α΄α΄Κα΄Ι΄Ι’α΄
β±οΈ ${this.client.config.prefix}α΄Κα΄α΄α΄α΄α΄
β±οΈ ${this.client.config.prefix}α΄α΄ΚΙ’α΄
β±οΈ ${this.client.config.prefix}Κα΄α΄α΄α΄ α΄
β±οΈ ${this.client.config.prefix}α΄Κα΄κ±α΄
β±οΈ ${this.client.config.prefix}α΄α΄α΄Ι΄
β±οΈ ${this.client.config.prefix}Κα΄α΄ α΄α΄α΄
β±οΈ ${this.client.config.prefix}α΄α΄α΄α΄α΄α΄Κα΄
ββββββββββββββ` }
        )
    }
}
