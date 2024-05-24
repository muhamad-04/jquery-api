const express = require('express');
const router = express.Router();

let items = [];
let currentId = 1;

// Create
router.post('/', (req, res) => {
    const item = { id: currentId++, ...req.body };
    items.push(item);
    res.status(201).json(item);
});

// Read all
router.get('/', (req, res) => {
    res.json(items);
});

// Read one
router.get('/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (item) {
        res.json(item);
    } else {
        res.status(404).send('Item not found');
    }
});

// Update
router.put('/:id', (req, res) => {
    const index = items.findIndex(i => i.id === parseInt(req.params.id));
    if (index !== -1) {
        items[index] = { id: parseInt(req.params.id), ...req.body };
        res.json(items[index]);
    } else {
        res.status(404).send('Item not found');
    }
});

// Delete
router.delete('/:id', (req, res) => {
    const index = items.findIndex(i => i.id === parseInt(req.params.id));
    if (index !== -1) {
        items.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Item not found');
    }
});

module.exports = router;
