const createInitialMergedCatalog = require('./createInitialMergedCatalog');

test('createInitialMergedCatalog is defiend', () => {
	expect(createInitialMergedCatalog).toBeDefined();
});

test('should same as the CatalogA input file with Source A', () => {
	const productsA = [
		{ SKU: '647-vyk-317', Description: 'Walkers Special Old Whiskey' },
		{ SKU: '280-oad-768', Description: 'Bread - Raisin' },
		{ SKU: '165-rcy-650', Description: 'Tea - Decaf 1 Cup' },
		{ SKU: '167-eol-949', Description: 'Cheese - Grana Padano' },
		{ SKU: '650-epd-782', Description: 'Carbonated Water - Lemon Lime' }
	];

	const expectedResult = [
		{
			SKU: '647-vyk-317',
			Description: 'Walkers Special Old Whiskey',
			Source: 'A'
		},
		{ SKU: '280-oad-768', Description: 'Bread - Raisin', Source: 'A' },
		{ SKU: '165-rcy-650', Description: 'Tea - Decaf 1 Cup', Source: 'A' },
		{
			SKU: '167-eol-949',
			Description: 'Cheese - Grana Padano',
			Source: 'A'
		},
		{
			SKU: '650-epd-782',
			Description: 'Carbonated Water - Lemon Lime',
			Source: 'A'
		}
	];
	expect(createInitialMergedCatalog(productsA)).toEqual(expectedResult);
});
