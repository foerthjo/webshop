@client set() {
	this.numberFormat = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' });
}

@client format(number) {
	return this.numberFormat.format(number);
}