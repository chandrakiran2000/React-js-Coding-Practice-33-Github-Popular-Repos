import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LanguageFilterItem from '../LanguageFilterItem'

import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here

class GithubPopularRepos extends Component {
  state = {
    activeFilterId: languageFiltersData[0].id,
    repoData: [],
    apiCalling: true,
    isLoading: true,
  }

  componentDidMount() {
    this.callApi()
  }

  callApi = async () => {
    const {activeFilterId} = this.state
    const response = await fetch(
      `https://apis.ccbp.in/popular-repos?language=${activeFilterId}`,
    )
    console.log(response)
    console.log(response.ok)
    const data = await response.json()
    //  console.log('api called')
    //  console.log(data.popular_repos)

    const filterData = data.popular_repos.map(each => ({
      avatarUrl: each.avatar_url,
      forksCount: each.forks_count,
      id: each.id,
      issuesCount: each.issues_count,
      name: each.name,
      starsCount: each.stars_count,
    }))
    //  console.log(filterData)
    this.setState({repoData: filterData, apiCalling: response.ok})
    this.setState({isLoading: false})
  }

  handleActiveFilterId = async id => {
    this.setState({isLoading: true})
    this.setState({activeFilterId: id})
    //  const {activeFilterId} = this.state
    const response = await fetch(
      `https://apis.ccbp.in/popular-repos?language=${id}`,
    )
    console.log(response)
    console.log(response.ok)
    const data = await response.json()
    //  console.log('api called')
    //  console.log(data.popular_repos)

    const filterData = data.popular_repos.map(each => ({
      avatarUrl: each.avatar_url,
      forksCount: each.forks_count,
      id: each.id,
      issuesCount: each.issues_count,
      name: each.name,
      starsCount: each.stars_count,
    }))
    //  console.log(filterData)
    this.setState({repoData: filterData, apiCalling: response.ok})
    this.setState({isLoading: false})
  }

  loaderFun = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  reposFun = () => {
    const {repoData} = this.state
    return (
      <ul className="repos-card">
        {repoData.map(each => (
          <RepositoryItem each={each} key={each.id} />
        ))}
      </ul>
    )
  }

  faliureFun = () => (
    <div className="failure-card">
      <img
        className="failure-card-img"
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
    </div>
  )

  successAndFailure = () => {
    const {apiCalling} = this.state
    const re = apiCalling ? this.reposFun() : this.faliureFun()

    return re
  }

  render() {
    const {activeFilterId, isLoading} = this.state
    //  console.log(activeFilterId)
    return (
      <div className="github-popular-repos-card">
        <h1 className="popular-heading">Popular</h1>
        <ul className="language-filter-list">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              each={each}
              key={each.id}
              isActive={each.id === activeFilterId}
              handleActiveFilterId={this.handleActiveFilterId}
            />
          ))}
        </ul>
        {isLoading ? this.loaderFun() : this.successAndFailure()}
      </div>
    )
  }
}

export default GithubPopularRepos
