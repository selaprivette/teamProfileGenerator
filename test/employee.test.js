const Employee = require("../lib/employee.js");

describe("Employee Object Tests", () => {
    describe("Initialization", () => {
      it("should return an object containing properties with the constructor values", () => {
        const obj = new Employee("test", 111, "testemail@domain.com");
  
        expect(obj.name).toEqual("test");
        expect(obj.id).toEqual(111);
        expect(obj.email).toEqual("testemail@domain.com");
        expect(obj.role).toEqual("employee");
      });
    });
  
    describe("getName", () => {
      it("should return return the name property value when the getName method is called", () => {
        const obj = new Employee("test", 111, "testemail@domain.com");
  
        const result = obj.getName();
  
        expect(result).toEqual("test");
      });
    });
  
    describe("getID", () => {
      it("should return return the ID property value when the getID method is called", () => {
        const obj = new Employee("test",111, "testemail@domain.com");
  
        const result = obj.getID();
  
        expect(result).toEqual(111);
      });
    });
  
    describe("getEmail", () => {
      it("should return return the email property value when the getEmail method is called", () => {
        const obj = new Employee("test",111, "testemail@domain.com");
  
        const result = obj.getEmail();
  
        expect(result).toEqual("testemail@domain.com");
      });
    });
  
    describe("getRole", () => {
      it("should return return the role property value of employee when the getRole method is called", () => {
        const obj = new Employee("test", 111, "testemail@domain.com");
  
        const result = obj.getRole();
  
        expect(result).toEqual("employee");
      });
    });
  });