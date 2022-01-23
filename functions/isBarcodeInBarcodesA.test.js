const isBarcodeInBarcodesA = require('./isBarcodeInBarcodesA');

test('isBarcodeInBarcodesA is defiend', () => {
	expect(isBarcodeInBarcodesA).toBeDefined();
});

test('should same as the CatalogA input file with Source A', () => {
	const theBarcode = 'z2783613083817';

	const barCodesA = [
		{ SKU: '647-vyk-317', Barcode: 'z2783613083817' },
		{ SKU: '647-vyk-317', Barcode: 'z2783613083818' },
		{ SKU: '647-vyk-317', Barcode: 'z2783613083819' },
		{ SKU: '647-vyk-317', Barcode: 'n7405223693844' },
		{ SKU: '647-vyk-317', Barcode: 'c7417468772846' },
		{ SKU: '647-vyk-317', Barcode: 'w3744746803743' },
		{ SKU: '647-vyk-317', Barcode: 'w2572813758673' },
		{ SKU: '647-vyk-317', Barcode: 's7013910076253' },
		{ SKU: '647-vyk-317', Barcode: 'm1161615509466' },
		{ SKU: '280-oad-768', Barcode: 'p2359014924610' },
		{ SKU: '280-oad-768', Barcode: 'a7802303764525' },
		{ SKU: '280-oad-768', Barcode: 'o5194275040472' },
		{ SKU: '280-oad-768', Barcode: 'j9023946968130' },
		{ SKU: '280-oad-768', Barcode: 'x5678105140949' },
		{ SKU: '280-oad-768', Barcode: 'c9083052423045' },
		{ SKU: '280-oad-768', Barcode: 'f4322915485228' },
		{ SKU: '280-oad-768', Barcode: 'i0471865670980' },
		{ SKU: '280-oad-768', Barcode: 'i0471865670981' },
		{ SKU: '280-oad-768', Barcode: 'i0471865670982' },
		{ SKU: '280-oad-768', Barcode: 'b4381274928349' },
		{ SKU: '165-rcy-650', Barcode: 'u5160747892301' },
		{ SKU: '165-rcy-650', Barcode: 'm8967092785598' },
		{ SKU: '165-rcy-650', Barcode: 'l7342139757479' },
		{ SKU: '165-rcy-650', Barcode: 'p1667270888414' },
		{ SKU: '165-rcy-650', Barcode: 'v0874763455559' },
		{ SKU: '165-rcy-650', Barcode: 'p9774916416859' },
		{ SKU: '165-rcy-650', Barcode: 'c4858834209466' },
		{ SKU: '165-rcy-650', Barcode: 'x7331732444187' },
		{ SKU: '165-rcy-650', Barcode: 'u7720008047675' },
		{ SKU: '165-rcy-650', Barcode: 'i2431892662423' },
		{ SKU: '165-rcy-650', Barcode: 'o1336108796249' },
		{ SKU: '165-rcy-650', Barcode: 'w7839803663600' },
		{ SKU: '167-eol-949', Barcode: 'a6971219877032' },
		{ SKU: '167-eol-949', Barcode: 'a7340270328026' },
		{ SKU: '167-eol-949', Barcode: 'a0126648261918' },
		{ SKU: '167-eol-949', Barcode: 'a9858014383660' },
		{ SKU: '167-eol-949', Barcode: 'a2338856941909' },
		{ SKU: '167-eol-949', Barcode: 'a5056026479965' },
		{ SKU: '167-eol-949', Barcode: 'a7425424390056' },
		{ SKU: '167-eol-949', Barcode: 'a0864219864945' },
		{ SKU: '167-eol-949', Barcode: 'a1257743939800' },
		{ SKU: '167-eol-949', Barcode: 'a0880467790155' },
		{ SKU: '167-eol-949', Barcode: 'a4469253605532' },
		{ SKU: '167-eol-949', Barcode: 'a0891358702681' },
		{ SKU: '650-epd-782', Barcode: 'n8954999835177' },
		{ SKU: '650-epd-782', Barcode: 'd2381485695273' },
		{ SKU: '650-epd-782', Barcode: 'y0588794459804' },
		{ SKU: '650-epd-782', Barcode: 'v8710606253394' },
		{ SKU: '650-epd-782', Barcode: 'o5184937926186' },
		{ SKU: '650-epd-782', Barcode: 'r4059282550570' },
		{ SKU: '650-epd-782', Barcode: 'k3213966445562' },
		{ SKU: '650-epd-782', Barcode: 'a3343396882074' }
	];

	const expectedResult = [{ SKU: '647-vyk-317', Barcode: 'z2783613083817' }];

	expect(isBarcodeInBarcodesA(barCodesA, theBarcode)).toEqual(expectedResult);
});
