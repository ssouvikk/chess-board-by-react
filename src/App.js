import React from 'react'
import './App.css';
import ChessBox from './components/ChessBox/ChessBox'

const getBoxes = () => {
  let data = []
  for (let i = 0; i < 64; i++) {
    data.push(i)
  }
  return data.map((item, index) => <ChessBox key={index} index={index} />)
}

function App() {
  return (
    <div className="container">
      {getBoxes()}
    </div>
  )
}

export default App;
