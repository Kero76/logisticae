import { assert } from 'chai';
import 'mocha';
import Mathematics from '../src/Mathematics';

const maths = new Mathematics();

describe('Mathematics', () => {

    describe('pythagoreanTheorem', () => {
        it('(5, 4, 3) should return true', () => {
            const result = maths.pythagoreanTheorem(5, 4, 3);

            assert.isTrue(result);
        });
        it('(6, 4, 3) should return false', () => {
            const result = maths.pythagoreanTheorem(6, 4, 3);

            assert.isFalse(result);
        });
    });

    describe('pythagoreanTheoremConverse', () => {
        it('(NaN, 4, 3) should return 5', () => {
            const result = maths.pythagoreanTheoremConverse(NaN, 4, 3);

            assert.strictEqual(result, 5);
        });
        it('(5, 4, NaN) should return 3', () => {
            const result = maths.pythagoreanTheoremConverse(5, 4, NaN);

            assert.strictEqual(result, 3);
        });
        it('(5, NaN, 3) should return 4', () => {
            const result = maths.pythagoreanTheoremConverse(5, NaN, 3);

            assert.strictEqual(result, 4);
        });
        it('(NaN, 4, NaN) should throw an exception', () => {
            try {
                maths.pythagoreanTheoremConverse(NaN, 4, NaN)
            } catch(err) {
                assert.strictEqual(true, err instanceof Error);
            }
        });
    });

    describe('interceptTheorem', () => {
        it('(NaN, 5, NaN, 10, 6, 15) should return AD = 2 & AE = 4', () => {
            const result = maths.interceptTheorem(NaN, 5, NaN, 10, 6, 15);
            
            assert.strictEqual(result['ad'], 2);
            assert.strictEqual(result['ab'], 5);
            assert.strictEqual(result['ae'], 4);
            assert.strictEqual(result['ac'], 10);
            assert.strictEqual(result['de'], 6);
            assert.strictEqual(result['bc'], 15);
        });
        it('(NaN, 5, 4, NaN, 6, 15) should return AD = 2 & AC = 10', () => {
            const result = maths.interceptTheorem(NaN, 5, 4, NaN, 6, 15);

            assert.strictEqual(result['ad'], 2);
            assert.strictEqual(result['ab'], 5);
            assert.strictEqual(result['ae'], 4);
            assert.strictEqual(result['ac'], 10);
            assert.strictEqual(result['de'], 6);
            assert.strictEqual(result['bc'], 15);
        });
        it('(NaN, 5, 4, 10, NaN, 15) should return AD = 2 & DE = 6', () => {
            const result = maths.interceptTheorem(NaN, 5, 4, 10, NaN, 15);

            assert.strictEqual(result['ad'], 2);
            assert.strictEqual(result['ab'], 5);
            assert.strictEqual(result['ae'], 4);
            assert.strictEqual(result['ac'], 10);
            assert.strictEqual(result['de'], 6);
            assert.strictEqual(result['bc'], 15);
        });
        it('(NaN, 5, 4, 10, 6, NaN) should return AD = 2 & BC = 15', () => {
            const result = maths.interceptTheorem(NaN, 5, 4, 10, 6, NaN);

            assert.strictEqual(result['ad'], 2);
            assert.strictEqual(result['ab'], 5);
            assert.strictEqual(result['ae'], 4);
            assert.strictEqual(result['ac'], 10);
            assert.strictEqual(result['de'], 6);
            assert.strictEqual(result['bc'], 15);
        });

        it('(2, NaN, NaN, 10, 6, 15) should return AB = 5 & AE = 4', () => {
            const result = maths.interceptTheorem(2, NaN, NaN, 10, 6, 15);

            assert.strictEqual(result['ad'], 2);
            assert.strictEqual(result['ab'], 5);
            assert.strictEqual(result['ae'], 4);
            assert.strictEqual(result['ac'], 10);
            assert.strictEqual(result['de'], 6);
            assert.strictEqual(result['bc'], 15);
        });
        it('(2, NaN, 4, NaN, 6, 15) should return AB = 5 & AC = 10', () => {
            const result = maths.interceptTheorem(2, NaN, 4, NaN, 6, 15);

            assert.strictEqual(result['ad'], 2);
            assert.strictEqual(result['ab'], 5);
            assert.strictEqual(result['ae'], 4);
            assert.strictEqual(result['ac'], 10);
            assert.strictEqual(result['de'], 6);
            assert.strictEqual(result['bc'], 15);
        });
        it('(2, NaN, 4, 10, NaN, 15) should return AB = 5 & DE = 6', () => {
            const result = maths.interceptTheorem(2, NaN, 4, 10, NaN, 15);

            assert.strictEqual(result['ad'], 2);
            assert.strictEqual(result['ab'], 5);
            assert.strictEqual(result['ae'], 4);
            assert.strictEqual(result['ac'], 10);
            assert.strictEqual(result['de'], 6);
            assert.strictEqual(result['bc'], 15);
        });
        it('(2, NaN, 4, 10, 6, NaN) should return AB = 5 & BC = 15', () => {
            const result = maths.interceptTheorem(2, NaN, 4, 10, 6, NaN);

            assert.strictEqual(result['ad'], 2);
            assert.strictEqual(result['ab'], 5);
            assert.strictEqual(result['ae'], 4);
            assert.strictEqual(result['ac'], 10);
            assert.strictEqual(result['de'], 6);
            assert.strictEqual(result['bc'], 15);
        });

        it('(2, 5, NaN, 10, NaN, 15) should return AE = 4 & DE = 6', () => {
            const result = maths.interceptTheorem(2, 5, NaN, 10, NaN, 15);

            assert.strictEqual(result['ad'], 2);
            assert.strictEqual(result['ab'], 5);
            assert.strictEqual(result['ae'], 4);
            assert.strictEqual(result['ac'], 10);
            assert.strictEqual(result['de'], 6);
            assert.strictEqual(result['bc'], 15);
        });
        it('(2, 5, NaN, 10, 6, NaN) should return AE = 4 & BC = 15', () => {
            const result = maths.interceptTheorem(2, 5, NaN, 10, 6, NaN);

            assert.strictEqual(result['ad'], 2);
            assert.strictEqual(result['ab'], 5);
            assert.strictEqual(result['ae'], 4);
            assert.strictEqual(result['ac'], 10);
            assert.strictEqual(result['de'], 6);
            assert.strictEqual(result['bc'], 15);
        });

        it('(2, 5, 4, NaN, NaN, 15) should return AC = 10 & DE = 6', () => {
            const result = maths.interceptTheorem(2, 5, 4, NaN, NaN, 15);

            assert.strictEqual(result['ad'], 2);
            assert.strictEqual(result['ab'], 5);
            assert.strictEqual(result['ae'], 4);
            assert.strictEqual(result['ac'], 10);
            assert.strictEqual(result['de'], 6);
            assert.strictEqual(result['bc'], 15);
        });
        it('(2, 5, 4, NaN, 6, NaN) should return AC = 10 & BC = 15', () => {
            const result = maths.interceptTheorem(2, 5, 4, NaN, 6, NaN);

            assert.strictEqual(result['ad'], 2);
            assert.strictEqual(result['ab'], 5);
            assert.strictEqual(result['ae'], 4);
            assert.strictEqual(result['ac'], 10);
            assert.strictEqual(result['de'], 6);
            assert.strictEqual(result['bc'], 15);
        });
    });

    describe('interceptTheoremConverse', () => {
        it('(2, 4, 4, 8) should return true', () => {
            const result = maths.interceptTheoremConverse(2, 4, 4, 8);
            
            assert.isTrue(result);
        });
        it('(2, 4, 5, 17) should return false', () => {
            const result = maths.interceptTheoremConverse(2, 4, 5, 17);

            assert.isFalse(result);
        });
    });

    describe('euclideanAlgorithm', () => {
        it('(10, 8) should return 2', () => {
            const result = maths.euclideanAlgorithm(10, 8);

            assert.strictEqual(result, 2);
        });
        it('(17, 25) should return 1', () => {
            const result = maths.euclideanAlgorithm(17, 25);

            assert.strictEqual(result, 1);
        });
        it('(-3, -15) should return 3', () => {
            const result = maths.euclideanAlgorithm(-3, -15);

            assert.strictEqual(result, 3);
        });
    });

    describe('lcmAlgorithm', () => {
        it('(10, 15) should return 30', () => {
            const result = maths.lcmAlgorithm(15, 30);

            assert.strictEqual(result, 30);
        });
        it('(0, 12) should return 0', () => {
            const result = maths.lcmAlgorithm(0, 12);

            assert.strictEqual(result, 0);
        });
        it('(-10, -30) should return 30', () => {
            const result = maths.lcmAlgorithm(-10, -30);

            assert.strictEqual(result, 30);
        });
    });

});
