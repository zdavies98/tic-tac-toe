const Cell = ({ id, cell, turn, setTurn, cells, setCells, winningMessage }) => {

    const handleClick = (e) => {
        if(!winningMessage) {
            const taken = e.target.firstChild?.classList.contains("circle") ||
                e.target.firstChild?.classList.contains("cross") ||
                e.target.classList.contains("circle") || 
                e.target.classList.contains("cross")

            if (!taken) {
                if (turn === "circle") {
                    e.target.firstChild.classList.add("circle")
                    handleCellChange("circle")
                    setTurn("cross")
                }
                if (turn === "cross") {
                    e.target.firstChild.classList.add("cross")
                    handleCellChange("cross")
                    setTurn("circle")
                }
            }
    }
}

    const handleCellChange = (className) => {
        const nextCells = cells.map((cell, index) => {
            if(index === id) {
                return className
            } else {
                return cell
            }
        })
        setCells(nextCells)
    }

    return (
        <div className="square" id={id} onClick={handleClick}>
            <div className={cell}></div>
        </div>
    )
}
export default Cell