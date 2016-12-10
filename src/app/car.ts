class Engine {
    cylinders():number{
        return 8;
    }
}
class Tires {
    make(): number {
        return 4;
    }

}
export class Car {
    public description = 'NO DI';

    constructor(public engine: Engine, public tires: Tires) {
    }

    //method using the engine and tires
    drive() {
        return `${this.description} car with ` +
        `${this.engine.cylinders} cylinders and ${this.tires.make} tires.`;
    }

}
