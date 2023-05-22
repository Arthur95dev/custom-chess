import { Colors } from "./Colors";
import randomFigureForType from '../icons/black_pawn.png';
import { Cell } from "./Cell";

export enum FigureNames {
    KING = 'Король',
    KNIGHT = 'Конь',
    BISHOP = 'Слон',
    QUEEN = 'Королева',
    PAWN = 'Пешка',
    ROOK = 'Ладья',
    FIGURE = 'Фигура'
}
export class Figure {
    color: Colors;
    name: FigureNames;
    figureImg: typeof randomFigureForType | null;
    cell: Cell;

    constructor(color: Colors, cell: Cell) {
        this.color = color
        this.name = FigureNames.FIGURE
        this.figureImg = null
        this.cell = cell
        this.cell.figure = this
    }

    canMove(cell: Cell): boolean {
        if ((cell.figure?.color === this.color) || (cell.figure?.name === FigureNames.KING)) {
            return false
        }
        return true
    }
    moveFigure(cell: Cell): void {
        this.cell = cell
    }
}