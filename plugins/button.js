let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "HALO KAK\nSaya ALAN BOTZ`\nPilih Menu Di Bawah Yaa\nDan Jangan Lupa Baca Dibawah ini\n\nSpam = Banned\nTelp = Blok\n\n\nJoin Group WhatsApp\nhttps://chat.whatsapp.com/BVeUWly2TH76VsA73WixDS\n\nSubscribe Me\nYT : ALAN BOTZ",
                        "description": "*Β©ALAN BOTZ π₯*",
                        "buttonText": "SUBSCRIBE ALAN BOTZ π₯",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                             "rows": [
                                    {
                                        "title": `Download Menu`,
                                        "description": "\nBY ALAN BOTZ π₯",
                                        "rowId": ".downloadmenu"
                                    },{
                                        "title": "Database Menu",
                                        "description": "\nBY ALAN BOTZ π₯",
                                        "rowId": ".dbmenu"                 
                                    },{
                                        "title": "Button Menu",
                                        "description": "\nBY ALAN BOTZ π₯",
                                        "rowId": ".button"                 
                                    },{
                                    	"title": "All Menu",
                                        "description": "\nBY ALAN BOTZ π₯",
                                        "rowId": ".allmenu"                 
                                    },{
                                        "title": "Jadibot Menu",
                                        "description": "\nBY ALAN BOTZ π₯",
                                        "rowId": ".jadibotmenu"                 
                                    },{
                                        "title": "Owner Menu",
                                        "description": "\nBY ALAN BOTZ π₯",
                                        "rowId": ".ownermenu"                 
                                    },{
                                        "title": "Hentai Menu",
                                        "description": "\nBY ALAN BOTZ π₯",
                                        "rowId": ".hentaimenu"                 
                                    },{
                                        "title": "Absen Menu",
                                        "description": "\nBY ALAN BOTZ π₯",
                                        "rowId": ".absenmenu"                 
                                    }, {
                                        "title": " Group Setting",
                                        "description": "\nBY ALAN BOTZ π₯",
                                        "rowId": ".groupset"
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})
handler.command = ['menu']
handler.register = true
module.exports = handler