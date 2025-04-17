const express = require('express');
const app = express();
app.use(express.json());

// Define a route for the root path
app.get('/', (req, res) => {
    res.send('Welcome to the Book Service!');
});

// Define a route for the /books path
app.get('/books', (req, res) => {
    res.json([{ id: 1, title: 'The Great Gatsby' }]);
});

app.listen(3002, () => console.log('Book Service on port 3002'));

