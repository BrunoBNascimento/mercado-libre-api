const itemsService = require('../service/item');

module.exports = {
  async all(req, res) {
    const { query: { name } } = req;

    res.json(await itemsService.items(name));
  },
  async itemById(req, res) {
    const { params: { id } } = req
    
    res.json(await itemsService.itemById(id));
  }
}
