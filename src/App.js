import React, { Component } from 'react';
import bluth1 from './photos/bluth1.png';
import bluth2 from './photos/bluth2.png';
import bluth3 from './photos/bluth3.png';
import bluth4 from './photos/bluth4.jpg';
import './App.css';
import axios from 'axios';

const API_PATH = 'http://localhost:1992/bluth/api/contact/index.php';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      address: '',
      phone: '',
      how: '',
      budget: '',
      mailsent: false,
      error: null
    }
  }

  handleFormSubmit = e => {
    e.preventDefault();
    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: this.state
    })
      .then(result => {
        this.setState({
          mailsent: result.data.sent
        })
      })
    .catch(error => this.setState({ error: error.message }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Bluth Reals Estate
          </p>
        </header>
        <p>Interested in the best properties in Arizona?  Fill out this quick form for more info</p>
        <div>
          <form action="#">
            <input className="input" type="text" name="name" placeholder="Your Name"
             value={this.state.name}
             onChange={e => this.setState({name: e.target.value})}>
            </input>
            <br></br>
            <input className="input" type="email" name="email" placeholder="Email"
             value={this.state.email}
             onChange={e => this.setState({email: e.target.value})}>
            </input>
            <br></br>
            <input className="input" type="text" name="adress" placeholder="Address"
             value={this.state.address}
             onChange={e => this.setState({address: e.target.value})}>
             </input>
            <br></br>
            <input className="input" type="text" name="phone" placeholder="Phone Number"
            value={this.state.phone}
            onChange={e => this.setState({phone: e.target.value})}>
            </input>
            <br></br>
            <input className="input" type="text" name="how" placeholder="How did you find us?"
            value={this.setState.how}
            onChange={e => this.setState({how: e.target.value})}>
            </input>
            <br></br>
            <input className="input" type="text" name="budget" placeholder="What is your budget?"
            value={this.setState.budget}
            onChange={e => this.setState({budget: e.target.value})}>
            </input>
            <br></br>
            <input className="button" type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit"></input>
            <div>
              {this.state.mailsent &&
                <div>Thanks for your submission!</div>
              }
            </div>
          </form>
        </div>
        <div>
          <img src={bluth1} className="photos" />
          <img src={bluth2} className="photos" />
          <img src={bluth3} className="photos" />
          <img src={bluth4} className="photos" />
        </div>
      </div>
    );
  }
}

export default App;
