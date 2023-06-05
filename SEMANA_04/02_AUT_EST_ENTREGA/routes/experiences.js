// Express
var express = require('express');
var router = express.Router();

// GET /experiences
router.get('/', (req, res, next) => {
    const sql = 'SELECT * FROM experiences'

    req.db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(500).json({error: err.message});
        }
        res.status(200).json(rows);
    });
});

// GET/experiences/:id
router.get('/:id', (req, res, next) => {
    const sql = 'SELECT * FROM experiences WHERE experience_id = ?'

    req.db.get(sql, [req.params.id], (err, row) => {
        if (err) {
            return res.status(400).json({error: err.message});
        }

        if (row === undefined) return res.sendStatus(404);

        res.status(200).json(row);
    });
});

module.exports = router;