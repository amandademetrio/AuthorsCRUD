const mongoose = require('mongoose');

var AuthorSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true,'Author field is required'],
        minlength: [3,'Author must have at least 3 characters']
    },
    quote: {
        type:String,
        required: [true,'Quote field is required'],
        minlength: [3,'Quote must have at least 3 characters']
    }
}, {timestamps: true});

mongoose.model('Author',AuthorSchema);