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
     * Square value.
     * 
     * @static
     */ 
    static readonly SQUARE: number = 2;

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
     * @param {number} hypothenuse 
     *  Hypothenuse of the potential right triangle
     * @param {number} cathetus1 
     *  First cathetus of the potential right triangle.
     * @param {number} cathetus2 
     *  Seconde cathetus of the potential right triangle.
     * @returns {boolean}
     *  A boolean to indicate if the triangle is right or not.
     * 
     * @since 0.1.0
     * @version 1.0
     */
    pythagoreanTheorem(hypothenuse: number, cathetus1: number, cathetus2: number): boolean {
        const squareHypothenuse = Math.pow(hypothenuse, Mathematics.SQUARE);
        const squareCathetuses = Math.pow(cathetus1, Mathematics.SQUARE) + 
                                 Math.pow(cathetus2, Mathematics.SQUARE);

        return (squareHypothenuse === squareCathetuses);
    }

    /**
     * Compute the thirds side of a right triangle.
     * To this, get two sizes to compute the last size.
     * 
     * @param {number} hypothenuse 
     *  Hypothenuse of the triangle.
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
     * @version 1.0
     */
    pythagoreanTheoremConverse(hypothenuse: number, cathetus1: number, cathetus2: number): number {
        if ((isNaN(hypothenuse) && isNaN(cathetus1)) ||
            (isNaN(hypothenuse) && isNaN(cathetus2)) ||
            (isNaN(cathetus1) && isNaN(cathetus2))) {
            throw new Error('2 of the 3 values are expected to compute the last value.');
        }

        // Hypothenuse found, then compute a cathete size, so in other case compute the hypothenuse size
        let res = 0;
        if (!isNaN(hypothenuse)) {
            // First size is empty, so compute it then compute the second size.
            if (!isNaN(cathetus1)) {
                const _cathete = Math.pow(hypothenuse, Mathematics.SQUARE) - Math.pow(cathetus1, Mathematics.SQUARE);
                res = Math.sqrt(_cathete);
            } else {
                const _cathete = Math.pow(hypothenuse, Mathematics.SQUARE) - Math.pow(cathetus2, Mathematics.SQUARE);
                res = Math.sqrt(_cathete);
            }
        } else {
            const _hypothenuse = Math.pow(cathetus1, Mathematics.SQUARE) + Math.pow(cathetus2, Mathematics.SQUARE);
            res = Math.sqrt(_hypothenuse);
        }

        return res;
    }

    /**
     * Application of the Thales Theorem used to compute 2 of the 6 side's size missings.
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
        if (_ad === 0 && _ae !== 0 && _ac !== 0 && _ab !== 0) 
            _ad = this._crossMultiplication(_ab, _ae, _ac);
        else if (_ad === 0 && _de !== 0 && _bc !== 0 && _ab !== 0) 
            _ad = this._crossMultiplication(_ab, _de, _bc);
         
        // We search segment AB.
        if (_ab === 0 && _ae !== 0 && _ac !== 0 && _ad !== 0) 
            _ab = this._crossMultiplication(_ad, _ac, _ae);
        else if (_ab === 0 && _de !== 0 && _bc !== 0 && _ad !== 0) 
            _ab = this._crossMultiplication(_ad, _bc, _de);
         
        // We search segment AE.
        if (_ae === 0 && _ad !== 0 && _ab !== 0 && _ac !== 0)
            _ae = this._crossMultiplication(_ac, _ad, _ab);
         else if (_ae === 0 && _de !== 0 && _bc !== 0 && _ac !== 0) 
            _ae = this._crossMultiplication(_ac, _de, _bc);
        
        // We search segment AD.
        if (_ac === 0 && _ad !== 0 && _ab !== 0 && _ae !== 0) 
            _ac = this._crossMultiplication(_ae, _ab, _ad);
        else if (_ac === 0 && _de !== 0 && _bc !== 0 && _ae !== 0) 
            _ac = this._crossMultiplication(_ae, _bc, _de);

        // We search segment DE.
        if (_de === 0 && _ad !== 0 && _ab !== 0 && _bc !== 0) 
            _de = this._crossMultiplication(_bc, _ad, _ab);
        else if (_de === 0 && _ae !== 0 && _ac !== 0 && _bc !== 0) 
            _de = this._crossMultiplication(_bc, _ae, _ac);

        // We search segment BC.
        if (_bc === 0 && _ad !== 0 && _ab !== 0 && _de !== 0)
            _bc = this._crossMultiplication(_de, _ab, _ad);
        else if (_bc === 0 && _ae !== 0 && _ac !== 0 && _de !== 0)
            _bc = this._crossMultiplication(_de, ac, _ae);

        return {
            "ad": _ad,
            "ab": _ab,
            "ae": _ae,
            "ac": _ac,
            "de": _de,
            "bc": _bc,
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
     *  Precision of the result excepted.
     * @returns {boolean}
     *  A boolean to indicate if the segment [DE] and [BC] are parallel or not.
     * 
     * @since 0.1.0
     * @version 1.0
     */
    interceptTheoremConverse(ad: number, ab: number, ae: number, ac: number, precision: number = 100): boolean {
        return (Math.round((ad / ab) * precision) / precision) === (Math.round((ae / ac) * precision) / precision);
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

        while (opB > 0){
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
        if (a === 0 || b === 0) 
            return 0;
        
        return Math.abs((a * b) / this.euclideanAlgorithm(a, b));
    }

    // Private functions //
    /**
     * Compute a cross multiplication.
     * 
     * @ignore
     * @private 
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
     * @see interceptTheorem
     * @since 0.1.0
     * @version 1.0
     */ 
    private _crossMultiplication(a: number, b: number, c: number): number {
        return (a * b) / c;
    }
}