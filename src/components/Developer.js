import { useState } from 'react'

export default function Developer(props) {
  const { name, expertise } = props
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="dev">
      <p>{name}</p>
      {expanded && (
        <ul>
          {expertise.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
