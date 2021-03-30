module.exports = (req, res, next) => {
    console.log('__Request__', req.method, req.path);
    next(); // with no arguments :)
  };