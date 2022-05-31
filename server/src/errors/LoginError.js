class LoginError extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
    this.name = "LoginError";
  } 

  toJSON = ()=> ({
    name: this.name,
    status: this.status,
    message: this.message
  })
}

module.exports = LoginError;