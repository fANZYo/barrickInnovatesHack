Barrick Innovate Hack project

## The Problems
  * Large number of unexploited lands containing small amout of gold due to the overhead involved in any operations.
  * Considerable number of ASM engaging in illegal mining due to a lack of governing entity.
  * Unstable employment related to stock price fluctuation

## Our Solution
We provide a service that aims to create a community for artisanal and small-scale miners (ASM) to work safely and in a stable environment. Through our system ASM will have the opportunity to inform Barrick of a potential opportunity via a picture containing geographic location. If it is indeed an opportunity, Barrick will be in a position to fund and employ said ASM once training and vetting requirement are satisfied.

### Hypothesis
The local ASM commuties will want to join Barrick's community of minners and supporting employment rate in local areas will lead to reduced conflicts, decrease in illegal mining activities and improved health and safety in ASM activities.

## Flowchart
| ![Flow chart backend](https://i.imgur.com/TvociW5.jpg?1) | ![Flow chart blockchain](https://i.imgur.com/fYL88HS.jpg?1) |
| -------------------------------------------------------- | ----------------------------------------------------------- |

## Install

#### Ganache
Ganache creates a personal Ethereum blockchain to run test, execute commands and inspect state.
```
$ git clone https://github.com/trufflesuite/ganache.git
$ npm install
$ npm start
```

#### Truffle
Truffle is a JavaScript framework for Ethereum development.
`# sudo npm i -g truffle`

Then you'll need to compile the contracts and migrate them to the blockchain.

From the project folder run:
```
$ truffle compile
$ truffle migrate
```

#### Flask

The server also runs on flask so you'll need to install it to run the model but it's not fully implemented with the front end yet so not required

`$ pip install flask`

## Running

Once installed you'll need 4 terminal windows and run from the root folder in order:
```
$ cd datasci
$ python gold-app.py
```
```
$ cd ganache
$ npm start
```
```
$ cd ImageSelection
$ npm start
```
```
$ cd Vetting
$ npm start
```
