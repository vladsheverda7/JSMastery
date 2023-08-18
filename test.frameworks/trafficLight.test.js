const expect = require('chai').expect;
const TrafficLight = require('./trafficLight.js');

describe('Check Traffic Light class', () => {
    let trafficLight;
    beforeEach(() => {
        trafficLight = new TrafficLight();
    });

    test('should initialize with the first light as green', () => {
        expect(trafficLight.light).to.equal('green');
    });

    test('should return the correct number of colors', () => {
        expect(trafficLight.colorsAmount).to.equal(3); // bug number 1. look at readme.md
    });

    test('should correctly move to the next light', () => {
        trafficLight.next();
        expect(trafficLight.light).to.equal('yellow');

        trafficLight.next();
        expect(trafficLight.light).to.equal('red');

        trafficLight.next();
        expect(trafficLight.light).to.equal('green'); // bug number 2. look at readme.md
    });

    test('should correctly check if each light is active', () => {
        expect(trafficLight.isGreenActive()).to.be.true;
        expect(trafficLight.isYellowActive()).to.be.false;
        expect(trafficLight.isRedActive()).to.be.false;

        trafficLight.next();
        expect(trafficLight.isGreenActive()).to.be.false;
        expect(trafficLight.isYellowActive()).to.be.true;
        expect(trafficLight.isRedActive()).to.be.false;

        trafficLight.next();
        expect(trafficLight.isGreenActive()).to.be.false;
        expect(trafficLight.isYellowActive()).to.be.false;
        expect(trafficLight.isRedActive()).to.be.true;
    });

    describe.each([
        {
            index: 2,
            expectedcolor: 'red',
        },
        { index: 1, expectedcolor: 'yellow' },
        { index: 0, expectedcolor: 'green' },
        ,
    ])('should correctly set the light', ({ index, expectedcolor }) => {
        test(`${expectedcolor} color index is ${index}`, () => {
            trafficLight.setLight(index);
            expect(trafficLight.light).to.equal(expectedcolor);
        });
    });
});
