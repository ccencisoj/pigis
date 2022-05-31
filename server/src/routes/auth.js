const AuthError = require("../errors/AuthError");

const auth = {};

auth.parent = ({required})=> (req, res, next)=> {
  if(required && !(req.session && req.session.parent))  
    throw new AuthError("Es necesario autenticarse");  
  return next();
}

auth.child = ({required})=> (req, res, next)=> {
  if(required && !(req.session && req.session.child))  
    throw new AuthError("Es necesario autenticarse");  
  return next();
}

module.exports = auth;