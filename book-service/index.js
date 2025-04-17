const express = require('express');
const app = express();
app.use(express.json());

app.get('/books', (req, res) => {
    res.json([{ id: 1, title: 'The Great Gatsby' }]);
});

app.listen(3002, () => console.log('Book Service on port 3002'));
