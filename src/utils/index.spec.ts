/// <reference path="../../typings/tsd.d.ts" />

import * as utils from './index';

describe('utils', () => {
   it('should repeat', () => {
       let result = utils.repeat('-', 10);
       chai.assert(result === '----------');
   });
});