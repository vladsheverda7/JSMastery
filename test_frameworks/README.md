I found 2 bugs:

1. 
Short description: colorsAmount method does not work correctly
Expected result: it should return return TrafficLight.colors.length instead of return ++TrafficLight.colors.length
Actual result: this method returns 4 instead of 3


2. 
Short description: 'IF' does not have correct condition in the next() method
Expected result: this.lightIndex >= TrafficLight.colors.length should be insted of this.lightIndex > TrafficLight.colors.length
Actual result: this.lightIndex = 3, 3 > 3 - it is false