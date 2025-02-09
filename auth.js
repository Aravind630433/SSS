const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const pool = require('./db');
require('dotenv').config();

const auth = {
    async register(req, res) {
        try {
            const { username, password } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10);
            await pool.query("INSERT INTO users (username, password) VALUES (?, ?)", [username, hashedPassword]);
            res.status(201).json({ message: "User registered" });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    async login(req, res) {
        try {
            const { username, password } = req.body;
            const [users] = await pool.query("SELECT * FROM users WHERE username = ?", [username]);

            if (!users.length || !(await bcrypt.compare(password, users[0].password))) {
                return res.status(401).json({ message: "Invalid credentials" });
            }

            const token = jwt.sign({ userId: users[0].id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ token });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    verifyToken(req, res, next) {
        const token = req.headers['authorization'];
        if (!token) return res.status(403).json({ message: "No token provided" });

        jwt.verify(token.split(" ")[1], process.env.JWT_SECRET, (err, decoded) => {
            if (err) return res.status(500).json({ message: "Failed to authenticate token" });
            req.userId = decoded.userId;
            next();
        });
    }
};

module.exports = auth;
