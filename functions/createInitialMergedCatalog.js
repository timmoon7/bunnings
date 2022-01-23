const createInitialMergedCatalog = (productsA) => {
	return productsA.map((product) => ({
		SKU: product.SKU,
		Description: product.Description,
		Source: 'A'
	}));
};

module.exports = createInitialMergedCatalog;
