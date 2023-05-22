import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "../Figure";

import black_pawn from '../icons/black_pawn.png';
import white_pawn from '../icons/white_pawn.png';

export class Pawn extends Figure {
    firstMove: boolean;

    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.name = FigureNames.PAWN
        this.figureImg = this.color === Colors.WHITE ? white_pawn : black_pawn
        this.firstMove = true
    }

    canMove(cell: Cell): boolean {
        //Общее правило для всех фигур
        if (!super.canMove(cell)) {
            return false
        }
        //Логика ходов для белых
        if (this.color === Colors.WHITE) {
            if ((this.cell.y === cell.y + 1) && cell.figure) {
                if (cell.x + 1 === this.cell.x || cell.x - 1 === this.cell.x) return true
            }
            if (this.firstMove) {
                if ((this.cell.y <= cell.y + 2) && (cell.x === this.cell.x) && !cell.figure) return true
            } else {
                if ((this.cell.y === cell.y + 1) && (cell.x === this.cell.x) && !cell.figure) return true
            }
        } 
        //Логика ходов для черных
        if (this.color === Colors.BLACK) {
            if ((this.cell.y + 1 === cell.y) && cell.figure) {
                if (cell.x + 1 === this.cell.x || cell.x - 1 === this.cell.x) return true
            }
            if (this.firstMove) {
                if ((this.cell.y >= cell.y - 2) && (cell.x === this.cell.x) && !cell.figure) return true
            } else {
                if ((this.cell.y + 1 === cell.y) && (cell.x === this.cell.x) && !cell.figure) return true
            }
        }

        return false
    }

    moveFigure(cell: Cell): void {
        super.moveFigure(cell)
        this.firstMove = false
    }
}