import React, { Component } from 'react';
import VettingContract from '../build/contracts/Funding.json';
import getWeb3 from './utils/getWeb3';

import './reset.css';
import './App.css';

// Modules
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Checkbox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      storageValue: 0,
      web3: null
    }
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
  }

  instantiateContract() {
    const contract = require('truffle-contract')
    const vetting = contract(VettingContract)
    vetting.setProvider(this.state.web3.currentProvider)

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

  render() {
    return (
      <MuiThemeProvider>
        <div> 
          <AppBar 
            title="Vetting"
            iconElementRight={
              <img src="data:image/png;base64,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" alt="Barrick logo" style={{marginTop: '.5em'}} />}

            style={{
              backgroundColor: '#333'
            }}
          />
          <form method="POST" action="#" style={{padding: '1em'}}>
            <h2>Safety</h2>
            <Checkbox
              style={{
                display: 'block',
              }}
              label="Protective clothing"
              labelPosition="left"
            />
            <Checkbox
              style={{
                display: 'block',
              }}
              label="Safe operations"
              labelPosition="left"
            />
            <Checkbox
              style={{
                display: 'block',
              }}
              label="Explosive handling"
              labelPosition="left"
            />
            <Checkbox
              style={{
                display: 'block',
              }}
              label="Machine handling"
              labelPosition="left"
            />
            <h2>Environment</h2>
            <Checkbox
              style={{
                display: 'block',
              }}
              label="Waste handling"
              labelPosition="left"
            />
            <Checkbox
              style={{
                display: 'block',
              }}
              label="Minimal footprint"
              labelPosition="left"
            />
            <Checkbox
              style={{
                display: 'block',
              }}
              label="Minimal CO2 emition"
              labelPosition="left"
            />
            <h2>Human rights</h2>
            <Checkbox
              style={{
                display: 'block',
              }}
              label="No child labour"
              labelPosition="left"
            />
            <Checkbox
              style={{
                display: 'block',
              }}
              label="No slave labour"
              labelPosition="left"
            />
            <Checkbox
              style={{
                display: 'block',
              }}
              label="Working conditions"
              labelPosition="left"
            />
            <FlatButton
              label="Submit"
              onClick={this.handleClick}
              style={{
                background: '#D4AF37',
                marginTop: '1em',

              }}
            />
          </form>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App
