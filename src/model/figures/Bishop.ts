import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "../Figure";

import black_bishop from '../icons/black_bishop.png';
import white_bishop from '../icons/white_bishop.png';

export class Bishop extends Figure {
    
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.name = FigureNames.BISHOP
        this.figureImg = this.color === Colors.WHITE ? white_bishop : black_bishop
    }

    canMove(cell: Cell): boolean {
        //Общее правило для всех фигур
        if (!super.canMove(cell)) {
            return false
        }

        if (Math.abs(cell.x - this.cell.x) === Math.abs(cell.y - this.cell.y)) {
            
            return true
        }

        return false
    }
    
}