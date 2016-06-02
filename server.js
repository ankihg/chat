const config = require('./config');
const app = require('express')();

app.get('/', (req, res) => {
  res.send('<h1>plz respond</h1>');
})

app.listen(config.PORT, () => {
  console.log(`server spearking on port ${config.PORT}`);
})
