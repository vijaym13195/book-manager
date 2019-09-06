const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: String,
    description: String,
    author:String,
    rating:Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);