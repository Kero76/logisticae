/**
 * An enum which represent all enum units can be found in project.
 * 
 * @author Nicolas GILLE <nic.gille@gmail.com>
 * @since 0.2.0
 * @version 1.0
 * @license MIT
 */
interface EnumUnit {}

/**
 * DistanceUnit is an "enum" like which represent all distances unit 
 * available in the unit converter.
 * 
 * @author Nicolas GILLE <nic.gille@gmail.com>
 * @since 0.2.0
 * @version 1.0
 * @license MIT
 * 
 * @implements EnumUnit
 * @see https://en.wikipedia.org/wiki/Kilometre to implements all meters distances.
 */
export class DistanceUnit implements EnumUnit {

    /**
     * Contains all value of the enum.
     * 
     * @ignore
     * @private
     */
    private static AllValues: {[name: string]: DistanceUnit} = {};

    static readonly KILOMETER = new DistanceUnit("km", 1000000);
    static readonly HECTOMETER = new DistanceUnit("hm", 100000);
    static readonly DECAMETER = new DistanceUnit("dam", 10000);
    static readonly METER = new DistanceUnit("m", 1000);
    static readonly DECIMETER = new DistanceUnit("dm", 100);
    static readonly CENTIMETER = new DistanceUnit("cm", 10);
    static readonly MILLIMETER = new DistanceUnit("mm", 1);

    /**
     * Private constructor who fill the content of the "enum".
     * 
     * @ignore
     * @private
     * 
     * @param symbol {string}
     *  Symbol of the unit.
     * @param value {number}
     *  Unit value for conversion.
     * 
     * @since 0.2.0
     * @version 1.0
     */
    private constructor(public readonly symbol?: string, public readonly value?: number) {
        DistanceUnit.AllValues[symbol] = this;
    }

    /**
     * Get a specific value of the enum.
     * 
     * @param symbol {string}
     *  The name of the unit expected.
     * @returns {DistanceUnit}
     *  The DistanceUnit expected.
     * 
     * @since 0.2.0
     * @version 1.0
     */
    public static get(symbol: string): DistanceUnit {
        return DistanceUnit.AllValues[symbol];
    }
};

/**
 * LiterUnit is an "enum" like which represent all liters unit 
 * available in the unit converter.
 * 
 * @author Nicolas GILLE <nic.gille@gmail.com>
 * @since 0.2.0
 * @version 1.0
 * @license MIT
 * 
 * @implements EnumUnit
 */
export class LiterUnit implements EnumUnit {

    /**
     * Contains all value of the enum.
     * 
     * @ignore
     * @private
     */
    private static AllValues: {[name: string]: DistanceUnit} = {};
    
    static readonly KILOLITER = new LiterUnit("kl", 1000000);
    static readonly HECTOLITER = new LiterUnit("hl", 100000);
    static readonly DECALITER = new LiterUnit("dal", 10000);
    static readonly LITER = new LiterUnit("l", 1000);
    static readonly DECILITER = new LiterUnit("dl", 100);
    static readonly CENTILITER = new LiterUnit("cl", 10);
    static readonly MILLILITER = new LiterUnit("ml", 1);
    
    /**
     * Private constructor who fill the content of the "enum".
     * 
     * @ignore
     * @private
     * 
     * @param symbol {string}
     *  Symbol of the unit.
     * @param value {number}
     *  Unit value for conversion.
     * 
     * @since 0.2.0
     * @version 1.0
     */
   private constructor(public readonly symbol?: string, public readonly value?: number) {
       LiterUnit.AllValues[symbol] = this;
   }

   /**
    * Get a specific value of the enum.
    * 
    * @param symbol {string}
    *  The name of the unit expected.
    * @returns {LiterUnit}
    *  The LiterUnit expected.
    * 
    * @since 0.2.0
    * @version 1.0
    */
   public static get(symbol: string): LiterUnit {
       return LiterUnit.AllValues[symbol];
   }
    
};

/**
 * WeightUnit is an "enum" like which represent all weights unit 
 * available in the unit converter.
 * 
 * @author Nicolas GILLE <nic.gille@gmail.com>
 * @since 0.2.0
 * @version 1.0
 * @license MIT
 * 
 * @implements EnumUnit
 */
export class WeightUnit implements EnumUnit {

    /**
     * Contains all value of the enum.
     * 
     * @ignore
     * @private
     */
    private static AllValues: {[name: string]: WeightUnit} = {};

    static readonly KILOGRAM = new WeightUnit("kg", 1000000);
    static readonly HECTOGRAM = new WeightUnit("hg", 100000);
    static readonly DECAGRAM = new WeightUnit("dag", 10000);
    static readonly GRAM = new WeightUnit("g", 1000);
    static readonly DECIGRAM = new WeightUnit("dg", 100);
    static readonly CENTIGRAM = new WeightUnit("cg", 10);
    static readonly MILLIGRAM = new WeightUnit("mg", 1);

    /**
     * Private constructor who fill the content of the "enum".
     * 
     * @ignore
     * @private
     * 
     * @param symbol {string}
     *  Symbol of the unit.
     * @param value {number}
     *  Unit value for conversion.
     * 
     * @since 0.2.0
     * @version 1.0
     */
    private constructor(public readonly symbol?: string, public readonly value?: number) {
        WeightUnit.AllValues[symbol] = this;
    }

    /**
     * Get a specific value of the enum.
     * 
     * @param symbol {string}
     *  The name of the unit expected.
     * @returns {WeightUnit}
     *  The WeightUnit expected.
     * 
     * @since 0.2.0
     * @version 1.0
     */
    public static get(symbol: string): WeightUnit {
        return WeightUnit.AllValues[symbol];
    }
};