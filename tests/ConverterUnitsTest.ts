import { assert } from 'chai';
import 'mocha';
import { DegreeUnit, DistanceUnit, LiterUnit, WeightUnit } from '../src/ConverterUnits';

describe('ConvertersUnits', () => {
    describe('DistanceUnit', () => {
        it('Should return a strict DistanceUnit.MILLIMETER', () => {
            const symbol = DistanceUnit.MILLIMETER.symbol;

            assert.strictEqual(DistanceUnit.value(symbol), DistanceUnit.MILLIMETER);
        });

        it('Should return 1000', () => {
            const symbol = DistanceUnit.METER.symbol;

            assert.strictEqual(DistanceUnit.value(symbol).value, 1000);
        });
    });

    describe('LiterUnit', () => {
        it('Should return a strict LiterUnit.MILLILITER', () => {
            const symbol = LiterUnit.MILLILITER.symbol;

            assert.strictEqual(LiterUnit.value(symbol), LiterUnit.MILLILITER);
        });

        it('Should return 1000', () => {
            const symbol = LiterUnit.LITER.symbol;

            assert.strictEqual(LiterUnit.value(symbol).value, 1000);
        });
    });

    describe('WeightUnit', () => {
        it('Should return a strict WeightUnit.MILLIGRAM', () => {
            const symbol = WeightUnit.MILLIGRAM.symbol;

            assert.strictEqual(WeightUnit.value(symbol), WeightUnit.MILLIGRAM);
        });

        it('Should return 1000', () => {
            const symbol = WeightUnit.GRAM.symbol;

            assert.strictEqual(WeightUnit.value(symbol).value, 1000);
        });
    });

    describe('DegreeUnit', () => {
        it('Should return a strict DegreeUnit.KELVIN symbol "K"', () => {
            const symbol = DegreeUnit.KELVIN.symbol;

            assert.strictEqual(symbol, DegreeUnit.KELVIN.symbol);
        });
    });
});
