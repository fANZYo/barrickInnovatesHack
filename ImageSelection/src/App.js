import React, { Component } from 'react';
import VettingContract from '../build/contracts/Funding.json';
// import SimpleStorageContract from '../build/contracts/SimpleStorage.json'
import getWeb3 from './utils/getWeb3';

import './reset.css';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      storageValue: 0,
      web3: null
    };
  }

  componentWillMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.

    getWeb3
    .then(results => {
      this.setState({
        web3: results.web3
      })

      // Instantiate contract once web3 provided.
      this.instantiateContract()
    })
    .catch(() => {
      console.log('Error finding web3.')
    })

    const data = null;
    const that = this;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:4000');

    xhr.addEventListener('readystatechange', function() {
      if (this.readyState === 4) {
        console.log(JSON.parse(this.responseText));
        that.setState({ status: JSON.parse(this.responseText) });
      }
    });

    xhr.send(data);
  }

  instantiateContract() {
    const contract = require('truffle-contract')
    const vetting = contract(VettingContract)
    vetting.setProvider(this.state.web3.currentProvider)

    // Declaring this for later so we can chain functions on SimpleStorage.
    let vettingInstance

    // Get accounts.
    this.state.web3.eth.getAccounts((error, accounts) => {
      vetting.deployed().then((instance) => {
        vettingInstance = instance;

        // Stores a given value, 5 by default.
        return vettingInstance.SendFunds({value: this.state.web3.toWei(15, 'ether'), from: accounts[0]});
      });
    })
  }

  onFileLoad() {
    console.log('thank you');
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <AppBar
            title="Upload Image"
            className="bar"
            style={{
              backgroundColor: '#333',
              marginBottom: "2em"
            }}
          />
          <img
            src="http://www.moneyhome.com/wp-content/uploads/2017/10/Barrick-Gold-Corporation-ABX-Logo-364x150.jpg"
            alt="Barrick logo"
            style={{
              marginBottom: '2em'
            }}
          />
          <FlatButton
            primary={true}
            label="Choose an Image"
            backgroundColor="#D4AF37"
            labelStyle={{
              color: '#333'
            }}
          >
            <input type="file" id="imageButton" onChange={this.onFileLoad.bind(this)}></input>
          </FlatButton>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App
