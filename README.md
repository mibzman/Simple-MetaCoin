# Simple MetaCoin example

## truffle 'MetaCoin' box without the library contract

an example for Pluralsight

steps to deploy:


1. `git clone https://github.com/mibzman/Simple-MetaCoin.git`
2. `cd simple-metacoin`
3. `npm install`
4. `npm i -g truffle`
5. copy `.env.example` to `.env`
6. fill in variables
7. `truffle deploy --network ropsten --reset`

Verify code on etherscan:

1. look for the console output like
```
  Deploying MetaCoin...
  ... <tranxaction hash>
  MetaCoin: <contract address>
```
2. copy the contract address
3. find that contract on etherscan
4. click 'verify code'
5. paste the contents of `contracts/MetaCoin.sol` into the code box
6. set the contract name to `MetaCoin`
7. set compiler version to latest commit of your truffle version (eg 0.24-commit, not the nightly builds)
8. set optimization to 'no'
9. verify


