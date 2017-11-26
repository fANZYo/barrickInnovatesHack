Barrick Innovate Hack project

## The Problems
  * Large number of unexploited lands due to the overhead involved in any operations.
  * Considerable number of AMS engaging in illegal mining due to a lack of governing entity.
  * Unstable employment related to price fluctuation

## Our Solution
Based on samples, Barrick determines the scale of hypothetical operation. Depending on the density of the mine Barrick either buys the land or supports AMS activity on this land. AMS would go through a training process to ensure health and safety, as well as other standards, are met. Upon completion, said AMS enters our database of trusted party and funding is automatically sent to the party involved and a new relationship between Barrick and the AMS starts. All data, from sample to partnership, is added to the blockchain for reference.

### Hypothesis
Supporting employment rate in local areas will lead to reduced conflicts, decrease in illegal mining activities and improved health and safety.

## Flowchart
| ![Flow chart backend](https://i.imgur.com/TvociW5.jpg?1) | ![Flow chart blockchain](https://i.imgur.com/fYL88HS.jpg?1) |
| -------------------------------------------------------- | ----------------------------------------------------------- |

## Install

#### Ganache
```
$ git clone https://github.com/trufflesuite/ganache.git
$ npm install
$ npm start
```

#### Truffle

`# sudo npm i -g truffle`

Then you'll need to compile the smart contracts and migrate them to the blockchain.

From the project folder run:
```
$ truffle compile
$ truffle migrate
```

#### Flask

The server also runs on flask so you'll need to install it to run the model but it's not fully implemented with the front end so not needed

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
