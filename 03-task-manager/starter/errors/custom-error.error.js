class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const createCustomError = (message, statuscode) =>
  new CustomAPIError(message, statuscode);

module.exports = { createCustomError, CustomAPIError };
