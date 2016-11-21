const contacts = [{
  prenom: 'Bill',
  nom: 'Gates',
  id: 123
}, {
  prenom: 'Steve',
  nom: 'Jobs',
  id: 444
}];

class Contact {
    constructor() {

    }
    save() {

    }
    static find(callback) {
        callback(false, contacts);
    }
}

module.exports = Contact;

/*
Contact.find(function(err, contacts) {

});
*/

/*
var contact = new Contact({prenom: 'Toto'});
contact.save(function(contact) {

});
*/

