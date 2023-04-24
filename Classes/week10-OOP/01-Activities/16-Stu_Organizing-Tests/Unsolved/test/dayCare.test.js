const DayCare = require("../dayCare");
const Child = require("../child");

describe("DayCare", () => {
  describe("Initialization", () => {
    it("should create an object with 'children' array, 'capacity' number, and 'ageLimit' number", () => {
      const dayCare = new DayCare();

      // TODO: Add a comment describing the purpose of the following statement
	  // Answer: Check to see if dayCare is equal to the array has the proper properities. 
      expect(dayCare).toEqual({ children: [], capacity: 3, ageLimit: 6 });
    });
  });

  describe("addChild", () => {
    it("should add a child to the 'children' array", () => {
      // TODO: Add a comment describing the purpose of the following declarations
	  // Answer: Create new objects to play with.
      const child = new Child("Tammy", 1);
      const dayCare = new DayCare();

      // TODO: Add a comment describing the purpose of the following method
	  // Answer: Add a new child to the daycare object
      dayCare.addChild(child);

      // TODO: Add a comment describing the purpose of the following statements
	  // Answer: Verify that the child was added to the array.
      expect(dayCare.children.length).toEqual(1);
      expect(dayCare.children[0]).toBe(child);
    });

    it("should not add a child over the 'ageLimit'", () => {
      const child = new Child("Tammy", 8);
      const dayCare = new DayCare();

      dayCare.addChild(child);

      // TODO: Add a comment describing the purpose of the following statement
	  // Answer: Verify that the child was not added to the array.
      expect(dayCare.children.length).toEqual(0);
    });

    it("should not add a child if already at capacity", () => {
      const dayCare = new DayCare();
      const child = new Child("Alice", 4);

      // TODO: Add a comment describing the purpose of the following expression
	  // Answer: Add 3 additional children to the daycare array.
      dayCare.children = [
        new Child("Tammy", 1),
        new Child("Mark", 2),
        new Child("Alvin", 1)
      ];

      dayCare.addChild(child);

      // TODO: Add a comment describing the purpose of the following statement
	  // Answer: Check to make sure there are 3 children in the array and not 4 since we used the 'addChild' function and there is a 3 child limit built in.
      expect(dayCare.children.length).toEqual(3);
    });

    it("should throw an error if not provided a Child object as an argument", () => {
      // TODO: Add a comment describing the purpose of the following declaration
	  // Answer: Define an error to check if the error is the same as below.
      const err = new Error(
        "Expected parameter 'child' to be an instance of Child"
      );

      // TODO: Add a comment describing the purpose of the following expression
	  // Answer: Arrange the error to trigger.
      const cb = () => {
        const dayCare = new DayCare();
        dayCare.addChild();
      };

      // TODO: Add a comment describing the purpose of the following statement
	  // Answer: Verify that the error is correct.
      expect(cb).toThrowError(err);
    });
  });

  describe("pickupChild", () => {
    it("should remove the first child found with a given name from 'children' and return it", () => {
      const dayCare = new DayCare();
      const child1 = new Child("Tammy", 1);
      const child2 = new Child("Mark", 2);
      const child3 = new Child("Alvin", 1);
      dayCare.children = [child1, child2, child3];

      // TODO: Add a comment describing the purpose of the following declaration
	  // Answer: Remove a child from the array on daycare.
      const removed = dayCare.pickupChild(child2.name);

      expect(removed).toBe(child2);
      expect(dayCare.children.length).toEqual(2);

      // TODO: Add a comment describing the purpose of the following statement
	  // Answer: verify that child2 is not in the array.
      expect(
        dayCare.children.some(child => child.name === child2.name)
      ).toEqual(false);
    });

    it("should return undefined and remove no children if child is not in 'children'", () => {
      const dayCare = new DayCare();
      const child1 = new Child("Tammy", 1);
      const child2 = new Child("Mark", 2);
      const child3 = new Child("Alvin", 1);
      dayCare.children = [child1, child2, child3];

      // TODO: Add a comment describing the purpose of the following declaration
	  // Answer: Attempt to pick up a child that doesn't exist.
      const removed = dayCare.pickupChild("Fred");

      // TODO: Add a comment describing the purpose of the following statement
	  // Answer: Verify that the returned object is undefined.
      expect(typeof removed).toEqual("undefined");

      // TODO: Add a comment describing the purpose of the following statement
	  // Answer: Verify that no object is removed from the array.
      expect(dayCare.children).toEqual([child1, child2, child3]);
    });
  });
});
