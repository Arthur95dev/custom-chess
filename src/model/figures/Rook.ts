import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "../Figure";

import black_rook from '../icons/black_rook.png';
import white_rook from '../icons/white_rook.png';

export class Rook extends Figure {
    
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.name = FigureNames.ROOK
        this.figureImg = this.color === Colors.WHITE ? white_rook : black_rook
    }

}