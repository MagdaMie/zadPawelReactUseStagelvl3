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

  return (
    <>
      {/* zmiana tla */}
      <div className="div-wrap">
      {buttons.map(button => 
        <DivElement 
        key={button}
        content={''}
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
