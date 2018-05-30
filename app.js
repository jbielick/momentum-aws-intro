const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
  fs.createReadStream('ipsum.txt').pipe(res);
});

app.listen(3000);
