import Physics from '../src/Physics';
import { DistanceUnit, LiterUnit, WeightUnit } from '../src/ConverterUnits';
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

})