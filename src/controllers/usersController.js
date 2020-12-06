//var mongoose = require("mongoose"),
//Entry = mongoose.model("Entry");

const user = require('../models/userModel');

//read entries normal
exports.read_users = async (req, res) => {
  try {
    const ret = await user.find();
    res.json(ret);
  } catch (error) {
    res.send({ message: 'Bad request: ' + error });
  }
};

//READ ENTRIES CON FILTRO REGISTERED == TRUE Y TAMBIEN CON SORT == TRUE

/*

exports.read_entries = async (req, res) => {
  try {
    var ret = await user.find();
    if (req.query.sort === "true") {
      ret = ret.sort((a, b) => b.score - a.score);
    }
    if (req.query.registered === "yes") {
      ret = ret.filter(a => a.registered === "yes");
    }
    res.json(ret);
  } catch (error) {
    res.send({ message: "Bad GET Request: " + error });
  }
};

*/

exports.create_user = async (req, res) => {
  try {
    const new_user = new user(req.query);
    ret = await new_user.save();
    res.json(ret);
  } catch (error) {
    res.send({ message: 'Bad request: ' + error });
  }
};

exports.read_user = async (req, res) => {
  try {
    const ret = await user.findById(req.params.userId);
    res.send(ret);
  } catch (error) {
    res.send({ message: 'Bad request: ' + error });
  }
};

exports.update_user = async (req, res) => {
  try {
    const ret = await user.findByIdAndUpdate({ _id: req.params.userId }, req.query, { new: true });
    res.json(ret);
  } catch (error) {
    res.send({ message: 'Bad request: ' + error });
  }
};

exports.delete_user = async (req, res) => {
  try {
    const ret = await user.deleteOne({ _id: req.params.userId });
    res.json({ message: 'Deleted user' });
  } catch (error) {
    res.send({ message: 'Bad Request: ' + error });
  }
};
