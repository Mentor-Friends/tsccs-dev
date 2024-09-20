import { sayHi } from "./sayHi";

test('Returns a greeting as a string',function(){
    // should return a string
	expect(typeof sayHi()).toBe('string');

    // should include the provided name
	expect(sayHi('Merlin').includes('Merlin')).toBe(true);
});