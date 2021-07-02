import './chessBoard.css'

const ChessBoard = () =>{
    let boxes = []
    for(let i = 0; i<8;i++){
        boxes.push(<div className='square'/>)
    }

    return(
        <div className='app'>
            <div className="chessBoard">
                <div className="row">{boxes}</div>
                <div className="row">{boxes}</div>
                <div className="row">{boxes}</div>
                <div className="row">{boxes}</div>
                <div className="row">{boxes}</div>
                <div className="row">{boxes}</div>
                <div className="row">{boxes}</div>
                <div className="row">{boxes}</div>
            </div>
        </div>
    )
}

export default ChessBoard