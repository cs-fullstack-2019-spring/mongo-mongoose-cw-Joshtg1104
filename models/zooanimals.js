var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ZooSchema = new Schema(
    {
        animal_id: Number,
        animal_type: String,
        animal_description: String,
    },
);

module.exports = mongoose.model('ZooAnimal', ZooSchema);