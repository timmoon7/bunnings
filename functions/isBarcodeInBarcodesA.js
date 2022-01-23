const isBarcodeInBarcodesA = (barcodesA, theBarcode) => {
	return barcodesA.filter((barcode) => barcode.Barcode === theBarcode);
};

module.exports = isBarcodeInBarcodesA;
