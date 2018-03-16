const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Score
      .find({firstName: req.params.firstName, lastName: req.params.lastName})
      .then(dbModel => {console.log(dbModel); return res.json(dbModel)})
      .catch(err => res.status(422).json(err));
  },
  
  create: function(req, res) {
    db.Score
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Score
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  signUp: function(req, res) {
    console.log(db.SignIn);
    db.SignIn
      .create(req.body)
      .then(dbModel => {console.log(dbModel); return res.json(dbModel)})
      .catch(err => res.status(422).json(err));
  },
  loggedIn: function(req, res){
    console.log(req.params.loggedIn);
    // console.log(db.SignIn);
    db.SignIn
      .find({loggedin: req.params.loggedIn})
      .then(dbModel => { console.log(dbModel); return res.json(dbModel);})
      .catch(err => res.status(422).json(err));
  },
  logIn: function(req, res){
    const query = {userName: req.body.userName, password: req.body.password};
    db.SignIn
    .findOneAndUpdate(query, {loggedin: true})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  logOut: function(req, res){
    const query = {userName: req.body.userName, password: req.body.password};
    db.SignIn
    .findOneAndUpdate(query, {loggedin: false})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  }
};