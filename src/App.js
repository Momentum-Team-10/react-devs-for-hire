import { useState } from 'react'
import Developer from './components/Developer.js'

export const App = () => {
  // const developers = ['Trey', 'Janelle', 'Trent', 'RJ']
  const [developers] = useState(['Trey', 'Janelle', 'Trent', 'RJ'])

  return (
    <>
      <h1>Developers for Hire!</h1>
      {developers.map((dev, index) => (
        <Developer devName={dev} key={index} />
      ))}
    </>
  )
}

export { App as default }
