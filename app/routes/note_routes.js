module.exports = function(app, db) {
  app.post('/notes', (req, res) => {
    const newNote = { title: req.body.title, text: req.body.body };

    db.collection('notes').insert(newNote, (err, result) => {
      if (err) {
        res.send({'error': 'An error has occurred'});
      } else {
        res.send(result.ops[0])
      }
    });
  });
};