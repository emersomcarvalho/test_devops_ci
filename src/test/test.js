const calculation = require('../calculation');


describe('Testando a Soma', () => {

    test('should return 10', (done) => {
        expect(calculation
            .sum(5, 5)).toBe(10);
        done();
    });
});

describe('Testando a Subtração', () => {

    test('should return 10', (done) => {
        expect(calculation
            .subtract(5, 5)).toBe(0);
        done();
    });
});

describe('Testando a Multiplicação', () => {

    test('should return 10', (done) => {
        expect(calculation
            .multiply(5, 5)).toBe(25);
        done();
    });
});

describe('Testando a Divisão', () => {

    test('should return 10', (done) => {
        expect(calculation
            .divide(10, 5)).toBe(2);
        done();
    });

});