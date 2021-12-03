import { useState } from 'react'

export default function Developer(props) {
  const { name, expertise } = props
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="dev">
      <p>{name}</p>
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
