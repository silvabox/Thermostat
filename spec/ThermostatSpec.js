describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat(20);
  });

  it("has a default temperature", function() {
    expect(thermostat.getTemperature()).toEqual(20);
  });

  it("can call the private method", function() {
  	expect(thermostat.callPrivateMethod()).toEqual("you can't call _somePrivateMethod directly");
  });

  describe("_somePrivateMethod", function() {
  	it("cannot be reached by the instance", function() {
		expect(thermostat._somePrivateMethod).toBeUndefined();
  	});
  	it("cannot be reached by the prototype", function() {
		expect(Thermostat.prototype._somePrivateMethod).toBeUndefined();
  	});
  });

  describe("anotherCallToPrivateMethod", function() {
  	it("cannot be reached by the instance", function() {
		expect(function() { thermostat.anotherCallToPrivateMethod(); }).toThrowError();
  	});
  });
});
