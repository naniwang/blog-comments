var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { isLogin:req.session.isLogin,name: req.session.username });
});
router.get("/regist",(req,res)=>{
	res.render("regist");
})
router.get("/login",(req,res)=>{
	res.render("login");
})
router.get("/loginout",(req,res)=>{
	req.session.username = null;
	req.session.isLogin = false;
	res.redirect("/login");
})
module.exports = router;
