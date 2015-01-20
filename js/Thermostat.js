// by defining Thermostat in a closure, we can effectively create private methods.
// these are defined in the closing function and remain in scope and available to
// Thermostat, however they are unreachable by any other code.

var Thermostat = function() {
	var _somePrivateMethod = function() {
		return "you can't call _somePrivateMethod directly"
	};

	var theClass = function(defaultTemp) {
		var temp = defaultTemp;

		this.getTemperature= function() {
			return temp;
		};
	};

	theClass.prototype.callPrivateMethod = function() {
		return _somePrivateMethod();
	};

// theClass is the actual constructor function and we return this as the value of the closure
	return theClass;
}();
// Note we call the anonymous closure function to return theClass defined above.

// Note that this is now not possible:
Thermostat.prototype.anotherCallToPrivateMethod = function() {
	_somePrivateMethod();
};