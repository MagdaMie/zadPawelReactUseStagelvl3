import { useState } from 'react'
import DivElement from './DivElement'
import './App.css'


function App() {

      // zmiana tla lvl2
      const buttons = [1, 2]
      const state1 = 0
      
      const[changeBg, setChangeBg] = useState(state1)
 
      const handleSetChangeBg = (state) => {
       setChangeBg(prevState =>
         { if(prevState === state)
         { return state1}
 
         return state
         }
       )
      }

      // zmiana tla lvl3
      const squares = [1, 2, 3, 4, 5]

      const [selectedSquares, setSelectedSquares] =useState([])

      const handleToggleBg = (id) => {
        setSelectedSquares(prevSelectedSquares => {
          if(prevSelectedSquares.includes(id)) {
            return prevSelectedSquares.filter(selectedSquare => selectedSquare !== id)
          } else {
            return [...prevSelectedSquares, id]
          }
        })
      }

  return (
    <>
      {/* zmiana tla lvl3 */}
      <div className="div-wrap">
        {squares.map(square =>
        <DivElement 
        key={square}
        onClick={()=>{handleToggleBg(square)}}
        style={{backgroundColor: selectedSquares.includes(square) ? 'white' : 'transparent'}}
        />)}
      </div>


      {/* zmiana tla lvl2*/}
      <div className="div-wrap">
      {buttons.map(button => 
        <DivElement 
        key={button}
        onClick={() => handleSetChangeBg(button)}
        style={{ backgroundColor: changeBg===button ? 'white' : 'transparent' }}
        />
      
      )
    }
    </div>
    
    </>
  )
}

export default App
