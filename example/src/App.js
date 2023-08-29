import React from 'react'

import { Button, Text } from 'yummys'

import 'yummys/dist/index.css'
import 'yummys/src/styles.module.css'

const App = () => {
  return (

    <> 
      <Text text="I created some unique buttons from yummys such as primary, default, dashed, text, link buttons."/>
    
      <Text text=" You can install npm yummys and ready to use."/>
      <Button text="Click" onClick={() => alert("asd")} />
      <Button text='Primary Button' type='primary'/>

      <Button text='Default Button' type='default'/>

      <Button text='Dashed Button' type='dashed'/>

      <Button text='Text Button' type='text'/>

      <Button text='Link Button' type='link'/>
      <br/>
      <br/>
      <br/>
     

       
    </> 
     
    
  )

}

export default App
