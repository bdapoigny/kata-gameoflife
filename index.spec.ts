import { Container } from ".";
import { Cell } from "./Cell";

describe("Kata Game Of Life", () => {
    // Generator
    it("Initial grid should be empty", () => {
        const container = new Container();
        expect(container.cells.length).toEqual(0);
    });

    it("Grid should contain 1 living cell with a number position", () => {
        const container = new Container(1);
        expect(container.cells.length).toEqual(1);
        expect(container.cells[0].x).not.toBeUndefined();
        expect(container.cells[0].y).not.toBeUndefined();
    });

    it("Grid should contain 3 living cell", () => {
        const container = new Container(3);
        expect(container.cells.length).toEqual(3);
    });

    // Game of life
    it("Should move to next generation with one cell", () => {
        const container = new Container();
        container.cells = [new Cell() {x: 1, y: 1}];
        expect(container.moveToNextGeneration()).toEqual([]);
    })

});
