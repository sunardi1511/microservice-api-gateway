const express = require('express');
const router = express.Router();

const mediaHeandler = require('./handler/media')

router.post('/', mediaHeandler.create);
router.get('/', mediaHeandler.getAll);
router.delete('/:id', mediaHeandler.destroy) 
module.exports = router;
