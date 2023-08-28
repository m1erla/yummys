import React from 'react'

import { ExampleComponent, Button } from 'yummys'

import 'yummys/dist/index.css'

const App = () => {
  return (

    <> 
      <ExampleComponent  text=" Library Example" />
      <Button text="Click" onClick={() => alert("asd")} />
     
    </> 
     
    
  )

}

export default App
