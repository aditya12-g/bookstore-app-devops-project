const express = require('express');
const app = express();
app.use(express.json());

app.post('/order', (req, res) => {
    res.json({ message: 'Order placed' });
});

app.listen(3003, () => console.log('Order Service on port 3003'));
