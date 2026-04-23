const Contact = require('../models/Contact');

const submitContact = async (req, res) => {
    try {
        const { name, email, phone } = req.body;

        if (!name || !email || !phone) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required.'
            });
        }

        const newContact = new Contact({ name, email, phone });
        await newContact.save();

        res.status(201).json({
            success: true,
            message: 'Thank you! We will be in touch soon.'
        });

    } catch (error) {
        console.error('Contact form error:', error);
        res.status(500).json({
            success: false,
            message: 'Something went wrong. Please try again.'
        });
    }
};

module.exports = { submitContact };