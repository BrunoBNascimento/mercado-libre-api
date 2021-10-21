const api = require('../common/api');
const categoriesFactory = require('../factory/categories.factory');
const itemDetailsFactory = require('../factory/item-details.factory');
const itemFactory = require('../factory/item.factory');

module.exports = {
    async itemById(id) {
      const [details, description] = await Promise.all([
        api.get(`/items/${id}`),
        api.get(`/items/${id}/description`),
      ]);

        return {
            "author": {
                "name": "Bruno",
                "lastname": "Benicio",
            },
            item: itemDetailsFactory({ ...details.data, description })
          }
    },
    async items(name) {
      const { data: { results, filters } } = await api.get('/sites/MLA/search', { params: { q: name } });

        return {
            "author": {
                "name": "Bruno",
                "lastname": "Benicio",
            },
            categories: categoriesFactory(filters),
            items: results.slice(0, 4).map(itemFactory)
        }
    }
}
