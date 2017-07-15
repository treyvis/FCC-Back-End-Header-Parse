const express = require('express');
const app = express();

app.get('/', (req,res) => {
	res.send('You found me!');
});

app.listen(4040);