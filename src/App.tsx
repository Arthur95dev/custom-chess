import React, { useEffect, useState } from 'react';
import './App.css';
import { BoardComponent } from './components/BoardComponent';
import { Board } from './model/Board';

function App() {
    const [board, setBoard] = useState(new Board());
    
    useEffect (() => {
        restart()
    }, [])

    const restart = (): void => {
        let newBoard = new Board();
        newBoard.initCells();
        newBoard.setFigures();
        setBoard(newBoard);
    }

    return <BoardComponent board={board} setBoard={setBoard}/>
}

export default App;
