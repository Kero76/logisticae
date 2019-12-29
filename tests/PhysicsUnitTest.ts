import Physics from '../src/Physics';
import { DistanceUnit, LiterUnit, WeightUnit, DegreeUnit } from '../src/ConverterUnits';
import { assert, expect, should } from 'chai';
import 'mocha';

const physics = new Physics();

describe('Physics', () => {

    describe('convert', () => {
        it('Should convert 1L to 100cl', () => {
            const result = physics.convert(1, LiterUnit.LITER, LiterUnit.CENTILITER);

            assert.strictEqual(result, 100);
        });
        it ('Should convert 5L to 50dl', () => {
            const result = physics.convert(5, LiterUnit.LITER, LiterUnit.DECILITER);

            assert.strictEqual(result, 50);
        });
        it('Should convert 2.37g to 0.00237kg', () => {
            const result = physics.convert(2.37, WeightUnit.GRAM, WeightUnit.KILOGRAM);

            assert.strictEqual(result, 0.00237);
        });
        it('Should convert 50dam into 0.5km', () => {
            const result  = physics.convert(50, WeightUnit.DECAGRAM, WeightUnit.KILOGRAM);

            assert.strictEqual(result, 0.5);
        });
        it('Should thrown an Error because we will try to convert gram into meter', () => {
            try {
                physics.convert(1, WeightUnit.GRAM, DistanceUnit.METER);
            } catch(err) {
                assert.strictEqual(true, err instanceof Error);
            }
        });
    });

    describe('Voltage formula', () => {
        describe('computeVoltageFromPowerAndIntensity', () => {
            it('Should return 2V', () => {
                const result = physics.computeVoltageFromPowerAndIntensity(10, 5);
    
                assert.strictEqual(result, 2);
            });
        });
    
        describe('computeVoltageFromResistanceAndIntensity', () => {
            it('Should return 1V', () => {
                const result = physics.computeVoltageFromResistanceAndIntensity(0.5, 2);
    
                assert.strictEqual(result, 1);
            });
        });
    
        describe('computeVoltageFromPowerAndResistance', () => {
            it('Should return 10V', () => {
                const result = physics.computeVoltageFromPowerAndResistance(10, 10);
    
                assert.strictEqual(result, 10);
            });
        });
    });
    
    describe('convertDegree', () => {
        it('Should convert 10°C into Fahrenheit', () => {
            const result = physics.convertDegree(10, DegreeUnit.CELSIUS, DegreeUnit.FAHRENHEIT);

            assert.strictEqual(result, 50);
        });
        it('Should convert 10°C into Kelvin', () => {
            const result = physics.convertDegree(10, DegreeUnit.CELSIUS, DegreeUnit.KELVIN);

            assert.strictEqual(result, 283.15);
        });

        it('Should convert 50°F into Celsius', () => {
            const result = physics.convertDegree(50, DegreeUnit.FAHRENHEIT, DegreeUnit.CELSIUS);

            assert.strictEqual(result, 10);
        });
        it('Should convert 50°F into Kelvin', () => {
            const result = physics.convertDegree(50, DegreeUnit.FAHRENHEIT, DegreeUnit.KELVIN);

            assert.strictEqual(result, 282.86);
        });

        it('Should convert 100°K into Celsius', () => {
            const result = physics.convertDegree(100, DegreeUnit.KELVIN, DegreeUnit.CELSIUS);

            assert.strictEqual(result, -173.15);
        });
        it('Should convert 100°K into Fahrenheit', () => {
            const result = physics.convertDegree(100, DegreeUnit.KELVIN, DegreeUnit.FAHRENHEIT);

            assert.strictEqual(result, -279.67);
        });
    });

    describe('Intensity formula', () => {
        describe('computeIntensityFromPowerAndVoltage', () => {
            it('Should return 2A', () => {
                const result = physics.computeIntensityFromPowerAndVoltage(50, 25);
    
                assert.strictEqual(result, 2);
            });
        });
    
        describe('computeIntensityFromVoltageAndResistance', () => {
            it('Should return 25A', () => {
                const result = physics.computeIntensityFromVoltageAndResistance(50, 2);
    
                assert.strictEqual(result, 25);
            });
        });
    
        describe('computeIntensityFromPowerAndResistance', () => {
            it('Should return 3A', () => {
                const result = physics.computeIntensityFromPowerAndResistance(81, 9);
                
                assert.strictEqual(result, 3);
            });
        });
    });

    describe('Power formula', () => {
        describe('computePowerFromVoltageAndIntensity', () => {
            it('Should return 250W', () => {
                const result = physics.computePowerFromVoltageAndIntensity(25, 10);

                assert.strictEqual(result, 250);
            });
        });

        describe('computePowerFromResistanceAndIntensity', () => {
            it('Should return 1000W', () => {
                const result = physics.computePowerFromResistanceAndIntensity(10, 10);

                assert.strictEqual(result, 1000);
            });
        });

        describe('computePowerFromVoltageAndResistance', () => {
            it('Should return 1W', () => {
                const result = physics.computePowerFromVoltageAndResistance(2, 4);

                assert.strictEqual(result, 1);
            });
        });
    });

    describe('Resistance formula', () => {
        describe('computeResistanceFromVoltageAndIntensity', () => {
            it('Should return 9 ohm', () => {
                const result = physics.computeResistanceFromVoltageAndIntensity(81, 9);

                assert.strictEqual(result, 9);
            });
        });

        describe('computeResistanceFromVoltageAndPower', () => {
            it('Should return 24 ohm', () => {
                const result = physics.computeResistanceFromVoltageAndPower(5, 2);

                assert.strictEqual(result, 12.5);
            });
        });

        describe('computeResistanceFromPowerAndIntensity', () => {
            it('Should return 0.4 ohm', () => {
                const result = physics.computeResistanceFromPowerAndIntensity(10, 5);

                assert.strictEqual(result, 0.4);
            });
        });
    });

})