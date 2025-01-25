const fs = require('fs');
const path = require('path');

module.exports = (req, res, next) => {
  const date = new Date().toISOString().split('T')[0]; // Apenas a data (YYYY-MM-DD)
  const logFileName = `logs-${date}.txt`;
  const log = `${new Date().toISOString()} - ${req.method} ${req.originalUrl}\n`;
  fs.appendFileSync(path.join(__dirname, `../${logFileName}`), log);
  next();
};
