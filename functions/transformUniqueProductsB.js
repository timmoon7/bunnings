const transformUniqueProductsB = (uniqueProductsB) => {
	return uniqueProductsB.map((product) => ({
		SKU: product.SKU,
		Description: product.Description,
		Source: 'B'
	}));
};

module.exports = transformUniqueProductsB;
