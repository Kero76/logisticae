import { assert } from 'chai';
import 'mocha';
import Strings from '../src/Strings';

const strings = new Strings();

describe('Strings', () => {
    describe('reverse', () => {
        it('Should return dlroW olleH', () => {
            const result = strings.reverse('Hello World');

            assert.strictEqual(result, 'dlroW olleH');
        });
        it('Should return kayak', () => {
            const result = strings.reverse('kayak');

            assert.strictEqual(result, 'kayak');
        });
        it('Should return an empty string', () => {
            const result = strings.reverse('');

            assert.isString(result);
            assert.isEmpty(result);
        });
    });

    describe('palindrome', () => {
        it('Should return true because the case sensitive is not checked for the text "Ah, Satan sees Natasha"', () => {
            const result = strings.palindrome('Ah, Satan sees Natasha');

            assert.isTrue(result);
        });
        it('Should return false because the case sensitive is checked for the text "Ah, Satan sees Natasha"', () => {
            const result = strings.palindrome('Ah, Satan sees Natasha', true);

            assert.isFalse(result);
        });
        it("Should return false because the text isn't a palindrome", () => {
            const result = strings.palindrome("Don't nad.");

            assert.isFalse(result);
        });
        it('Should return true with a text who composed only by number.', () => {
            const result = strings.palindrome('1 2 3 4 5 4 3 2 1');

            assert.isTrue(result);
        });
    });
});
