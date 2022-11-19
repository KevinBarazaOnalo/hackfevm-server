const _ = require("lodash");

function HttpResponse() {}
HttpResponse.bad_request = (data) => {
  return { status: 400, message: _.isUndefined(data) ? "Bad Request" : data };
};
HttpResponse.unauthorized = (data) => {
  return {
    status: 401,
    message: _.isUndefined(data) ? "Unauthorized" : data,
  };
};
HttpResponse.forbidden = (data) => {
  return {
    status: 403,
    message: _.isUndefined(data) ? "Forbidden " : data,
  };
};
HttpResponse.not_found = (data) => {
  return {
    status: 404,
    message: _.isUndefined(data) ? "Not Found " : data,
  };
};
HttpResponse.internal_server_error = (data) => {
  return {
    status: 500,
    message: _.isUndefined(data) ? "Internal Server Error" : data,
  };
};
HttpResponse.ok = (data) => {
  return {
    status: 200,
    message: _.isUndefined(data) ? "OK" : data,
  };
};
HttpResponse.created = (data) => {
  return {
    status: 201,
    message: _.isUndefined(data) ? "Created" : data,
  };
};
HttpResponse.no_content = (data) => {
  return {
    status: 204,
    message: _.isUndefined(data) ? "OK" : data,
  };
};
module.exports = HttpResponse;
