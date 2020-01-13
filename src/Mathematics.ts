import Point from './geometry/Point';
import MathHelper from './helpers/MathHelper';

/**
 * Class who contains all elements relatives to the Mathematics sciences.
 *
 * @author Nicolas GILLE <nic.gille@gmail.com>
 * @since 0.1.0
 * @version 1.0
 * @license MIT
 */
export default class Mathematics {
    /**
     * Default constructor of the class.
     *
     * @constructor
     *
     * @since 0.1.0
     * @version 1.0
     */
    constructor() {}

    /**
     * Pythagorean theorem used to check if a triangle is right or not.
     *
     * @param {number} hypotenuse
     *  Hypotenuse of the potential right triangle
     * @param {number} cathetus1
     *  First cathetus of the potential right triangle.
     * @param {number} cathetus2
     *  Seconde cathetus of the potential right triangle.
     * @returns {boolean}
     *  A boolean to indicate if the triangle is right or not.
     *
     * @since 0.1.0
     * @version 1.1
     */
    pythagoreanTheorem(hypotenuse: number, cathetus1: number, cathetus2: number): boolean {
        const squareHypotenuse = MathHelper.square(hypotenuse);
        const squareCathetuses = MathHelper.square(cathetus1) + MathHelper.square(cathetus2);

        return squareHypotenuse === squareCathetuses;
    }

    /**
     * Compute the thirds side of a right triangle.
     * To this, get two sizes to compute the last size.
     *
     * @param {number} hypotenuse
     *  Hypotenuse of the triangle.
     * @param {number} cathetus1
     *  First side of the triangle.
     * @param {number} cathetus2
     *  Second side of the triangle.
     * @returns {number}
     *  The size of the third value of the right triangle.
     * @throws {Error}
     *  Will throw if 2 of the 3 values expected are NaN.
     *
     * @since 0.1.0
     * @version 1.1
     */
    pythagoreanTheoremConverse(hypotenuse: number, cathetus1: number, cathetus2: number): number {
        if (
            (isNaN(hypotenuse) && isNaN(cathetus1)) ||
            (isNaN(hypotenuse) && isNaN(cathetus2)) ||
            (isNaN(cathetus1) && isNaN(cathetus2))
        ) {
            throw new Error('2 of the 3 values are expected to compute the last value.');
        }

        // hypotenuse found, then compute a cathete size, so in other case compute the hypotenuse size
        let res = 0;
        if (!isNaN(hypotenuse)) {
            // First size is empty, so compute it then compute the second size.
            if (!isNaN(cathetus1)) {
                const _cathete = MathHelper.square(hypotenuse) - MathHelper.square(cathetus1);
                res = Math.sqrt(_cathete);
            } else {
                const _cathete = MathHelper.square(hypotenuse) - MathHelper.square(cathetus2);
                res = Math.sqrt(_cathete);
            }
        } else {
            const _hypotenuse = MathHelper.square(cathetus1) + MathHelper.square(cathetus2);
            res = Math.sqrt(_hypotenuse);
        }

        return res;
    }

    /**
     * Application of the Thales Theorem used to compute 2 of the 6 side's size missing.
     *
     * @param {number} ad
     *  Length of the segment AD.
     * @param {number} ab
     *  Length of the segment AB.
     * @param {number} ae
     *  Length of the segment AE.
     * @param {number} ac
     *  Length of the segment AC.
     * @param {number} de
     *  Length of the segment DE.
     * @param {number} bc
     *  Length of the segment BC.
     * @returns {object}
     *  An object with the length of each segments expected as an associative array with
     * the name of the segment as *key* and the size of the segment as *value*.
     *
     * @since 0.1.0
     * @version 1.0
     */
    interceptTheorem(ad: number, ab: number, ae: number, ac: number, de: number, bc: number): object {
        let _ad = isNaN(ad) ? 0 : ad;
        let _ae = isNaN(ae) ? 0 : ae;
        let _de = isNaN(de) ? 0 : de;
        let _ab = isNaN(ab) ? 0 : ab;
        let _ac = isNaN(ac) ? 0 : ac;
        let _bc = isNaN(bc) ? 0 : bc;

        // We search segment AD.
        if (_ad === 0 && _ae !== 0 && _ac !== 0 && _ab !== 0) _ad = this._crossMultiplication(_ab, _ae, _ac);
        else if (_ad === 0 && _de !== 0 && _bc !== 0 && _ab !== 0) _ad = this._crossMultiplication(_ab, _de, _bc);

        // We search segment AB.
        if (_ab === 0 && _ae !== 0 && _ac !== 0 && _ad !== 0) _ab = this._crossMultiplication(_ad, _ac, _ae);
        else if (_ab === 0 && _de !== 0 && _bc !== 0 && _ad !== 0) _ab = this._crossMultiplication(_ad, _bc, _de);

        // We search segment AE.
        if (_ae === 0 && _ad !== 0 && _ab !== 0 && _ac !== 0) _ae = this._crossMultiplication(_ac, _ad, _ab);

        // We search segment AD.
        if (_ac === 0 && _ad !== 0 && _ab !== 0 && _ae !== 0) _ac = this._crossMultiplication(_ae, _ab, _ad);

        // We search segment DE.
        if (_de === 0 && _ad !== 0 && _ab !== 0 && _bc !== 0) _de = this._crossMultiplication(_bc, _ad, _ab);

        // We search segment BC.
        if (_bc === 0 && _ad !== 0 && _ab !== 0 && _de !== 0) _bc = this._crossMultiplication(_de, _ab, _ad);

        return {
            ad: _ad,
            ab: _ab,
            ae: _ae,
            ac: _ac,
            de: _de,
            bc: _bc,
        };
    }

    /**
     * Indicate if the segment [DE] and [BC] are parallel or not.
     *
     * @param {number} ad
     *  Length of segment AD.
     * @param {number} ab
     *  Length of segment AB.
     * @param {number} ae
     *  Length of segment AE.
     * @param {number} ac
     *  Length of segment AC.
     * @param {number} precision
     *  Precision of the result excepted. By default, the number of digit expected is equal at 2 digits.
     * @returns {boolean}
     *  A boolean to indicate if the segment [DE] and [BC] are parallel or not.
     *
     * @since 0.1.0
     * @version 1.1
     */
    interceptTheoremConverse(ad: number, ab: number, ae: number, ac: number, precision: number = 2): boolean {
        return MathHelper.floor(ad / ab, precision) === MathHelper.floor(ae / ac, precision);
    }

    /**
     * Euclidean algorithm to compute the Greatest Common Divisor or GCD.
     *
     * @param {number} opA
     *  First operand of the operation.
     * @param {number} opB
     *  Second operand of the operation.
     * @returns {number}
     *  The greatest common divisor between the operand A et operand B.
     *
     * @since 0.1.0
     * @version 1.0
     */
    euclideanAlgorithm(a: number, b: number): number {
        var opA = a;
        var opB = b;
        var tmp = opA;

        while (opB > 0) {
            tmp = opA % opB;
            opA = opB;
            opB = tmp;
        }

        return Math.abs(opA);
    }

    /**
     * Get the Least Common Multiple (LCM) of two numbers.
     *
     * @param {number} a
     *  A number.
     * @param {number} b
     *  Another number.
     * @returns {number}
     *  The least common multiple between a and b.
     *
     * @since 0.1.0
     * @version 1.0
     */
    lcmAlgorithm(a: number, b: number): number {
        if (a === 0 || b === 0) return 0;
        return Math.abs((a * b) / this.euclideanAlgorithm(a, b));
    }

    /**
     * Check if a number is a Mersenne Number or not.
     *
     * This method implement the Lucas-Lehmer algorithm.
     * You can get more information about this algorithm here :
     * https://en.wikipedia.org/wiki/Lucas%E2%80%93Lehmer_primality_test
     *
     * @param x {number}
     *  The number to test.
     * @returns {boolean}
     *  True if x is a Mersenne Number.
     *
     * @since 0.4.0
     * @version 1.0
     */
    isMersenneNumber(x: number): boolean {
        return this._lucasLehmerAlgorithm(x);
    }

    /**
     * Check if a number is a prime number or not.
     *
     * @param x {number}
     *  Number to check is a prime number.
     * @returns {boolean}
     *  True if x is a prime number.
     *
     * @since 0.4.0
     * @version 1.0
     */
    isPrimeNumber(x: number): boolean {
        if (x % 2 === 0) return x === 2;

        if (x === 1) return false;

        for (let i = 3; i * i <= x; i += 2) {
            if (x % i === 0) {
                return false;
            }
        }

        return true;
    }

    /**
     * Compute the slope of a line.
     *
     * @param a {Point}
     *  The point A.
     * @param b {Point}
     *  The point b.
     * @returns {number}
     *  The slope of the line.
     * @throws {Error}
     *  Thrown an Error when the denominator is equal to 0.
     *
     * @see Point
     * @since 0.4.0
     * @version 1.0
     */
    lineSlope(a: Point, b: Point): number {
        if (b.x - a.x === 0) throw new Error('Cannot divide by 0.');

        return (b.y - a.y) / (b.x - a.x);
    }

    /**
     * Compute the *size* element of the fibonacci sequence.
     *
     * @param size {number}
     *  The number of element must be compute and returns
     * @param hasNegativeValue {boolean}
     *  Return also the negative number.
     * @returns {Array}
     *  An array with all computed value.
     *
     * @since 0.5.0
     * @version 1.0
     */
    fibonacci(size: number, hasNegativeValue: boolean = false): Array<number> {
        let fibonacci = new Array<number>();
        fibonacci.push(1);
        fibonacci.push(1);

        size = size - 2; // Remove the two '1' present to start the algorithm.

        // Return only the two first number of the suite.
        if (size < 3) return fibonacci;

        // Compute positive value.
        for (let i = 0; i < size; ++i) {
            let val = fibonacci[i] + fibonacci[i + 1];
            fibonacci.push(val);
        }

        console.log(fibonacci);

        // Compute negative value
        if (hasNegativeValue) {
            let j = 0;

            while (j < size) {
                let val = fibonacci[1] - fibonacci[0];
                fibonacci.unshift(val);

                j++;
            }
        }

        return fibonacci;
    }

    // Private functions //
    /**
     * Compute a cross multiplication.
     *
     * @param {number} a
     *  First operand to multiply with b.
     * @param {number} b
     *  Second operand to multiply with a.
     * @param {number} c
     *  Third operand to divide result of a * b.
     * @returns {number}
     *  The fourth operand of the cross multiplication.
     *
     * @ignore
     * @private
     *
     * @see interceptTheorem
     * @since 0.1.0
     * @version 1.0
     */

    private _crossMultiplication(a: number, b: number, c: number): number {
        return (a * b) / c;
    }

    /**
     * Check if the number x is a Mersenne Prime or not.
     *
     * @param x {number}
     *  The number to check.
     * @returns {boolean}
     *  Return true if the number x is a Mersenne Prime or false in other case.
     *
     * @ignore
     * @private
     *
     * @see isMersenneNumber
     * @see MathHelper.square
     * @since 0.4.0
     * @version 1.0
     */
    private _lucasLehmerAlgorithm(x: number): boolean {
        let s = 4;
        let m = Math.pow(2, x) - 1;

        for (let i = x - 2; i > 0; --i) {
            s = (s * s - 2) % m;

            if (s === 0) return true;
        }

        return false;
    }
}
