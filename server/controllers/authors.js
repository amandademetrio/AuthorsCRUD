const mongoose = require('mongoose'),
    Author = mongoose.model('Author')

module.exports = {
    index: function(req,res) {
        Author.find({},function(err,authors) {
            if (err) {
                res.json({'status':500,'errors':err})
            }
            else {
                res.json({'status':200,'authors':authors});
            }
        })
    },
    add_author: function(req,res) {
        var author = new Author({
            name:req.body.name,
            quote:req.body.quote
            })
        author.save(function(err,author){
            if (err) {
                res.json({'status':500,'errors':err})
            }
            else {
                res.json({'status':200,'author':author});
            }
        })
    },
    update_author: function(req,res) {
        Author.update({_id:req.params.id},{$set: 
            {
                name:req.body.name,
                quote:req.body.quote,
            }, 
        },
        {runValidators: true},
        function(err,author){
            if (err) {
                res.json({'status':500,'errors':err})
            }
            else {
                res.json({'status':200,'author':author});
            }
        })
    },
    delete_author: function(req,res) {
        Author.deleteOne({_id:req.params.id},function(err) {
            if (err) {
                res.json({'status':500,'errors':err})
            }
            else {
                res.json({'status':200,'author':'Author was deleted'});
            }
        })
    },
    find_author: function(req,res) {
        Author.findById(req.params.id,function(err,author) {
            if (err) {
                res.json({'status':500,'errors':err})
            }
            else {
                res.json({'status':200,'author':author});
            }
        })
    }
}
