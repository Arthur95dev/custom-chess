import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "../Figure";

import black_king from '../icons/black_king.png';
import white_king from '../icons/white_king.png';

export class King extends Figure {
    
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.name = FigureNames.KING
        this.figureImg = this.color === Colors.WHITE ? white_king : black_king
    }
    
}