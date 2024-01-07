class Ninja{
    constructor(nombre){
        this.nombre=nombre;
        this.salud=50;
        this.velocidad=3;
        this.fuerza=3;
    }
    sayName (){
        console.log(`El nombre del ninja es: ${this.nombre}`);
    }
    showStats (){
        console.log(`El nombre: ${this.nombre}, la fuerza: ${this.fuerza}, la velocidad: ${this.velocidad}, la salud: ${this.salud}`);
    }
    drinkSake (){
        this.salud+=10;
    }
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
