const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// GET /bfhl endpoint
app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

// POST /bfhl endpoint
app.post('/bfhl', (req, res) => {
    const { data } = req.body;

    // Validate input
    if (!Array.isArray(data)) {
        return res.status(400).json({ error: 'Invalid input format' });
    }

    // Separate numbers and alphabets
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item) && item.length === 1 && /[a-zA-Z]/.test(item));

    // Find the highest alphabet
    let highestAlphabet = [];
    if (alphabets.length > 0) {
        highestAlphabet.push(alphabets.reduce((a, b) => a.toLowerCase() > b.toLowerCase() ? a : b));
    }

    // Construct response
    const response = {
        is_success: true,
        user_id: "john_doe_17091999",
        email: "john@xyz.com",
        roll_number: "ABCD123",
        numbers: numbers,
        alphabets: alphabets,
        highest_alphabet: highestAlphabet
    };

    res.status(200).json(response);
});

// Start the server
app.listen(port, () => {
    console.log(Server running on port ${port});
});