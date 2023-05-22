import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "../Figure";

import black_knight from '../icons/black_knight.png';
import white_knight from '../icons/white_knight.png';

export class Knight extends Figure {
    
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.name = FigureNames.KNIGHT
        this.figureImg = this.color === Colors.WHITE ? white_knight : black_knight
    }

}