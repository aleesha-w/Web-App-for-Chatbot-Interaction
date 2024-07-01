const express = require('express');
const router = express.Router();
const Metric = require('../schema/metrics_schema'); 

router.get('/metrics', async (req, res) => {
    try {
        const metrics = await Metric.find(); 
        res.json(metrics); 
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/metrics', async (req, res) => {
    const metric = new Metric({
      Name: req.body.Name,
      RQ1: req.body.RQ1,
      RQ2: req.body.RQ2,
      RQ5: req.body.RQ5
    });
  
    try {
      const newMetric = await metric.save();
      res.status(201).json(newMetric);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  module.exports = router;