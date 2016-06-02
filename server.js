const config = require('./config');
const app = require('express')();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/src/index.html');
})

app.listen(config.PORT, () => {
  console.log(`server speaking on port ${config.PORT}`);
})
