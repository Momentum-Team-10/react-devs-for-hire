import { useState } from 'react'
import Developer from './components/Developer.js'
import { developerData } from './developerData'

export const App = () => {
  const [developers, setDevelopers] = useState(developerData)
  const [selectedDev, setSelectedDev] = useState(null)

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
      {selectedDev ? (
        <>
          <div>
            <button onClick={() => setSelectedDev(null)}>Go Back</button>
          </div>
          <Developer
            name={selectedDev.name}
            expertise={selectedDev.expertise}
            favorited={selectedDev.favorited}
            handleFavorite={handleFavorite}
            githubName={selectedDev.githubName}
          />
        </>
      ) : (
        <>
          {developers.map((dev, index) => (
            <div
              className="dev card"
              key={index}
              onClick={() => setSelectedDev(dev)}
            >
              <p>{dev.name}</p>
            </div>
          ))}
        </>
      )}
    </>
  )
}

export { App as default }
