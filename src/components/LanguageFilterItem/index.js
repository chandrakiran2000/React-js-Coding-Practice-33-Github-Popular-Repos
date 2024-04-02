// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {each, isActive, handleActiveFilterId} = props
  const {id, language} = each
  //  console.log(isActive)
  const activeClass = isActive && 'active'

  const onClickFilter = () => {
    handleActiveFilterId(id)
  }
  return (
    <li className="language-filter-list-card">
      <button
        className={`language-filter-list-button ${activeClass}`}
        type="button"
        onClick={onClickFilter}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
