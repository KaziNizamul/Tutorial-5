const User = require('../models/user');

exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { email, firstName } = req.body;

    try {
        const user = await User.findOne({ id });

        if (!user) {
            return res.status(404).json({ message: "User not found", success: false });
        }

        if (email) user.email = email;
        if (firstName) user.firstName = firstName;

        await user.save();

        return res.json({ message: "User updated", success: true });
    } catch (err) {
        return res.status(500).json({ message: "Internal server error", success: false });
    }
};

exports.addUser = async (req, res) => {
    const { email, firstName } = req.body;

    if (!email || !firstName) {
        return res.status(400).json({ message: "Email and firstName are required", success: false });
    }

    const newUser = new User({
        email,
        firstName
    });

    try {
        await newUser.save();
        return res.json({ message: "User added", success: true });
    } catch (err) {
        return res.status(500).json({ message: "Internal server error", success: false });
    }
};

exports.getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findOne({ id });
        const modifiedUser = { email: user.email, firstName: user.firstName, id: user.id }

        if (!user) {
            return res.status(404).json({ message: "User not found", success: false });
        }

        return res.json({ success: true, user: modifiedUser });
    } catch (err) {
        return res.status(500).json({ message: "Internal server error", success: false });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        const modifiedUsers = users.map(({ email, firstName, id }) => ({ email, firstName, id }));
        return res.json({ message: "Users retrieved", success: true, users: modifiedUsers });
    } catch (err) {
        return res.status(500).json({ message: "Internal server error", success: false });
    }
};
