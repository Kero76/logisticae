import { EnumUnit, DistanceUnit, LiterUnit, WeightUnit, DegreeUnit } from "./ConverterUnits";

/**
 * Class who contains all elements relatives to the Physics sciences.
 * 
 * @author Nicolas GILLE <nic.gille@gmail.com>
 * @since 0.2.0
 * @version 1.1
 * @license MIT
 */
export default class Physics {

    /**
     * Value of the absolute zero in kelvin.
     * 
     * @since 0.4.0
     * @version 1.0
     */
    static ABSOLUTE_ZERO = -273.15;

    /**
     * Constructor of the Physics objects.
     * 
     * @since 0.2.0
     * @version 1.0
     */
    constructor() { }

    /**
     * Convert a value from a weight, a distance or a liter unit into an another unit.
     * 
     * @param {number} value 
     *  Value of the initial unit to convert. 
     * @param {EnumUnit} initialUnit 
     *  The initial unit. 
     * @param {EnumUnit} targetUnit 
     *  The target unit.
     * @returns {number}
     *  A number which represent the value for the targetUnit.
     * @throws {Error} 
     *  Will throw an error if the EnumUnit are not the same.
     * 
     * @since 0.2.0
     * @version 1.0
     */
    convert(value: number, initialUnit: EnumUnit, targetUnit: EnumUnit): number {
        if ((initialUnit instanceof DistanceUnit && targetUnit instanceof DistanceUnit) || 
            (initialUnit instanceof LiterUnit && targetUnit instanceof LiterUnit) ||
            (initialUnit instanceof WeightUnit && targetUnit instanceof WeightUnit))
            return (value * initialUnit.value) / targetUnit.value;
        else
            throw new Error("Unit not implemented in converter.");
    }

    /**
     * Convert a temperature to another degrees unit.
     * 
     * @param {number} value 
     *  Value of the initial unit to convert.
     * @param {EnumUnit} initialUnit 
     *  The initial unit. 
     * @param {EnumUnit} targetUnit 
     *  The target unit.
     * @returns {number}
     *  A number which represent the value for the targetUnit.
     * 
     * @since 0.4.0
     * @version 1.0
     */
    convertDegree(value: number, initialUnit: EnumUnit, targetUnit: EnumUnit) {
        if (initialUnit instanceof DegreeUnit && targetUnit instanceof DegreeUnit) {
            // Kelvin to another unit.
            if (initialUnit.symbol == DegreeUnit.KELVIN) {
                if (targetUnit.symbol == DegreeUnit.CELSIUS) {
                    return value + Physics.ABSOLUTE_ZERO; 
                } else {
                    return value * 1.8 - 459.67;
                }
            }

            // Celsius to another unit.
            else if (initialUnit.symbol == DegreeUnit.CELSIUS) {
                if (targetUnit.symbol == DegreeUnit.KELVIN) {
                    return value - Physics.ABSOLUTE_ZERO; 
                } else {
                    return value * 1.8 + 32;
                }
            }

            // Fahrenheit to another unit.
            else if (initialUnit.symbol == DegreeUnit.FAHRENHEIT) {
                if (targetUnit.symbol == DegreeUnit.KELVIN) {
                    return (value + 459.15) / 1.8; 
                } else {
                    return (value - 32) / 1.8;
                }
            }
        }
        else 
            throw new Error("Unit not implemented in converter.");
    }

    /**
     * Compute the voltage from the power and the intensity.
     * 
     * @param {number} power 
     *  The power in watt.
     * @param {number} intensity 
     *  The intensity in ampere.
     * @returns {number}
     *  The voltage in volt.
     * 
     * @since 0.2.0
     * @version 1.0
     */
    computeVoltageFromPowerAndIntensity(power: number, intensity: number): number {
        return power / intensity;
    }

    /**
     * Compute the voltage from the resistance and the intensity.
     * 
     * @param {number} power 
     *  The resistance in ohm.
     * @param {number} intensity 
     *  The intensity in ampere.
     * @returns {number}
     *  The voltage in volt.
     * 
     * @since 0.2.0
     * @version 1.0
     */
    computeVoltageFromResistanceAndIntensity(resistance: number, intensity: number): number {
        return resistance * intensity;
    }

    /**
     * Compute the voltage from the power and the resistance.
     * 
     * @param {number} power 
     *  The power in watt.
     * @param {number} resistance 
     *  The resistance in ohm.
     * @returns {number}
     *  The voltage in volt.
     *
     * @since 0.2.0
     * @version 1.0
     */
    computeVoltageFromPowerAndResistance(power: number, resistance: number): number {
        return Math.sqrt(power * resistance);
    }

    /**
     * Compute the intensity in function of the power and the voltage.
     * 
     * @param {number} power 
     *  The power in watt.
     * @param {number} voltage 
     *  The voltage in volt.
     * @returns {number}
     *  The intensity in ampere.
     * 
     * @since 0.2.0
     * @version 1.0
     */
    computeIntensityFromPowerAndVoltage(power: number, voltage: number): number {
        return power / voltage;
    }

    /**
     * Compute the intensity in function of the voltage and the resistance.
     * 
     * @param {number} voltage 
     *  The voltage in volt
     * @param {number} resistance 
     *  The resistance in ohm.
     * @returns {number}
     *  The intensity in ampere.
     * 
     * @since 0.2.0
     * @version 1.0
     */
    computeIntensityFromVoltageAndResistance(voltage: number, resistance: number): number {
        return voltage / resistance;
    }

    /**
     * Compute the intensity in function of the power and the resistance.
     * 
     * @param {number} power 
     *  The power in watt.
     * @param {number} resistance 
     *  The resistance in ohm.
     * @returns {number}
     *  The intensity in ampere.
     * 
     * @since 0.2.0
     * @version 1.0
     */
    computeIntensityFromPowerAndResistance(power: number, resistance: number): number {
        return Math.sqrt(power / resistance);
    }

    /**
     * Compute the poower in function of the voltage and the resstance.
     * 
     * @param {number} voltage 
     * The voltage in volt.
     * @param {number} intensity 
     *  The intensity in ampere.
     * @returns {number}
     *  The power in ohm.
     * 
     * @since 0.2.0
     * @version 1.0
     */
    computePowerFromVoltageAndIntensity(voltage: number, intensity: number): number {
        return voltage * intensity;
    }

    /**
     * Compute the power in function of the resistance and the intensity.
     * 
     * @param {number} resistance 
     *  The resistance in ohm.
     * @param {number} intensity 
     *  The intensity in ampere.
     * @returns {number}
     *  The power in watt.
     * 
     * @since 0.2.0
     * @version 1.0
     */
    computePowerFromResistanceAndIntensity(resistance: number, intensity: number): number {
        return resistance * Math.pow(intensity, 2);
    }

    /**
     * Compute the power in function of the voltage and the resistance.
     * 
     * @param {number} voltage 
     *  The voltage in volt.
     * @param {number} resistance 
     *  The resistance in ohm.
     * @returns {number}
     *  The power in watt. 
     * 
     * @since 0.2.0
     * @version 1.0
     */
    computePowerFromVoltageAndResistance(voltage: number, resistance: number): number {
        return Math.pow(voltage, 2) / resistance;
    }

    /**
     * Compute the resistance in function of the voltage and the intensity.
     * 
     * @param {number} voltage 
     *  The voltage in volt.
     * @param {number} intensity 
     *  The intensity in ampere.
     * @returns {number}
     *  The resistance in ohm.
     * 
     * @since 0.2.0
     * @version 1.0
     */
    computeResistanceFromVoltageAndIntensity(voltage: number, intensity: number): number {
        return voltage / intensity;
    }

    /**
     * Compute the resistance in function of the voltage and the intensity.
     * 
     * @param {number} voltage 
     *  The voltage in volt.
     * @param {number} power 
     *  The power in watt.
     * @returns {number}
     *  The resistance in ohm.
     * 
     * @since 0.2.0
     * @version 1.0
     */
    computeResistanceFromVoltageAndPower(voltage: number, power: number): number {
        return Math.pow(voltage, 2) / power;
    }

    /**
     * Compute the resistance in function of the power and the intensity.
     * 
     * @param {number} voltage 
     *  The power in watt.
     * @param {number} power 
     *  The intensity in ampere.
     * @returns {number}
     *  The resistance in ohm.
     * 
     * @since 0.2.0
     * @version 1.0
     */
    computeResistanceFromPowerAndIntensity(power: number, intensity: number): number {
        return power / Math.pow(intensity, 2);
    }
}