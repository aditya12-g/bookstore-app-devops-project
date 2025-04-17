const express = require('express');
const app = express();
app.use(express.json());

app.post('/signup', (req, res) => {
    res.json({ message: 'User signed up' });
});

app.post('/login', (req, res) => {
    res.json({ token: 'fake-jwt-token' });
});

app.listen(3001, () => console.log('Auth Service on port 3001'));
