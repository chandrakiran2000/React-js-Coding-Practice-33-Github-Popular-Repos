import './index.css'

const RepositoryItem = props => {
  const {each} = props
  const {avatarUrl, forksCount, issuesCount, name, starsCount} = each

  return (
    <li className="each-li">
      <img className="each-li-img" src={avatarUrl} alt={name} />
      <h1 className="each-li-heading">{name}</h1>
      <div className="each-li-symbol">
        <img
          className="each-li-symbol-img"
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
        />
        <p className="each-li-symbol-text">{starsCount}</p>
      </div>
      <div className="each-li-symbol">
        <img
          className="each-li-symbol-img"
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
        />
        <p className="each-li-symbol-text">{forksCount}</p>
      </div>
      <div className="each-li-symbol">
        <img
          className="each-li-symbol-img"
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
        />
        <p className="each-li-symbol-text">{issuesCount}</p>
      </div>
    </li>
  )
}

export default RepositoryItem
