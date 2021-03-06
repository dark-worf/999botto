import { MessageType, Mimetype } from '@adiwajshing/baileys'

import { join } from 'path'

import MessageHandler from '../../Handlers/MessageHandler'

import BaseCommand from '../../lib/BaseCommand'

import WAClient from '../../lib/WAClient'

import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {

    constructor(client: WAClient, handler: MessageHandler) {

        super(client, handler, {

            command: 'help1',

            description: 'Displays the help menu or shows the info of the command provided',

            category: 'general',

            usage: `${client.config.prefix}help1 (command_name)`,

            dm: true,

            aliases: ['h1']

        })

    }

    run = async (M: ISimplifiedMessage): Promise<void> => {

        const n = [

            './assets/Rin/rin.mp4','./assets/Rin/rin-1.mp4','./assets/Rin/rin-2.mp4','./assets/Rin/rin-3.mp4','./assets/Rin/rin-4.mp4','./assets/Rin/rin-5.mp4','./assets/Rin/rin-6.mp4'

        ]

        let well = n[Math.floor(Math.random() * n.length)]

        return void this.client.sendMessage(M.from, { url: well }, MessageType.video, {quoted:M.WAMessage,

            mimetype: Mimetype.gif,

            caption: `-πΆπ΄π½π΄ππ°π» π»πΈππ π§£

ββββββββββββββ

π ${this.client.config.prefix}α΄α΄α΄ΙͺΙ΄κ±

π ${this.client.config.prefix}α΄α΄ α΄ΚΚα΄Ι΄α΄

π ${this.client.config.prefix}α΄α΄α΄κ±

π ${this.client.config.prefix}α΄Κα΄κ°ΙͺΚα΄

π ${this.client.config.prefix}alive

π ${this.client.config.prefix}Κα΄Ι΄α΄

π ${this.client.config.prefix}xα΄

π ${this.client.config.prefix}ΙͺΙ΄α΄ Ιͺα΄α΄ΚΙͺΙ΄α΄

π ${this.client.config.prefix}α΄α΄Κα΄α΄α΄

π ${this.client.config.prefix}Κα΄α΄ΚΙͺα΄α΄ α΄

π ${this.client.config.prefix}ΚΙͺ

π ${this.client.config.prefix}999botto

π ${this.client.config.prefix}carter

π ${this.client.config.prefix}rules

ββββββββββββββ` }

        )

    }

}
