import { Cell } from "./Cell"
import { Colors } from "./Colors"
import { Pawn } from "./figures/Pawn";
import { Rook } from "./figures/Rook";
import { Knight } from "./figures/Knight";
import { Bishop } from "./figures/Bishop";
import { Queen } from "./figures/Queen";
import { King } from "./figures/King";

export class Board {
    
    cells: Cell[][] = []
    
    initCells() {
        for (let j: number = 0; j < 8; j++) {
            let row: Cell[] = [];

            for (let i: number = 0; i < 8; i++) {
                let cellID = j * 8 + i
                if ((i + j) % 2 === 0) {
                    row.push(new Cell(this, i, j, Colors.WHITE, null, cellID)) // Белые ячейки
                } else {
                    row.push(new Cell(this, i, j, Colors.BLACK, null, cellID)) // Чёрные ячейки
                }
            }
            this.cells.push(row)
        }
    }
    getCell(x: number, y: number): Cell | null {
        return this.cells[y][x] || null
    }
    setFigures() {
        this.cells.forEach((row, index) => {
            if (index === 1) {
                row.forEach(cell => new Pawn(Colors.BLACK, cell))
            }
            if (index === 6) {
                row.forEach(cell => new Pawn(Colors.WHITE, cell))
            }
            if (index === 0) {
                row.forEach((cell, index) => {
                    if ((index === 0) || (index === 7)) {
                        new Rook(Colors.BLACK, cell)
                    }
                    if ((index === 1) || (index === 6)) {
                        new Knight(Colors.BLACK, cell)
                    }
                    if ((index === 2) || (index === 5)) {
                        new Bishop(Colors.BLACK, cell)
                    }
                    if (index === 3) {
                        new Queen(Colors.BLACK, cell)
                    }
                    if (index === 4) {
                        new King(Colors.BLACK, cell)
                    }
                })
            }
            if (index === 7) {
                row.forEach((cell, index) => {
                    if ((index === 0) || (index === 7)) {
                        new Rook(Colors.WHITE, cell)
                    }
                    if ((index === 1) || (index === 6)) {
                        new Knight(Colors.WHITE, cell)
                    }
                    if ((index === 2) || (index === 5)) {
                        new Bishop(Colors.WHITE, cell)
                    }
                    if (index === 3) {
                        new Queen(Colors.WHITE, cell)
                    }
                    if (index === 4) {
                        new King(Colors.WHITE, cell)
                    }
                })
            }
        })
    }
    availableCellsForMove(cell: Cell | null) {
        this.cells.forEach(row => {
            row.forEach(cage => cell?.figure?.canMove(cage) ? cage.available = !cage.available : cage.available = false)
        })
    }
    updatedBoard() {
        let newBoard = new Board();
        newBoard.cells = this.cells;
        return newBoard
    }
}
