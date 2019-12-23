/**
 * Class who contains all algoritmhs about Text and String.
 * 
 * @author Nicolas GILLE <nic.gille@gmail.com>
 * @since 0.3.0
 * @version 1.0
 * @license MIT
 */
export default class Strings {

    /**
     * Constructor of the Strings object.
     * 
     * @since 0.3.0
     * @version 1.0
     */
    constructor() { }

    /**
     * Reverse the order of a text.
     * For example, the following text reversed became :
     * "Where is Bryan ?" became "? nayrB si erehW"
     * 
     * @param {string} text
     *  The initial text to reverse order of all characters.
     * @returns {string}
     *  The text with all characters inversed. 
     * 
     * @since 0.3.0
     * @version 1.0
     */
    reverse(text: string): string {
        return text.split("").reverse().join("");
    }
}