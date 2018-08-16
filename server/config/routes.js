module.exports = function(app) {

    const author = require('../controllers/authors.js')

    app.get('/authors', function(req,res) {
        author.index(req,res);
    });

    app.post('/authors', function(req,res) {
        author.add_author(req,res);
    });

    app.put('/authors/:id',function(req,res){
        author.update_author(req,res);
    })

    app.get('/authors/:id',function(req,res){
        author.find_author(req,res);
    })

    app.delete('/authors/:id', function(req,res) {
        author.delete_author(req,res);
    });

}