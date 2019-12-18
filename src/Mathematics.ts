/**
 * Class who contains all elements relatives to the Mathematics sciences.
 * 
 * @author Nicolas GILLE <nic.gille@gmail.com>
 * @since 1.0
 * @version 1.0
 * @license MIT
 */
export default class Mathematics {

    // Value used to mark the square value.
    readonly square: number = 2;

    /**
     * Default constructor of the class.
     * 
     * @constructor
     * 
     * @since 1.0
     */
    constructor() {}

    /**
     * Pythagorean theorem used to check if a triangle is right or not.
     * 
     * @param {number} hypothenuse 
     *  Hypothenuse of the potential right triangle
     * @param {number} cathete1 
     *  First cathere of the potential right triangle.
     * @param {number} cathete2 
     *  Seconde cathere of the potential right triangle.
     * @returns 
     *  A boolean to indicate if the triangle is right or not.
     * 
     * @since 1.0
     */
    pythagoreanTheorem(hypothenuse: number, cathete1: number, cathete2: number): boolean {
        const squareHypothenuse = Math.pow(hypothenuse, this.square);
        const squareCathetuses = Math.pow(cathete1, this.square) + 
                                 Math.pow(cathete2, this.square);

        return (squareHypothenuse === squareCathetuses);
    }

    /**
     * Compute the thirds side of a right triangle.
     * 
     * @param {number} hypothenuse 
     *  Potential hypothenuse of the triangle.
     * @param {number} cathete1 
     *  First size of the triangle.
     * @param {number} cathete2 
     *  Seconde side of the triangle.
     * @returns
     *  The size of the third value of the right triangle.
     * 
     * @since 1.0
     */
    pythagoreanTheoremConverse(hypothenuse: number, cathete1: number, cathete2: number): number {
        if ((isNaN(hypothenuse) && isNaN(cathete1)) ||
            (isNaN(hypothenuse) && isNaN(cathete2)) ||
            (isNaN(cathete1) && isNaN(cathete2))) {
            throw new Error('2 of the 3 values are expected to compute the last value.');
        }

        // Hypothenuse found, then compute a cathete size, so in other case compute the hypothenuse size
        let res = 0;
        if (!isNaN(hypothenuse)) {
            // First size is empty, so compute it then compute the second size.
            if (!isNaN(cathete1)) {
                const _cathete = Math.pow(hypothenuse, this.square) - Math.pow(cathete1, this.square);
                res = Math.sqrt(_cathete);
            } else {
                const _cathete = Math.pow(hypothenuse, this.square) - Math.pow(cathete2, this.square);
                res = Math.sqrt(_cathete);
            }
        } else {
            const _hypothenuse = Math.pow(cathete1, this.square) + Math.pow(cathete2, this.square);
            res = Math.sqrt(_hypothenuse);
        }

        return res;
    }

    /**
     * Application of the Thales Theorem.
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
     * @returns 
     *  An object with the length of each segments expected as an associative array.
     * 
     * @see _crossMultiplication
     * 
     * @since 1.0
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
     * @returns 
     *  A boolean to indicate if the segment [DE] and [BC] are parallel or not.
     * 
     * @since 1.0
     */
    interceptTheoremConverse(ad: number, ab: number, ae: number, ac: number, precision: number = 100): boolean {
        return (Math.round((ad / ab) * precision) / precision) === (Math.round((ae / ac) * precision) / precision);
    }

    /**
     * Euclidean algorithm to compute the gcd.
     * 
     * @param {number} opA 
     *  First operande of the operation.
     * @param {number} opB 
     *  Seconde operande of the operation.
     * @returns 
     *  The greatest common divisor between the operand A et operand B. 
     * 
     * @since 1.0
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
     * Get the Least Common Multiple of two numbers.
     * 
     * @param {number} a 
     *  A number.
     * @param {number} b 
     *  Another number.
     * @returns 
     *  The least common multiple between a and b.
     * 
     * @since 1.0
     */
    lcmAlgorithm(a: number, b: number): number {
        if (a === 0 || b === 0) 
            return 0;
        
        return Math.abs((a * b) / this.euclideanAlgorithm(a, b));
    }

    // Private functions //
    /**
     * Compute the cross multiplication.
     * 
     * @private 
     * 
     * @param {number} a 
     *  First operand to multiply with b.
     * @param {number} b 
     *  Second operand to multiply with a.
     * @param {number} c 
     *  Third operand to divide result of a * b.
     * @returns 
     *  The fourth operand of the cross multiplication.
     * 
     * @see interceptTheorem
     * 
     * @since 1.0
     */ 
    _crossMultiplication(a: number, b: number, c: number): number {
        return (a * b) / c;
    }
}