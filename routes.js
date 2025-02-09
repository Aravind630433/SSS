const express = require('express');
const router = express.Router();
const pool = require('./db');
const fs = require('fs').promises;
const rateLimit = require('./middleware');
const auth = require('./auth');

// Middleware
router.use(rateLimit);

// CRUD Routes
router.post('/items', auth.verifyToken, async (req, res) => {
    try {
        const { name, description } = req.body;
        const [result] = await pool.query("INSERT INTO items (name, description) VALUES (?, ?)", [name, description]);

        const logData = { id: result.insertId, name, created_at: new Date().toISOString() };
        await fs.appendFile('logs.json', JSON.stringify(logData) + '\n');

        res.status(201).json({ message: "Item created", item: logData });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/items', auth.verifyToken, async (req, res) => {
    try {
        const [items] = await pool.query("SELECT * FROM items");
        res.json(items);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/items/:id', auth.verifyToken, async (req, res) => {
    try {
        const [items] = await pool.query("SELECT * FROM items WHERE id = ?", [req.params.id]);
        res.json(items[0] || { message: "Item not found" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.put('/items/:id', auth.verifyToken, async (req, res) => {
    try {
        const { name, description } = req.body;
        await pool.query("UPDATE items SET name = ?, description = ? WHERE id = ?", [name, description, req.params.id]);
        res.json({ message: "Item updated" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.delete('/items/:id', auth.verifyToken, async (req, res) => {
    try {
        await pool.query("DELETE FROM items WHERE id = ?", [req.params.id]);
        res.json({ message: "Item deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
