const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const server = express();

const contacts = [{
  prenom: 'Bill',
  nom: 'Gates',
  id: 123
}, {
  prenom: 'Steve',
  nom: 'Jobs',
  id: 444
}];

server.use(morgan('dev'));

// Liste des contacts en JSON (tableau)
server.get('/', (req, res, next) => {
  res.json(contacts);
});

// Ajouter un contact
server.post('/', bodyParser.json(), (req, res, next) => {
  var id = contacts[contacts.length - 1].id + 1;
  var contact = req.body;
  contact.id = id;
  contacts.push(contact);

  res.statusCode = 201;
  res.json(contact);
});

// Retourne 1 contact par id en JSON (objet)
server.get('/:id', (req, res, next) => {
  const id = Number(req.params.id);
  const contact = contacts.find(c => c.id === id);

  if (!contact) {
    req.message = 'Contact introuvable';
    // return page404(req, res, next);
    return next(); // 404
  }

  res.json(contact);
});

// Supprime par id et retourne le contact supprimé (objet)
server.delete('/:id', (req, res, next) => {
  const id = Number(req.params.id);
  const i = contacts.findIndex(c => c.id === id);

  if (!i) {
    req.message = 'Contact introuvable';
    return next(); // 404
  }

  const contact = contacts[i];
  contacts.splice(i, 1);

  res.json(contact);
});

server.use((req, res, next) => {
  res.statusCode = 404;
  res.json({
    message: req.message || '404 Not Found'
  });
});

server.listen(8080, () => {
  console.log('Server started http://localhost:8080');
});
