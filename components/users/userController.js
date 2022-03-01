
class userController{
    getAccountPage(req, res){
        res.render('users/views/account')
    }
}
module.exports = new userController()
