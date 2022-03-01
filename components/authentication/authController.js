
class authController{
    getLoginPage(req, res){
        res.render('authentication/views/login',{layout : false})
    }
}
module.exports = new authController()
