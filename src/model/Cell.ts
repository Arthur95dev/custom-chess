import { Figure } from "./Figure"
import { Colors } from "./Colors"
import { Board } from "./Board";

export class Cell {
    readonly x: number;
    readonly y: number;
    readonly color: Colors;
    figure: Figure | null;
    id: number;
    available: boolean;
    board: Board;

    constructor (board: Board, x: number ,y: number, color: Colors, figure: Figure | null, id: number) {
        this.board = board;
        this.x = x;
        this.y = y;
        this.color = color;
        this.figure = figure;
        //this.id = Math.random();
        this.id = id;
        this.available = false;
    }
    moveFigure(cell: Cell){
        this.figure?.moveFigure(cell)
        cell.figure = this.figure
        this.figure = null
    }

    isEmpty(): boolean {
        return this.figure === null
    }
}