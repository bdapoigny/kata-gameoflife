import { Cell } from "./cell";

export class Container {
    public cells: Cell[];

    constructor(cellsnumber: number = 0) {
        this.cells = new Array<Cell>(cellsnumber);
        for (let i = 0; i < this.cells.length; i++) {
            this.cells[i] = new Cell();
        }
    }

    public moveToNextGeneration(): Cell[] {
        return this.cells;
    }
}
