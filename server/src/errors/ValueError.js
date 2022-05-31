class ValueError extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
    this.name = "ValueError";
  } 

  toJSON = ()=> ({
    name: this.name,
    status: this.status,
    message: this.message
  })
}

module.exports = ValueError;