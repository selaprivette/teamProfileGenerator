const Manager = require("../lib/manager.js");

describe("Manager Object Tests", () => {
    describe("Initialization", () => {
      it("should return an object containing properties with the constructor values", () => {
        const obj = new Manager("test", 111, "testemail@domain.com", 1234);
  
        expect(obj.name).toEqual("test");
        expect(obj.id).toEqual(111);
        expect(obj.email).toEqual("testemail@domain.com");
        expect(obj.role).toEqual("manager");
        expect(obj.officeNumber).toEqual(1234);
      });
    });
  
    describe("getRole", () => {
      it("should return return the role property value of manager when the getRole method is called", () => {
        const obj = new Manager("test", 111, "testemail@domain.com");
  
        const result = obj.getRole();
  
        expect(result).toEqual("manager");
      });
    });
  });