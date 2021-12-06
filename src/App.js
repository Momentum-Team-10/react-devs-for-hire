import { useState } from 'react'
import Developer from './components/Developer.js'
import { developerData } from './developerData'

export const App = () => {
  const [developers, setDevelopers] = useState(developerData)

  const handleFavorite = (name) => {
    const newDevs = developers.map((dev) => {
      if (dev.name === name) {
        const favorited = !dev.favorited
        return { ...dev, favorited }
      }
      return dev
    })
    setDevelopers(newDevs)
  }

  return (
    <>
      <h1>Developers for Hire!</h1>
      {developers.map((dev, index) => (
        <Developer
          name={dev.name}
          key={index}
          expertise={dev.expertise}
          favorited={dev.favorited}
          handleFavorite={handleFavorite}
          githubName={dev.githubName}
        />
      ))}
    </>
  )
}

export { App as default }
