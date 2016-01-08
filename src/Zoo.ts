import Animal from './Animal';

export default class Zoo {
    residents: Animal[] = [];
    
    constructor() {}
    
    public capture(a: Animal) {
        this.residents.push(a);
    }
    
    public get residentCount() {
        return this.residents.length;
    }
}