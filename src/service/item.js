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
      console.log(details.data, description.data)
      
        return {
            "author": {
                "name": "Fulano",
                "lastname": "De tal",
            },
            item: itemDetailsFactory({ ...details.data, description })
          }
    },
    async items(name) {
      const { data: { results, filters } } = await api.get('/sites/MLA/search', { params: { q: name } });

        return {
            "author": {
                "name": "Fulano",
                "lastname": "De tal",
            },
            categories: categoriesFactory(filters),
            items: results.slice(0, 4).map(itemFactory)
        }
    }
}
