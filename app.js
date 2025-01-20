const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

const { setupApp } = require('./middlewares/authMiddleware');
const routes = require('./routes/users');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

setupApp(app);
app.use(routes);
app.use('/', routes);

app.listen(port, () => {
  console.log(`servidor es http://localhost:${port}`);
});



