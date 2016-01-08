abstract class Animal {
    public name: string;
    public color: string;
    
    constructor(name: string, color: string) {
        this.name = name;
        this.color = color;
    }
    
    abstract greet(): string;
}

export default Animal;