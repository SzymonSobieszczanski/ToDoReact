const Hero = require('./hero-model');
const ReadPreference = require('mongodb').ReadPreference;

require('./mongo').connect();

function get(req, res) { 
  var hero;
  var today = new Date();
  var month = today.getMonth()+1;
  var day = today.getDate();
  var year = today.getFullYear();
  today = year+'-'+month+'-'+day;
  var day2 = day+7;
 
  console.log(today);



 if(req.params.name == "today")
  {
    hero = Hero.find({"date" : new Date(year+'-'+month+'-'+day+'T11:00:00.000Z'),completed: false}).read(ReadPreference.NEAREST);
 
  }     
  else if (req.params.name == 'completed'){

    hero = Hero.find({completed: true}).read(ReadPreference.NEAREST);

  }
  else if (req.params.name == 'nextWeek'){
    
        hero = Hero.find({date:{ $gt: new Date(year+'-'+month+'-'+day+'T11:00:00.000Z'), $lt: new Date(year+'-'+month+'-'+day2+'T11:00:00.000Z') },completed:false}).read(ReadPreference.NEAREST);
    
      }
      else{ hero = Hero.find({}).read(ReadPreference.NEAREST);}
  const docquery = hero; 
  docquery
    .exec()
    .then(heroes => {
      res.json(heroes);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}



function create(req, res) {
  const {name,date } = req.body;

  const hero = new Hero({name,date });
  hero
    .save()
    .then(() => {
      res.json(hero);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

function update(req, res) {
  const { _id, name,date } = req.body;

  Hero.findOne({ _id })
    .then(hero => {
      hero.name = name;      
      hero.date = date;
      hero.save().then(res.json(hero));
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

function completed(req, res) {
  const { _id } = req.params;

  Hero.findOne({ _id })
    .then(hero => {
      hero.completed = true;
      hero.save().then(res.json(hero));
    })
    .catch(err => {
      res.status(500).send(err);
    });
}


function destroy(req, res) {
  const { _id } = req.params;

  Hero.findOneAndRemove({ _id })
    .then(hero => {
      res.json(hero);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

module.exports = { get, create, update, destroy,completed };
