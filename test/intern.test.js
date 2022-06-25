const Intern = require("../lib/intern.js");

describe("Intern Object Tests", () => {
    describe("Initialization", () => {
      it("should return an object containing properties with the constructor values", () => {
        const obj = new Intern("test", 111, "testemail@domain.com", "uncc");
  
        expect(obj.name).toEqual("test");
        expect(obj.id).toEqual(111);
        expect(obj.email).toEqual("testemail@domain.com");
        expect(obj.role).toEqual("intern");
        expect(obj.school).toEqual("uncc");
      });
    });
  
    describe("getRole", () => {
      it("should return return the role property value of intern when the getRole method is called", () => {
        const obj = new Intern("test", 111, "testemail@domain.com", "uncc");
  
        const result = obj.getRole();
  
        expect(result).toEqual("intern");
      });
    });
  
    describe("getSchool", () => {
      it("should return return the school property value when the getSchool method is called", () => {
        const obj = new Intern("test", 111, "testemail@domain.com", "uncc");
  
        const result = obj.getSchool();
  
        expect(result).toEqual("uncc");
      });
    });
  });