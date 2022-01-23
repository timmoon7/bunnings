const transformUniqueProductsB = require('./transformUniqueProductsB');

test('should add source field with B value', () => {
	const uniqueProductsB = [
		{ SKU: '999-eol-949', Description: 'Cheese - Grana Padano' },
		{ SKU: '999-epd-782', Description: 'Carbonated Water - Lemon Lime' }
	];

	const expectedResult = [
		{
			SKU: '999-eol-949',
			Description: 'Cheese - Grana Padano',
			Source: 'B'
		},
		{
			SKU: '999-epd-782',
			Description: 'Carbonated Water - Lemon Lime',
			Source: 'B'
		}
	];
	expect(transformUniqueProductsB(uniqueProductsB)).toEqual(expectedResult);
});
