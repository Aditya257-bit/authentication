const User = require('../model/user');

exports.read = async (req, res) => {
    try {
        const userId = req.user._id;
        const user = await User.findById(userId).select('-password');
        if (user) {
            res.status(200).json({
                user
            })
        }
        else {
            res.status(400).json({
                error: 'User not found'
            })
        }
    } catch (error) {
        res.status(404).json({ error })
    }
}

