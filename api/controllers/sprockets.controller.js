const Sprocket = require('../models/Sprocket');

exports.getAllSprockets = async (req, res) => {
  try {
    const sprockets = await Sprocket.findAll();
    res.json(sprockets);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getSprocketById = async (req, res) => {
  try {
    const sprocket = await Sprocket.findByPk(req.params.id);
    if (!sprocket) {
      return res.status(404).json({ message: 'Sprocket not found' });
    }
    res.json(sprocket);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createSprocket = async (req, res) => {
  try {
    const newSprocket = await Sprocket.create(req.body);
    res.status(201).json(newSprocket);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateSprocket = async (req, res) => {
  try {
    const sprocket = await Sprocket.findByPk(req.params.id);
    if (!sprocket) {
      return res.status(404).json({ message: 'Sprocket not found' });
    }
    await sprocket.update(req.body);
    res.json(sprocket);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};