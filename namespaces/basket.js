@using localData;

@client add(productID, amount) {
	let basket = JSON.parse(localData.get('basket')) || {};
	let currentValue = (basket[productID] || 0) * 1;
	currentValue += amount;
	basket[productID] = currentValue;
	localData.set('basket', JSON.stringify(basket));
}

@client set(productID, amount) {
	let basket = JSON.parse(localData.get('basket')) || {};
	basket[productID] = amount * 1;
	localData.set('basket', JSON.stringify(basket));
}

@client get() {
	return JSON.parse(localData.get('basket')) || {};
}

@client clear() {
	localData.set('basket', null);
}

@client remove(productID) {
	let basket = JSON.parse(localData.get('basket')) || {};
	delete basket[productID];
	localData.set('basket', JSON.stringify(basket));
}