import React, { FC, useEffect, useState } from "react";
import { Board } from "../model/Board";
import { Cell } from "../model/Cell";
import { CellComponent } from "./CellComponent";

interface BoardComponentProps {
    board: Board;
    setBoard: (board: Board) => void;
}

export const BoardComponent: FC<BoardComponentProps> = ({board, setBoard}) => {
    
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

    function cellClickHundler(cell: Cell) {
        if (selectedCell === cell || (!cell.figure && !cell.available)) {
            setSelectedCell(null);
            board.availableCellsForMove(null);
            return
        }
        if (selectedCell && cell.available) {
            selectedCell.moveFigure(cell);
            setSelectedCell(null);
            board.availableCellsForMove(null);
            setBoard(board.updatedBoard());
            return
        }

        if (cell.figure) {
            setSelectedCell(cell);
            board.availableCellsForMove(cell);
            setBoard(board.updatedBoard());
        }
    }

    return (
        <div className="board">
            {board.cells.map((row, index) => {
                return (
                    <React.Fragment key={index}>
                        {row.map(cell => {
                            return <CellComponent 
                                    cell={cell}
                                    selected={(selectedCell?.x === cell.x) && (selectedCell?.y === cell.y)}
                                    click={cellClickHundler}
                                    key={cell.id}
                                    />
                        })}
                    </React.Fragment>
                )
            })}
        </div>
    )
}
