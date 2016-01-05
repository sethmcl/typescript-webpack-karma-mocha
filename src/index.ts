import * as plugins from './plugins';

let { Hello, Goodbye, Exclaim } = plugins;

let hello = new Hello('Seth');
let goodbye = new Goodbye();
let exclaim = new Exclaim('what');

hello.speak();
exclaim.speak();
goodbye.speak();