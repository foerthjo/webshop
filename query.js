const db = require('../Nicestack/core/cryptodb');
const uuid = require('../Nicestack/core/uuid');

const storage = db.createDB('storage', false);

[{brand: 'VW', factor: 1}, {brand: 'BMW', factor: 1.2}, {brand: 'Mercedes', factor: 2}, {brand: 'Audi', factor: 1.5}].forEach(({brand, factor}) => {
	[{name: 'Scheibenwischer', price: 30}, {name: 'Lüftungsgitter', price: 20}, {name: 'Türgriff innen', price: 25}, {name: 'Radio', price: 60}].forEach(({name, price}) => {
		let item = {
			price: Math.round(price * factor) - .01,
			materials: ['PVC', 'PFA'],
			brand,
			name,
		};
		storage.store('products', uuid.compressed(), item);
	});
});

/*
[
	{
		id: 2736482,
		price: 14.99,
		materials: ['PVC'],
		brand: 'VW',
		name: 'Axialflansch',
	},
	{
		id: 2845289,
		price: 12.99,
		materials: ['PVC', 'SFA'],
		brand: 'BMW',
		name: 'Leimsud',
	},
	{
		id: 726348273682,
		price: 20.00,
		materials: ['PVC', 'PFA'],
		brand: 'Mercedes',
		name: 'Rückspiegelhebelkappe',
	}
].forEach(item => {
	storage.store('products', item.id, item);
});
*/