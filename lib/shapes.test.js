const { Circle, Triangle, Square } = require("./shapes");

describe("Circle Test", () => {
    test("Testing for a green circle", () => {
        const shape = new Circle();
        shape.setColor("green");
        expect(shape.render()).toEqual(
            '<circle cx="150" cy="115" r="80" fill="green" />'
        );
    });
});

describe("Triangle Test", () => {
    test("Testing for a #DE68F4 triangle", () => {
        const shape = new Triangle();
        shape.setColor("#DE68F4");
        expect(shape.render()).toEqual(
            '<polygon points="150, 18 244, 182 56, 182" fill="#DE68F4" />'
        );
    });
});

describe("Square Test", () => {
    test("Testing for a yellow square", () => {
        const shape = new Square();
        shape.setColor("yellow");
        expect(shape.render()).toEqual(
            '<rect x="73" y="40" width="160" height="160" fill="yellow" />'
        );
    });
});