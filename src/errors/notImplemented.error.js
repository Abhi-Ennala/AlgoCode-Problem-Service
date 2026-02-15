const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");


class NotImplementedError extends BaseError{
  constructor(methodName) {
    super('NotImplementedError', StatusCodes.NOT_IMPLEMENTED, `${methodName} is not implemented`, {});
  }
}

module.exports = NotImplementedError;