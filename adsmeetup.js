//web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
//new Web3.providers.HttpProvider("http://127.0.0.1:7545")
web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));
//web3 = new Web3()
//console.log(web3)
abi = JSON.parse('[{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"bytes32"}],"name":"bytesToAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"walletid","type":"bytes32"}],"name":"attend","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]')
VotingContract = web3.eth.contract(abi);
// In your nodejs console, execute contractInstance.address to get the address at which the contract is deployed and change the line below to use your deployed address
contractInstance = VotingContract.at('0xecfcab0a285d3380e488a39b4bb21e777f8a4eac');

//const Utils = require('web3-utils');


function sendMessageTransaction(walletaddress) {
    let txTransfer = {};
    //txTransfer.from = from.walletaddress;
    txTransfer.from = walletaddress;
    //txTransfer.to = to.web3.eth.accounts[0];
    txTransfer.to = web3.eth.accounts[0];
    txTransfer.gas = 200;
    txTransfer.value = 1;
    txTransfer.data = web3.utils.toHex('free text data');
    web3.eth.sendTransaction(txTransfer);
  //contractInstance.attend(walletaddress, {from: web3.eth.accounts[0]});
}


function attend(walletaddress) {
  contractInstance.attend(walletaddress, {from: web3.eth.accounts[0]});
}
