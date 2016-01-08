/// <reference path="../typings/tsd.d.ts" />

import { expect } from 'chai';
import Human from './Human';

describe('Human', () => {
    it('should be instantiated', () => {
       let seth = new Human('seth');
       expect(seth.name).to.equal('seth');
       expect(seth.color).to.equal('blue');
    });

    it('should greet', () => {
        let seth = new Human('seth');
        expect(seth.greet()).to.equal('Hello there, my name is seth');
    });
});
