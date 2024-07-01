const { metricsDbConnection } = require('../db.js');
const mongoose = require('mongoose');

const MetricSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
      },
      RQ1: {
        type: String,
        required: true
      },
      RQ2: {
        type: String,
        required: true
      },
      RQ5: { 
        type: String,
        required: true
      }
    });

module.exports = metricsDbConnection.model('Metric', MetricSchema);
