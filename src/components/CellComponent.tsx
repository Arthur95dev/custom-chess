import { Cell } from "../model/Cell";


interface CellComponentProps {
    cell: Cell,
    selected: boolean,
    click: (cell: Cell) => void

}
export const CellComponent = ({cell, selected, click}: CellComponentProps) => {

    return (
        <div className={['cell', cell.color, selected ? 'selected' : ''].join(' ')} onClick={() => click(cell)}>
            {cell.id}
            {(cell.available && !cell.figure) && <div className="available"></div>}
            {(cell.available && cell.figure) && <div className="can_take"></div>}
        </div>
    )
}

/*
{cell.figure?.figureImg && <img src={cell.figure?.figureImg} alt={cell.figure?.name}></img>}*/