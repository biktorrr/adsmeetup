fs = require('fs')
solc = require('solc')
Web3 = require('web3')

web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));

code = fs.readFileSync('adsmeetup.sol').toString()
compiledCode = solc.compile(code)

abiDefinition = JSON.parse(compiledCode.contracts[':ADSMeetup'].interface)

ADSContract = web3.eth.contract(abiDefinition)
byteCode = compiledCode.contracts[':ADSMeetup'].bytecode
deployedContract = ADSContract.new({data: byteCode, from: web3.eth.accounts[0], gas: 4700000})

console.log(deployedContract.address)

contractInstance = ADSContract.at(deployedContract.address)