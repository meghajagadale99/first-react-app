import React from 'react';
import './App.css';
import img from './BL-logo.png'

class App extends React.Component {
  url = 'https://www.bridgelabz.com/'
  constructor() {
    super()
    this.state = {
    userName: ' ',
    nameError: ' '
    
    }
  }
  onClick = ($event) => {
    console.log("Save Button is Clicked !", $event);
    window.open(this.url, "_blank");
  }

  onNameChange = (event) => {
    console.log("value is ", event.target.value);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2}$');
    this.setState({userName: event.target.value})
    if (nameRegex.test(event.target.value)) {
      this.setState({nameError: ''})
    } else{
      this.setState({nameError: 'Name is Incorrect' })
    }
    }

  render() {
    return (
      <div>
        <div>
        <h1>Hello {this.state.userName} from Bridgelabz!!!</h1>
        <img src={img} onClick={this.onClick}
        alt="This Bridgelabz logo: a Bridge to Employee through lab works" />
        </div>
        <div>
        <input onChange={this.onNameChange} />
        <span className="error-output">{this.state.nameError}</span>
        </div>
      </div>
      
    );
  }
}
export default App;