/**
 * Class who represent a geometric point in 2 dimensions.
 *
 * @author Nicolas GILLE <nic.gille@gmail.com>
 * @since 0.4.0
 * @version 1.0
 * @license MIT
 */
export default class Point {
    x: number;
    y: number;

    /**
     * Constructor of a 2 dimensions point.
     *
     * @constructor
     * @param x {number}
     *  Coordinate x of the point.
     * @param y {number}
     *  Coordinate y of the point.
     *
     * @since 0.4.0
     * @version 1.0
     */
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}
