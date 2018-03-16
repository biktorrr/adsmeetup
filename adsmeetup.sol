pragma solidity ^0.4.18;


contract ADSMeetup {
  bytes32[] public candidateList;

  function ADSMeetup() public {
  }

  function bytesToAddress(bytes32 _address) public returns (address) {
    uint160 m = 0;
    uint160 b = 0;

    for (uint8 i = 0; i < 20; i++) {
      m *= 256;
      b = uint160(_address[i]);
      m += (b);
    }

    return address(m);
  }
  
  function attend(bytes32 walletid) public {
	address walletaddr = bytesToAddress(walletid);
	walletaddr.transfer(1);
  }

}