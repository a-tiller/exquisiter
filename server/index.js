const { app } = require('./app.js');

app.listen(process.env.PORT, (err) => {
  if (err) {
    throw err;
  } else {
    console.log(`Now listening on port ${process.env.PORT}.`);
  }
});
