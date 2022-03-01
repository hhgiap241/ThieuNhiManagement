
class siteController{
    getHomepage(req, res){
        res.render('sites/views/index')
    }
    get404Page(req, res){
        res.render('sites/views/404', {layout:false})
    }
    getChartPage(req, res){
        res.render('sites/views/charts')
    }
    getHelpPage(req, res){
        res.render('sites/views/help')
    }
    getDocumentationPage(req, res){
        res.render('sites/views/documentation')
    }
    getNotificationPage(req, res){
        res.render('sites/views/notification')
    }
}
module.exports = new siteController()
