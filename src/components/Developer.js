import { useState } from 'react'

export default function Developer(props) {
  const { name, expertise, favorited, handleFavorite } = props
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="dev">
      <p>{name}</p>
      <button className="fav-btn" onClick={() => handleFavorite(name)}>
        {favorited ? '💔' : '❤️'}
      </button>
      {expanded ? (
        <div>
          <button
            className="btn-sm controls"
            onClick={() => setExpanded(false)}
          >
            Hide expertise
          </button>
          <ul>
            {expertise.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      ) : (
        <button className="btn-sm controls" onClick={() => setExpanded(true)}>
          Show expertise
        </button>
      )}
    </div>
  )
}
