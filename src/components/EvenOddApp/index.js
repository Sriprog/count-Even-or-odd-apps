import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onClickShowLastName = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.round(Math.random() * 100, 2),
    }))
  }

  getState = () => {
    const {count} = this.state
    return count % 2 === 0 ? 'Even' : 'Odd'
  }

  render() {
    const {count} = this.state
    const status = this.getState()
    return (
      <div className="app-container">
        <h1 className="heading">Count {count}</h1>
        <div className="name-container">
          <p>Count is {status}</p>
          <button
            type="button"
            className="show-hide-button"
            onClick={this.onClickShowLastName}
          >
            Increment
          </button>
          <p>* Increase By random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
