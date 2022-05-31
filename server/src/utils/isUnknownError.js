const isUnknowError = (error)=> {
  return error.toJSON && error.status && 
    error.name && error.message ? false : true;
}

module.exports = isUnknowError;