const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    const { username, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword, role });

    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: 'Failed to register user' });
    }
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
        return res.status(400).json({ error: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(400).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, 'secret', { expiresIn: '1h' });
    res.json({ token });
};