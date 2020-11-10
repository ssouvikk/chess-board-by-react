import React from 'react'
let startsWithBlack = true
let black = true
const ChessBox = (props) => {
    if ((parseInt(props.index / 8)) % 2 === 0) {
        // even row 
        startsWithBlack = true
        if ((props.index % 8) % 2 === 0) {
            //even col
            black = startsWithBlack
        } else {
            //odd col
            black = !startsWithBlack
        }
    } else {
        //odd row
        startsWithBlack = false
        if ((props.index % 8) % 2 === 0) {
            //even col
            black = startsWithBlack
        } else {
            //odd col
            black = !startsWithBlack
        }
    }

    const customStyle = {
        height: '150px',
        width: '12%',
        backgroundColor: black ? 'white' : 'black'
    }
    return (
        <div style={customStyle}></div>
    )
}

export default ChessBox