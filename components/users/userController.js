
class userController{
    getAccountPage(req, res){
        res.render('users/views/account')
    }
    getListPage(req, res){
        res.render('users/views/list')
    }

}
module.exports = new userController()
