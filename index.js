const express = require('express');
const app = express();
const port = 4040;

app.get('/', (req,res) => {
	const info = {
		ip: req.ip,
		language: req.headers['accept-language'].match(/.*,/)[0].replace(/,/,''),
		software: req.headers['user-agent'].match(/\(.*\)/)[0].replace(/[\(\)]/g,'')
	};
	console.log('Sent JSON: ' + JSON.stringify(info));
	res.json(info);
});

app.listen(port, () => {
	console.log('Listening on port: ' + port);
});