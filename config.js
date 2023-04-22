const fs = require("fs")
const chalk = require("chalk")

global.available = true
global.autoReadGc = true
global.autoReadAll = false
global.antitags = true


global.Owner = ['201275658375']
global.OwnerNumber = ['201275658375']
global.ownertag = ['201275658375']
global.BotName = "❤️ʙᴏт ᴀʙᴅʟʀᴀʜᴍᴀɴ❤️"
global.packname = "⍣عبدالرحمن يروحي"
global.author = "⍣01275658375⍣"
global.OwnerName = "ᴀʙᴅʟʀᴀʜᴍᴀɴ❤️"
global.BotSourceCode = "https://youtube.com/@ABDALLAH_MOHAMED"
global.SupportGroupLink = "https://youtube.com/@ABDALLAH_MOHAMED"
global.sessionName = "session"

// Prefix //
// 🎗don't change the prefix if you can change the prefix may be bot doesn't work properly//
global.prefa = ['.'] 


global.location = "Africa, Egypt"
global.reactmoji = "❤️"
global.themeemoji = "🐤"
global.vidmenu = { url: 'https://c.tenor.com/YGuLegQWubwAAAPo/miku-nakano-gotoubun-no-hanayome.mp4' }
global.websitex = "https://youtube.com/@ABDALLAH_MOHAMED"
global.lolhuman = "KaysaS"


global.BotLogo = fs.readFileSync("./Assets/pic1.jpg")
global.Thumb = fs.readFileSync("./Assets/pic9.jpg")
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg")
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg")


global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


global.mess = {
    jobdone: 'تم...',
    useradmin: '『 الامر دا لادمن بس! 』',
    botadmin: '『 ارفع البوت ادمن الاول 』',
    botowner: 'الميزه دي للمطور بس!',
    grouponly: '『 الميزه دي للجروبات بس! 』',
    privateonly: '『 الميزه دي في الخاص بس! 』',
    botonly: '『 الميزه دي للبوت بس! 』',
    waiting: '『 استني شويه... 』',
    nolink: '『 فين الرابط? 』',
    error: '『 ايرور! 』',
    banned: '『 انت محظور من استخدام البوت اتواصل مع المطور لالغاء حظرك! 』',
    bangc: '『 تم حظر الجروب دا من استخدام البوت! 』',
    nonsfw: '『 اكتب الاباحي واختار فتح 』'
    
}


global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}


global.APIs = {
	zenz: 'https://zenzapis.xyz',
}
global.APIKeys = {
	'https://zenzapis.xyz': '5d1197db351b',
}


global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
