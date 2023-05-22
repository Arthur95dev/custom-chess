import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "../Figure";

import black_queen from '../icons/black_queen.png';
import white_queen from '../icons/white_queen.png';

export class Queen extends Figure {
    
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.name = FigureNames.QUEEN
        this.figureImg = this.color === Colors.WHITE ? white_queen : black_queen
    }

}