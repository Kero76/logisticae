/**
 * Class who contains all algorithms about Text and String.
 *
 * @author Nicolas GILLE <nic.gille@gmail.com>
 * @since 0.3.0
 * @version 1.0
 * @license MIT
 */
export default class Strings {
    /**
     * Get all punctuations from a string.
     *
     * @static
     *
     * @since 0.3.0
     * @version 1.0
     */
    static PUNCTUATION_REGEX: RegExp = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-./:;<=>?@[\]^_`{|}~]/g;

    /**
     * Get all spaces from a string.
     *
     * @static
     *
     * @since 0.3.0
     * @version 1.0
     */
    static SPACE_REGEX: RegExp = /\s+/g;

    /**
     * Constructor of the Strings object.
     *
     * @since 0.3.0
     * @version 1.0
     */
    constructor() {}

    /**
     * Reverse the order of a text.
     * For example, the following text reversed became :
     * "Where is Bryan ?" became "? nayrB si erehW"
     *
     * @param {string} text
     *  The initial text to reverse order of all characters.
     * @returns {string}
     *  The text with all characters inverted.
     *
     * @since 0.3.0
     * @version 1.0
     */
    reverse(text: string): string {
        return text
            .split('')
            .reverse()
            .join('');
    }

    /**
     * Check if the text is a palindrome.
     *
     * @param {string} text
     *  The text.
     * @param {boolean} isCaseSensitive
     *  Specify if the palindrome is concerned by the case sensitivity or not.
     * By default, the palindrome don't check the case sensitive.
     * @returns {boolean}
     *  A boolean to indicate if the text is a palindrome or not.
     *
     * @since 0.3.0
     * @version 1.0
     */

    palindrome(text: string, isCaseSensitive: boolean = false): boolean {
        if (!isCaseSensitive) {
            text = text.toLocaleLowerCase();
        }

        text = text.replace(Strings.PUNCTUATION_REGEX, '').replace(Strings.SPACE_REGEX, '');
        const reverseText = this.reverse(text)
            .replace(Strings.PUNCTUATION_REGEX, '')
            .replace(Strings.SPACE_REGEX, '');

        return text === reverseText;
    }
}
