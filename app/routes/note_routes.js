let ObjectID = require('mongodb').ObjectID;

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

  app.get('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = {'_id': new ObjectID(id) };
    db.collection('notes').findOne(details, (err, item) => {
      if (err) {
        res.send({'error': 'An error has occurred'});
      } else {
        res.send(item);
      }
    })
  });
};