'use strict';

const Contact = require('../model/contacts');

module.exports.list = (req, res, next) => {
    Contact.find()
        .then(contacts => res.json(contacts))
        .catch(next);
};

module.exports.add = (req, res, next) => {
    var contact = new Contact(req.body);
    contact.save()
        .then(contact => {
            res.statusCode = 201;
            res.json(contact);
        })
        .catch(next);
};

module.exports.show = (req, res, next) => {
    var id = req.params.id;
    Contact.findById(id)
        .then(contact => {
            if (!contact) {
                req.message = 'Contact introuvable';
                return next();
            }
            res.json(contact);
        })
        .catch(next);
};

module.exports.remove = (req, res, next) => {
    var id = req.params.id;
    Contact.findByIdAndRemove(id)
        .then(contact => {
            if (!contact) {
                req.message = 'Contact introuvable';
                return next();
            }
            res.json(contact);
        })
        .catch(next);
};

module.exports.update = (req, res, next) => {
    var id = req.params.id;
    Contact.findByIdAndUpdate(id, req.body)
        .then(contact => {
            if (!contact) {
                req.message = 'Contact introuvable';
                return next();
            }
            res.json(contact);
        })
        .catch(next);
};