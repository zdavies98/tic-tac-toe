import { useEffect, useState } from "react"
import Cell from "./components/Cell"
import RefreshButton from "./components/Refresh"
const App = () => {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""])
  const [turn, setTurn] = useState("circle")
  const [winningMessage, setWinningMessage] = useState(null)

  const message = "It is now " + turn + "'s turn."

  const checkScore = () => {
    const winningCombos = [
      //horizontal
      [0,1,2], [3,4,5], [6,7,8], 
      //vertical
      [0,3,6], [1,4,7], [2,5,8],
      //diagonal
      [0,4,8], [2,4,6]
    ]

    winningCombos.forEach(array => {
      let circleWins = array.every(cell => cells[cell] === "circle")
      if (circleWins) {
        setWinningMessage("O Wins!")
        return
      }
    })

    winningCombos.forEach(array => {
      let circleWins = array.every(cell => cells[cell] === "cross")
      if (circleWins) {
        setWinningMessage("X Wins!")
        return
      }
    })
  }

  useEffect(() => {
    checkScore()
  })

  return (
    <div className="app">
      <h1>Tic-Tac-Toe</h1>
      <div className="gameboard">
        {cells.map((cell, index) => 
            <Cell
                key={index}
                id={index}
                cell={cell}
                turn={turn}
                setTurn={setTurn}
                cells={cells}
                setCells={setCells}
                winningMessage={winningMessage}
            />
        )}
      </div>
      <p>{winningMessage || message}</p>
      <RefreshButton />
    </div>
  );
}

export default App;
