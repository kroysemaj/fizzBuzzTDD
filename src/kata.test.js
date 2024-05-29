const greet = require("./kata");

describe("greet name", () => {
    it("should return 'Hello, Bob.' when passed 'Bob'", () => {
        expect(greet(["Bob"])).toBe("Hello, Bob.");
    });
    it("should return 'Hello, my friend.' when called without passing a name", () => {
        expect(greet()).toBe("Hello, my friend.");
    });
    it("should return 'HELLO, JERRY!' when passed uppercase 'JERRY'", () => {
        expect(greet(["JERRY"])).toBe("HELLO, JERRY!");
    });
    it("should return 'Hello, Jill and Jane' when passed an array ['Jill', 'Jane']", () => {
        expect(greet(["Jill", "Jane"])).toBe("Hello, Jill and Jane.");
    });
    it("should return 'Hello, Amy, Brian, and Charlotte.' when passed an array of ['Amy', 'Brian', 'Charlotte']", () => {
        expect(greet(["Amy", "Brian", "Charlotte"])).toBe(
            "Hello, Amy, Brian, and Charlotte."
        );
    });
    it("should return 'Hello, Amy and Charlotte. AND HELLO BRIAN!' when passed an array of ['Amy', 'BRIAN', 'Charlotte']", () => {
        expect(greet(["Amy", "BRIAN", "Charlotte"])).toBe(
            "Hello, Amy and Charlotte. AND HELLO BRIAN!"
        );
    });
    it("should return 'Hello, Bob, Charlie, Dianne.' when passed an array of ['Bob', 'Charlie, Dianne']", () => {
        expect(greet(["Bob", "Charlie, Dianne"])).toBe(
            "Hello, Bob, Charlie, and Dianne."
        );
    });
    it("should return 'Hello, Bob and Charlie, Dianne.' when passed an array of ['Bob', '\"Charlie, Dianne\"']", () => {
        expect(greet(["Bob", '"Charlie, Dianne"'])).toBe(
            "Hello, Bob and Charlie, Dianne."
        );
    });
});
