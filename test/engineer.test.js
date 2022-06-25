const Engineer = require("../lib/engineer.js");

describe("Engineer Object Tests", () => {
    describe("Initialization", () => {
      it("should return an object containing properties with the constructor values", () => {
        const obj = new Engineer("test", 111, "testemail@domain.com", "githubid");
  
        expect(obj.name).toEqual("test");
        expect(obj.id).toEqual(111);
        expect(obj.email).toEqual("testemail@domain.com");
        expect(obj.role).toEqual("engineer");
        expect(obj.github).toEqual("githubid");
      });
    });
  
    describe("getRole", () => {
      it("should return return the role property value of engineer when the getRole method is called", () => {
        const obj = new Engineer("test", 111, "testemail@domain.com", "githubid");
  
        const result = obj.getRole();
  
        expect(result).toEqual("engineer");
      });
    });
  
    describe("getGithub", () => {
      it("should return return the gethub id property value when the getGithub method is called", () => {
        const obj = new Engineer("test", 111, "testemail@domain.com", "githubid");
  
        const result = obj.getGitHub();
  
        expect(result).toEqual("githubid");
      });
    });
  }); 