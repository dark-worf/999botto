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
            caption: `-🄵🅄🄽 🄻🄸🅂🅃 🧣
──────────────
🪀 ${this.client.config.prefix}ᴄʜᴇꜱꜱ
🪀 ${this.client.config.prefix}Qᴜᴏᴛᴇ
🪀 ${this.client.config.prefix}ʀᴇᴀᴄᴛ
🪀 ${this.client.config.prefix}ᴛʀɪɢɢᴇʀ
🪀 ${this.client.config.prefix}ᴛʀᴜᴛʜ
🪀 ${this.client.config.prefix}ᴄʜᴀᴛ
🪀 ${this.client.config.prefix}ᴅᴀʀᴇ
🪀 ${this.client.config.prefix}ꜰᴀᴄᴛ
🪀 ${this.client.config.prefix}ꜱᴀꜰᴇᴊᴏᴋᴇ
🪀 ${this.client.config.prefix}ꜱʜɪᴘ
🪀 ${this.client.config.prefix}ᴛʀɪᴠɪᴀ
🪀 ${this.client.config.prefix}JAIL
🪀 ${this.client.config.prefix}WANTED
🪀 ${this.client.config.prefix}RIP
🪀 ${this.client.config.prefix}TRASH
──────────────` }
        )
    }
}
