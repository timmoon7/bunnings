const fs = require('fs');
const csv = require('csv-parser');

// for jest testing
const createInitialMergedCatalog = require('./functions/createInitialMergedCatalog');
const transformUniqueProductsB = require('./functions/transformUniqueProductsB');
const isBarcodeInBarcodesA = require('./functions/isBarcodeInBarcodesA');

let productsA = [];
let productsB = [];
let barcodesA = [];
let barcodesB = [];
let initialMergedCatalog = [];
let duplicateProductsB = [];
let mergedCatalog = [];

const convertCatalogCsvToArray = (filename) => {
	let products = [];
	return new Promise((resolve, reject) => {
		fs.createReadStream(`input/${filename}`)
			.on('error', (error) => {
				reject(error);
			})
			.pipe(csv())
			.on('data', function (row) {
				const product = {
					SKU: row.SKU,
					Description: row.Description
				};
				products.push(product);
			})
			.on('end', () => {
				resolve(products);
			});
	});
};

const convertBarcodeCsvToArray = (filename) => {
	let barcodes = [];
	return new Promise((resolve, reject) => {
		fs.createReadStream(`input/${filename}`)
			.on('error', (error) => {
				reject(error);
			})
			.pipe(csv())
			.on('data', function (row) {
				const barcode = {
					SKU: row.SKU,
					Barcode: row.Barcode
				};
				barcodes.push(barcode);
			})
			.on('end', () => {
				resolve(barcodes);
			});
	});
};

const getAllBarcodesB = (item) => {
	const barcodes = barcodesB.filter((barcode) => barcode.SKU === item.SKU);
	try {
		barcodes.forEach((barcode) => {
			const result = isBarcodeInBarcodesA(barcodesA, barcode.Barcode);

			if (result.length > 0) {
				duplicateProductsB.push(item);
				throw 'Break';
			}
		});
	} catch (e) {
		if (e !== 'Break') throw e;
	}
};

const addUniqueProductsBIntoMergedCatalog = () => {
	const uniqueProductsB = productsB.filter(
		(n) => !duplicateProductsB.includes(n)
	);

	const transforemdUniqueProductsB = transformUniqueProductsB(uniqueProductsB);
	mergedCatalog = initialMergedCatalog.concat(transforemdUniqueProductsB);
	console.table(mergedCatalog);
};

const writeToCSVFile = (products) => {
	const filename = 'output/merged_catalog.csv';

	fs.writeFile(filename, extractAsCSV(products), (err) => {
		if (err) {
			console.log('Error writing to csv file', err);
		} else {
			console.log(
				`The consolidated product catalog has been saved as ${filename}`
			);
		}
	});
};

const extractAsCSV = (products) => {
	const header = ['SKU,Description'];
	const rows = products.map(
		(product) => `${product.SKU},${product.Description},${product.Source}`
	);
	return header.concat(rows).join('\n');
};

const main = async () => {
	productsA = await convertCatalogCsvToArray('catalogA.csv');
	productsB = await convertCatalogCsvToArray('catalogB.csv');

	barcodesA = await convertBarcodeCsvToArray('barcodesA.csv');
	barcodesB = await convertBarcodeCsvToArray('barcodesB.csv');

	// initial merged Catalog records
	initialMergedCatalog = createInitialMergedCatalog(productsA);

	// get all barcodes for each ProductB and find duplicate products
	const theBarcodes = productsB.forEach(getAllBarcodesB);

	// find and add unique ProductsB into the merged catalog
	addUniqueProductsBIntoMergedCatalog();

	writeToCSVFile(mergedCatalog);
};

main();
