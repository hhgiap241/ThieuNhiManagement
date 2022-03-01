
class authController{
    getLoginPage(req, res){
        res.render('authentication/views/login',{layout : false})
    }
    getResetPasswordPage(req, res){
        res.render('authentication/views/resetPassword', {layout: false})
    }
    getSignupPage(req, res){
        res.render('authentication/views/signup', {layout: false})
    }
}
module.exports = new authController()
