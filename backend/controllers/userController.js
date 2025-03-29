const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: 'Failed to fetch users' });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: 'Failed to fetch user' });
    }
};

exports.createUser = async (req, res) => {
    const { username, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword, role });

    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: 'Failed to create user' });
    }
};

exports.updateUser = async (req, res) => {
    const { username, role } = req.body;
    try {
        const user = await User.findByIdAndUpdate(req.params.id, { username, role }, { new: true });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: 'Failed to update user' });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: 'Failed to delete user' });
    }
};