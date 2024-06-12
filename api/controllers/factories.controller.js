const Factory = require('../models/Factory');

exports.getAllFactories = async (req, res) => {
  try {
    const factories = await Factory.findAll();
    res.json(factories);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getFactoryById = async (req, res) => {
  try {
    const factory = await Factory.findByPk(req.params.id);
    if (!factory) {
      return res.status(404).json({ message: 'Factory not found' });
    }
    res.json(factory);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};