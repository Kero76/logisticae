import { EnumUnit, DistanceUnit, LiterUnit, WeightUnit } from "./ConverterUnits";

/**
 * Class who contains all elements relatives to the Physics sciences.
 * 
 * @author Nicolas GILLE <nic.gille@gmail.com>
 * @since 0.2.0
 * @version 1.0
 * @license MIT
 */
export default class Physics {

    /**
     * Constructor of the Physics objects.
     * 
     * @since 0.2.0
     * @version 1.0
     */
    constructor() { }

    /**
     * Convert a value in specific unit into an another unit.
     * 
     * This method convert a weight, a distance or a liter unit into another one.
     * To this, it take as parameter the value expected
     * For example, to convert 12l into ml.
     * 
     * 
     * @param {number} value 
     *  Value of the initial unit to convert. In the example define 
     * @param {EnumUnit} initialUnit 
     *  The initial unit. 
     * @param {EnumUnit} targetUnit 
     *  The target unit.
     * @returns {number}
     *  A number which represent the value for the targetUnit.
     */
    convert(value: number, initialUnit: EnumUnit, targetUnit: EnumUnit): number {
        if ((initialUnit instanceof DistanceUnit && targetUnit instanceof DistanceUnit) || 
            (initialUnit instanceof LiterUnit && targetUnit instanceof LiterUnit) ||
            (initialUnit instanceof WeightUnit && targetUnit instanceof WeightUnit))
            return (value * initialUnit.value) / targetUnit.value;
        else
            throw new Error("Unit not implemented in converter.");
    }
}