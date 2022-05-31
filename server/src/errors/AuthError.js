class AuthError extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
    this.name = "AuthError";
  } 

  toJSON = ()=> ({
    name: this.name,
    status: this.status,
    message: this.message
  })
}

module.exports = AuthError;