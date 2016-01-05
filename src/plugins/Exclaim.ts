import * as utils from '../utils';

export class Exclaim {
    word: string;

    constructor(word: string) {
        this.word = word;
    }

    speak() {
        utils.print(`${this.word}${utils.repeat('!', 20)}`);
    }
}
