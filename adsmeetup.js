web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
abi = JSON.parse('[{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"bytes32"}],"name":"bytesToAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"walletid","type":"bytes32"}],"name":"attend","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]')
VotingContract = web3.eth.contract(abi);
// In your nodejs console, execute contractInstance.address to get the address at which the contract is deployed and change the line below to use your deployed address
contractInstance = VotingContract.at('0x8f0483125FCb9aaAEFA9209D8E9d7b9C8B9Fb90F');

function attend(walletaddress) {
  contractInstance.attend(walletaddress, {from: web3.eth.accounts[0]});
}
