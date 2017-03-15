module.exports = function(app){
  app.get('/api', function(req, res){
    //get from database
    res.json({ firstname: 'John', lastname: 'Doe' });
  });

  app.post('/api/person/', function(req, res){
    //post to database
  })

  app.delete('/api/person/:id', function(req, res){
    //delete from database
  })
}