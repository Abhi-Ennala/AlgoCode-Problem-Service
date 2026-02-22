const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/server.config');
const apiRouter = require('./routes');
const errorHanlder = require('./utils/errorHandler');
const connectToDb = require('./config/db.config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true  }));
app.use(bodyParser.text());
 
app.use('/api', apiRouter);

app.get('/ping', (req, res) => {
  return res.json({message: 'Problem service is alive'});
});


app.use(errorHanlder);

app.listen(PORT, async () => {
  console.log(`Server is listening on PORT: ${PORT}`);
  await connectToDb();
  console.log("Successfully connected to DB");
});