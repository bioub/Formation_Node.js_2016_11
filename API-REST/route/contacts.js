'use strict';

const Router = require('express').Router;
const bodyParser = require('body-parser');

const controllerContacts = require('../controller/contacts');

const router = new Router();

router.get('/', controllerContacts.list);
router.post('/', bodyParser.json(), controllerContacts.add);
router.get('/:id', controllerContacts.show);
router.delete('/:id', controllerContacts.remove);
router.put('/:id', bodyParser.json(), controllerContacts.update);

module.exports = router;
