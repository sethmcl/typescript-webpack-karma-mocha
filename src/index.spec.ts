/// <reference path="../typings/tsd.d.ts" />

import * as utils from './utils';
import * as plugins from './plugins';

let { Hello, Goodbye, Exclaim } = plugins;

describe('index', () => {
    it('should be true', () => {
        utils.print('hello');
        chai.assert(true === true);
   });
});
