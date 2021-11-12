let object = {

  _objects: [],

  _setObjectConstructor(ctx, lengthFrom, lengthTo, placeMax, placeMin){
          for(let i=lengthFrom; i<lengthTo; i++){
            this._objects[i] = {
              x: Math.floor((Math.random() * 59 + 1)) * 32,
              y: Math.floor((Math.random() * (placeMax - placeMin) + placeMin))
            };
            ctx.fillRect(this._objects[i].x, this._objects[i].y, 40, 30);
          } 
     },

    getObject(){
       return this._objects;
    }

}