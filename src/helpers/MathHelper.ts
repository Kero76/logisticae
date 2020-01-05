/**
 * Math helper to extends or create helper method.
 * 
 * @author Nicolas GILLE <nic.gille@gmail.com>
 * @since 0.4.0
 * @version 1.0
 * @license MIT
 */
export default class MathHelper {

    /**
     * Return the value of a number rounded to the nearest number.
     * 
     * @param x {number}
     *  The number to rounded.
     * @param precision {number}
     *  The precision expected. 
     * By default, the precision is equal at 2 digits.
     * @returns {number}
     *  The value of the given number rounded to the nearest number.
     * 
     * @since 0.4.0
     * @version 1.0
     */
    static floor(x: number, precision: number = 2): number {
        const tmp = Math.pow(10, precision);
        
        return Math.floor(x * tmp) / tmp;
    }

    /**
     * Return the squared value of x.
     * 
     * @param x {number}
     *  Number to get the squared value.
     * @returns {number}
     *  The number upped to the square value.
     * 
     * @since 0.4.0
     * @version 1.0
     */
    static square(x: number): number {
        return Math.pow(x, 2);
    }
}
