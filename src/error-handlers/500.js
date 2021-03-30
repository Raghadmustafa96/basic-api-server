'use strict';

module.exports = (err, req, res, next) => {
  res.status(500);
  res.statusMessage = 'ERROR FROM server side :)';
  res.json({
    error: err.message,
  });
};