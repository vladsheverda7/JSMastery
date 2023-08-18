class TrafficLight {
    constructor() {
        this.lightIndex = 0
    }

    static get colors() {
        return ['green', 'yellow', 'red']
    }

    get light() {
        return TrafficLight.colors[this.lightIndex]
    }

    get colorsAmount() {
        return ++TrafficLight.colors.length
    }

    setLight(index) {
        this.lightIndex = index;
    }

    next() {
        this.lightIndex++
        if (this.lightIndex > TrafficLight.colors.length) {
            this.lightIndex = 0
        }
    }

    isGreenActive() {
        return this.light === 'green'
    }

    isYellowActive() {
        return this.light === 'yellow'
    }

    isRedActive() {
        return this.light === 'red'
    }
}

module.exports = TrafficLight