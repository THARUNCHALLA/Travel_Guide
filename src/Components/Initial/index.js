import {Component} from 'react'

import Loader from 'react-loader-spinner'

import Last from '../Last'

import './index.css'

const apiStatus = {
  sucess: 'SUCESS',
  loading: 'LOADING',
}

class Initial extends Component {
  state = {final: [], api: ''}

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    this.setState({api: apiStatus.loading})
    const apiUrl = 'https://apis.ccbp.in/tg/packages'
    const response = await fetch(apiUrl)
    const data = await response.json()
    const Data = data.packages
    const updatedData = Data.map(each => ({
      description: each.description,
      id: each.id,
      name: each.name,
      imageUrl: each.image_url,
    }))
    this.setState({final: updatedData, api: apiStatus.sucess})
  }

  sucess = () => {
    const {final} = this.state
    return (
      <ul className="unordered">
        {final.map(eachItem => (
          <Last user={eachItem} key={eachItem.id} />
        ))}
      </ul>
    )
  }

  sucess1 = () => (
    <div data-testid="loader" className="center1">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  tharun = () => {
    const {api} = this.state
    switch (api) {
      case apiStatus.sucess:
        return this.sucess()
      case apiStatus.loading:
        return this.sucess1()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="Container">
        <h1 className="head">Travel Guide</h1>
        {this.tharun()}
      </div>
    )
  }
}

export default Initial
