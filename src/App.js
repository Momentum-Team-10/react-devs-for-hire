import { useState } from 'react'
import Developer from './components/Developer.js'
import { developerData } from './developerData'

export const App = () => {
  const [developers] = useState(developerData)

  return (
    <>
      <h1>Developers for Hire!</h1>
      {developers.map((dev, index) => (
        <Developer name={dev.name} key={index} expertise={dev.expertise} />
      ))}
    </>
  )
}

export { App as default }
