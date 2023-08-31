import './index.css'

const Last = props => {
  const {user} = props
  const {description, name, imageUrl} = user
  return (
    <li>
      <img src={imageUrl} alt={name} className="image" />
      <h1 className="Heading">{name}</h1>
      <p className="para">{description}</p>
    </li>
  )
}

export default Last
