Etherlime deployment

The deploy.js script allows you to deploy and manage Realitio contracts for both ETH and ERC20 tokens, arbitration contracts and ERC20 tokens themselves. This uses Etherlime, which is cleaner and less bureaucratic than Truffle.

This assumes the contracts are already compiled, and their compiled code available under truffle/build/contracts. Etherlime can do this, but for now we do it with 
truffle compile

It expects to find a private key for the network to which you are deploying in the form of simple unencrypted hex under secrets/, eg for rinkeby there should be a key in secrets/rinkeby.sec

For options run 
node deploy.js

The scripts will populate both the json file under truffle/build/contracts and the config file at config/contracts.json
