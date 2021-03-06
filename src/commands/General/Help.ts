import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help (command_name)`,
            dm: true,
            aliases: ['h']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/Rin/rin.mp4','./assets/Rin/rin-1.mp4','./assets/Rin/rin-2.mp4','./assets/Rin/rin-3.mp4','./assets/Rin/rin-4.mp4','./assets/Rin/rin-5.mp4','./assets/Rin/rin-6.mp4'
        ]
        let well = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: well }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `๐ ษดแดแดแด๊ฑ

๐ฎ ๐๐๐ข ๐๐๐๐๐ ๐๐ ๐ก๐ก๐ก๐๐จ๐ญ๐ญ๐จ!

๐wasting my time here
" ${this.client.config.prefix}แดแดกษดแดส " แดแด แดแดษดแดแดแดแด แดแดกษดแดส!

๐ แดสแด๊ฐษชx - ${this.client.config.prefix}
โโโโโโโโโโโโโโโโ
-๐ถ๐ด๐ฝ๐ด๐๐ฐ๐ป ๐ฉธ

๐ฒ ${this.client.config.prefix}๏ผจ๏ฝ๏ฝ๏ฝ1 [${this.client.config.prefix}๏ฝ๏ผ]

-๐๐ด๐ด๐ฑ๐ ๐ฉธ

๐ฒ ${this.client.config.prefix}๏ผจ๏ฝ๏ฝ๏ฝ2 [${this.client.config.prefix}๏ฝ2]

-๐ต๐๐ฝ ๐ฉธ

๐ฒ ${this.client.config.prefix}๏ผจ๏ฝ๏ฝ๏ฝ3 [${this.client.config.prefix}๏ฝ3]

-๐ผ๐ด๐ณ๐ธ๐ฐ ๐ฉธ

 ๐ฒ ${this.client.config.prefix}๏ผจ๏ฝ๏ฝ๏ฝ4 [${this.client.config.prefix}๏ฝ4]

-๐๐๐ธ๐ป๐ ๐ฉธ

 ๐ฒ ${this.client.config.prefix}๏ผจ๏ฝ๏ฝ๏ฝ5 [${this.client.config.prefix}๏ฝ5]

-๐ผ๐พ๐ณ๐ด๐๐ฐ๐๐ธ๐พ๐ฝ ๐ฉธ

๐ฒ ${this.client.config.prefix}๏ผจ๏ฝ๏ฝ๏ฝ6 [${this.client.config.prefix}๏ฝ6]

-๐ด๐ณ๐๐ฒ๐ฐ๐๐ธ๐๐ด ๐ฉธ

๐ฒ ${this.client.config.prefix}๏ผจ๏ฝ๏ฝ๏ฝ7 [${this.client.config.prefix}๏ฝ7]

-๐ฝ๐๐ต๐ ๐ฉธ

๐ฒ ${this.client.config.prefix}๏ผจ๏ฝ๏ฝ๏ฝ8 [${this.client.config.prefix}๏ฝ8]

โโโโโโโโโโโโโโโโ
 โโโโ[ 999botto ]โโโโโ
โโโโโโโโโโโโโโโ
โ   ๐งจ 999botto
โ   ยฉ๏ธ Synthesized Infinity Botto
โโโโโโโโโโโโโโโ
โโ[๐๐๐ฏ๐ ๐ธ ๐๐ซ๐๐๐ญ ๐๐๐ฒ]โโ
๐ *Note: Use ${this.client.config.prefix}help <command_name> to view the command info*` }
        )
    }
}
