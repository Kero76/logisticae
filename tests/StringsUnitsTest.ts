import Strings from '../src/Strings';
import { assert, expect, should } from 'chai';
import 'mocha';

const strings = new Strings();

describe('Strings', () => {

    describe('reverse', () => {
        it('Should return dlroW olleH', () => {
            const result = strings.reverse("Hello World");

            assert.strictEqual(result, "dlroW olleH");
        });
        it('Should return kayak', () => {
            const result = strings.reverse("kayak");

            assert.strictEqual(result, "kayak");
        });
        it('Should return an empty string', () => {
            const result = strings.reverse("");

            assert.isString(result);
            assert.isEmpty(result);
        });
    });


});