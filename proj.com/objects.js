function calculateX(width, box) {
	return Math.floor((Math.random() * Math.floor((width-2*box)/box) + 1)) * box;
}

function calculateY(placeMin, placeMax) {
	return Math.floor((Math.random() * (placeMax - placeMin) + placeMin));
}

let object = {
	_objects: [],

	_setObjectConstructor(ctx, damage, money, placeMin, placeMax, image, width, box) {
		let len = this._objects.push({
			x: calculateX(width, box),
			y: calculateY(placeMin, placeMax),
			damage: damage,
			money: money,
			placeMin: placeMin,
			placeMax: placeMax,
			image: image
		});
		ctx.fillRect(this._objects[len-1].x, this._objects[len-1].y, 40, 30);
	},

	getObject(){
		return this._objects;
	}
}
