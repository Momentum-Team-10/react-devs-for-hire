export default function Developer(props) {
  console.log(props)
  return (
    <div className="dev">
      <p>{props.devName}</p>
      <p>Expertise: front end</p>
    </div>
  )
}
