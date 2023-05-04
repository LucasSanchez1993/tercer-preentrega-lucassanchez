class analisis{
    constructor(id,nombre, precio){
      this.id = id;
      this.nombre = nombre.toUpperCase();
      this.precio = precio;
    }
    toString = function () {
      return this.nombre + "( $" + this.precio.toFixed(2) + ")"
    };
  }
  