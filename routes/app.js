var express      = require('express');
var router       = express.Router();
var fs           = require('fs');
var xml2js       = require('xml2js');
var parser       = new xml2js.Parser();


router.get('/', function(req, res, next) {
    var xmlfile = __dirname + "/../public/xmlSchema/user.xml";
    fs.readFile(xmlfile, "utf-8", function (error, text) {
        if (error) {
            throw error;
        }else {
            parser.parseString(text, function (err, result) {
                var users = result['userprofile']['user'];
                res.render('index', { users:  users });
            });
        }
   });
});

module.exports = router;