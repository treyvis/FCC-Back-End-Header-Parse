const express = require('express');
const app = express();

app.get('/', (req,res) => {
	const info = {
		language: req.headers['accept-language'].match(/.*,/)[0],
		software: req.headers['user-agent'].match(/\(.*\)/)[0]
	};
	res.send(info);

});

app.listen(4040);