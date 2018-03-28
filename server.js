/**
 * Created by user on 26.03.2018.
 */

const express = require('express');
const app = express();

app.listen(4000, function() {
  console.log('listening on 4000')
});

app.use(express.static('./dist'));

app.use('/', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html')
});