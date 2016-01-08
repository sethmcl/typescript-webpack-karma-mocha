/// <reference path="../typings/tsd.d.ts" />

import { expect } from 'chai';
import Turtle from './Turtle';

describe('Turtle', () => {
    it('should be instantiated', () => {
       let michael = new Turtle('michael');
       expect(michael.name).to.equal('michael');
       expect(michael.color).to.equal('green');
    });

    it('should greet', () => {
        let michael = new Turtle('michael');
        expect(michael.greet()).to.equal('rbrbrb...');
    });
});
