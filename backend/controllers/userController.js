const db = require('../config/db');

exports.getUsers = (req, res) => {
  db.query('SELECT * FROM users', (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.json(results);
  });
};