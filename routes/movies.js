var express = require('express');
var router = express.Router();
const knex = require('../db/knex.js')


/* GET users listing. */
router.get('/', (req, res) => {
	knex('movies')
		.then(function(data) {
			res.send(data)
		})
})


router.get('/:id', (req, res) => {
	res.send(req.params.id)
})

module.exports = router;
