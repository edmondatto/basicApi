module.exports = function(app, db) {
  app.post('/notes', (req, res) => {
    console.log(req.body);
    console.log(req.title);
    res.send('I\'m live')
  });
};