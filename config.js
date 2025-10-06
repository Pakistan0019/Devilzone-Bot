const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0hkM0tydlFGSEhQVHM3LzgyVzR1ZFVyNnhsOU1VdTlsSXpJaTd5eFJXTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ09uNURzeE5sbzBicU53U0lkNXhuckdCYzhTL25VYTJ4WjI1Um1aeUxGRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFQUVZQzVJSVNuODJwT2lteXJPZUd3Zit1WmwwME0yeUhGMGE5dkZnOTBJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWSUdOZUlDRWI3NUg3clNqZjRTQjhIKzVPRUFYb3pIVnpmdjNLUG95blZVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVEQ0xDakh3MkNqaldSdHlhVHc1ZzczcEl3R0doTmFCSWRYODZNeUVDRVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlovTEMvQWlxVDJJUG9hanpsK3M3S2tsWkRaSlV3aHZNaTZTN3U1SWJXWGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUhqZmVDOXZnV0NQNTY1aCsxd3Y5WjNGQU1iUjF2SUpRWCtZNVBQRytVbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMmcwcW9zOUsyRHQ5WXlLMEdITzI5V2pCSnUzaW50czlacTloSEtiaW8xVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlKc3MyNjJpdy85YURqU2RVU0dpSkk3a1lrOC9ZRXNvMVc5UHlCNWhBQ3AvN25MMGM5VDZVc0dObmNkZkQ1NmswOTV1MG4rYWk5Z1A0Y0VsQlREbEJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkxLCJhZHZTZWNyZXRLZXkiOiJjNTQrQXQrMmYzVEFiUWxrTFRYalU0alk1dnFwZ25KcFBMZ1dLK01xRUJNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJRSDdZNENCUyIsIm1lIjp7ImlkIjoiOTIzMTg4ODcxNDQxOjJAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxNzM3MTA1NzMwNzY2MDI6MkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BEWng0TURFTk9xa01jR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InRSeVlGL1dqU3lzYUF2d3dydGQ2QmNHZ3RaN2N3RUc2bTArcnhmTTNUbnc9IiwiYWNjb3VudFNpZ25hdHVyZSI6InR0WlV0ZmhUSUYwcWZhWTRpSUJRT3BtM2Rrand0NUZMeFZCZGtGQjUrNFM5SUwvclozTk5LMDBDMGtMWFprMHpKb09qQ2pvSW84UHRuV0EvSzh5ckN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJBbUdNZzFERGhYMktVc1NUa0F2K21jV2F3WEs1Ym9UOHRLT1A0ZlREZXp2NWRSaGE0bnZxcW5na1pwM0F6VStySnFKajMzaTJPYlRuSWFlSk1vdUdBUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzE4ODg3MTQ0MToyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJVY21CZjFvMHNyR2dMOE1LN1hlZ1hCb0xXZTNNQkJ1cHRQcThYek4wNTgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1OTc3ODEzNiwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHMlYifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Devilzone-Bot 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/qpnazl.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Devilzone-Bot",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Devilzone-Bot",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923421293522",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*Pakistan0019*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Pakistan0019 ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/qpnazl.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923421293522",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
