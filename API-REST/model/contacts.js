const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    prenom: String,
    nom: String
});

const Contact = mongoose.model('contacts', contactSchema);

module.exports = Contact;