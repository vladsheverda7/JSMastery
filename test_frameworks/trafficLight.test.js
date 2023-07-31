const expect = require("chai").expect;
const TrafficLight = require("./trafficLight.js");

describe("Scoped / Nested block", () => {
  let trafficLight;
  beforeEach(() => {
    trafficLight = new TrafficLight();
  });

  test("should initialize with the first light as green", () => {
    expect(trafficLight.light).to.equal("green");
  });

  test("should return the correct number of colors", () => {
    expect(trafficLight.colorsAmount).to.equal(3); // bug number 1. look at readme.md
  });

  test("should correctly set the light", () => {
    trafficLight.setLight(2);
    expect(trafficLight.light).to.equal("red");

    trafficLight.setLight(1);
    expect(trafficLight.light).to.equal("yellow");

    trafficLight.setLight(0);
    expect(trafficLight.light).to.equal("green");
  });

  test("should correctly move to the next light", () => {
    trafficLight.next();
    expect(trafficLight.light).to.equal("yellow");

    trafficLight.next();
    expect(trafficLight.light).to.equal("red");

    trafficLight.next();
    expect(trafficLight.light).to.equal("green"); // bug number 2. look at readme.md
  });

  test("should correctly check if each light is active", () => {
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
});
