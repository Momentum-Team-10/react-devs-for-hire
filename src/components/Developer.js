import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Developer(props) {
  const { name, expertise, favorited, handleFavorite, githubName } = props
  const [expanded, setExpanded] = useState(false)
  const [repos, setRepos] = useState([])

  useEffect(() => {
    console.log('************USE EFFECT RUNS*********')
    // make AJAX request here
    axios
      .get(
        `https://api.github.com/users/${githubName}/repos?per_page=3&sort=created`
      )
      .then((response) => {
        setRepos(response.data.map((repoObj) => repoObj.name))
      })
  }, [])

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
      <ul className="repos">
        {repos.map((repo, index) => (
          <li className="repo" key={index}>
            {repo}
          </li>
        ))}
      </ul>
    </div>
  )
}
