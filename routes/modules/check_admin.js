module.exports = (req,res) => {
    var timeStamp = require('./modules/timestamp')
    
    if(req.signedCookies.login_info != undefined) {
        if(!req.session.loggedin) {
            req.session.loggedin = req.signedCookies.login_info
            timeStamp('[+] '+req.signedCookies.login_info+' is logged in!')
        }
    }
    if(req.session.loggedin) {
        is_admin = true
    } else {
        is_admin = false
    }
    return is_admin
}