const flatten = require('lodash.flatten');

const getPathFromRoot = (value) => value.path_from_root.map(path => path.name)

const categoriesFactory = (filters = []) => {
  const category = filters.find(filter => filter.id === 'category');
  
  if(!category) return []

  return flatten(category.values.map(getPathFromRoot))
}

module.exports = categoriesFactory
