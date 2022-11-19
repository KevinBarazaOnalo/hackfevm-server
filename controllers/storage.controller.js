const _ = require("lodash");
const StorageService = require("../services/storage.service");
const HttpResponse = require("../common/http.response");

function StorageController() {
  const _service = new StorageService();

  this.post = async (req, res) => {
    let result = HttpResponse.bad_request();
    try {
      const response = await _service.acceptDeal(req.body);
      if (!_.isUndefined(response) && !_.isNull(response)) {
        result = HttpResponse.created(response);
      }
    } catch (error) {
      result = HttpResponse.internal_server_error(error);
    }
    return res.status(result.status).json(result.message);
  };
}
module.exports = StorageController;
