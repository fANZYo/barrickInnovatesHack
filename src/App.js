import React, { Component } from 'react';
import VettingContract from '../build/contracts/Funding.json';
import getWeb3 from './utils/getWeb3';

import './css/oswald.css';
import './css/open-sans.css';
import './css/pure-min.css';
import './App.css';

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
    /*
     * SMART CONTRACT EXAMPLE
     *
     * Normally these functions would be called in the context of a
     * state management library, but for convenience I've placed them here.
     */

    const contract = require('truffle-contract')
    const vetting = contract(VettingContract)
    vetting.setProvider(this.state.web3.currentProvider)

    // Declaring this for later so we can chain functions on SimpleStorage.
    var vettingInstance

    // Get accounts.
    this.state.web3.eth.getAccounts((error, accounts) => {
      vetting.deployed().then((instance) => {
        vettingInstance = instance

        // Stores a given value, 5 by default.
        return vettingInstance.Funding(15, {from: '0xfd7597Af18fB14fe283Bee7279ca3DdA4115df28'});
      });//.then((instance) => {
      //   return vettingInstance.Vetting(true, {from: '0x4E7D84B9Fe0DE2E075bD881eAa363E5DC2CbBe4C'});
      // });
    })
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar pure-menu pure-menu-horizontal">
            <a href="#" className="pure-menu-heading pure-menu-link">Genesis</a>
        </nav>

        <div  className="container">
          <input type="file" name="file" />
          <button type="submit">Send</button>
        </div>
      </div>
    );
  }
}

export default App
