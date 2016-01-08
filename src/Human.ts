import Animal from './Animal';

export default class Human extends Animal {
    constructor(name: string) {
        super(name, 'blue');
    }

    public greet() {
        return `Hello there, my name is ${this.name}`;
    }
}
