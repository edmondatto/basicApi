let ObjectID = require('mongodb').ObjectID;

module.exports = function (app, db) {
  app.post('/notes', (req, res) => {
    const newNote = {title: req.body.title, text: req.body.body};

    db.collection('notes').insert(newNote, (err, result) => {
      if (err) {
        res.send({'error': 'An error has occurred'});
      } else {
        res.send(result.ops[0])
      }
    });
  });

  app.get('/notes/:id', (req, res) => {
    const idParam = req.params.id;
    const noteId = {'_id': new ObjectID(idParam)};

    db.collection('notes').findOne(noteId, (err, item) => {
      if (err) {
        res.send({'error': 'An error has occurred'});
      } else {
        res.send(item);
      }
    })
  });

  app.get('/notes', (req, res) => {
    db.collection('notes').find({}).toArray((err, items) => {
      if (err) {
        res.send({'error': 'An error has occurred'});
      } else {
        res.send(items);
      }
    })
  });

  app.delete('/notes/:id', (req, res) => {
    const idParam = req.params.id;
    const noteId = {'_id': new ObjectID(idParam)};

    db.collection('notes').remove(noteId, (err, item) => {
      if (err) {
        res.send({'error': 'An error has occurred'});
      } else {
        res.send(`Note ${idParam} has been deleted`);
      }
    })
  });

  app.put('/notes/:id', (req, res) => {
    const idParam = req.params.id;
    const noteId = {'_id': new ObjectID(idParam)};
    const updatedNote = {title: req.body.title, text: req.body.body};

    db.collection('notes').update(noteId, updatedNote, (err, result) => {
      if (err) {
        res.send({'error': 'An error has occured'});
      } else {
        res.send(updatedNote);
      }
    })
  })
};