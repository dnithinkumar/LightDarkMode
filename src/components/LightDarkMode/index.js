// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkMode: true,
    buttonText: 'Light Mode',
    color: 'black',
  }

  changeMode = () => {
    // this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
    const {isDarkMode} = this.state
    if (isDarkMode) {
      this.setState({
        isDarkMode: false,
        buttonText: 'Dark Mode',
        modeStyles: 'light-mode',
      })
    } else {
      this.setState({
        isDarkMode: true,
        buttonText: 'Light Mode',
        modeStyles: 'dark-mode',
      })
    }
  }

  // getButtonText = () => (this.isDarkMode ? 'Light Mode' : 'Dark Mode')

  // modeColor = () => (this.isDarkMode ? 'black' : 'white')

  render() {
    // const buttonText = this.getButtonText()
    // const modeColor = this.getColor()
    const {buttonText, modeStyles} = this.state

    return (
      <div className="bg-container">
        <div className={`app-bg-container ${modeStyles}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button className="button" onClick={this.changeMode}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
