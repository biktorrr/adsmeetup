pragma solidity ^0.4.18;

contract ADSMeeting {
  mapping (bytes32 => uint8) public adspoints;
  bytes32[] public attendeeList;

  function ADSMeeting(bytes32[] attendeeNames) public {
    attendeeList = attendeeNames;
  }

  function totalPointsFor(bytes32 attendee) view public returns (uint8) {
    require(validAttendee(attendee));
    return adspoints[attendee];
  }

  function addPointsForAttendee(bytes32 attendee, uint8 points) public {
    require(validAttendee(attendee));
    adspoints[attendee] += points;
  }

  function addAttendee(bytes32 attendee, uint8 points){
	attendeeList.push(attendee);
	adspoints[attendee] = points;
}  

  function validAttendee(bytes32 attendee) view public returns (bool) {
    for(uint i = 0; i < attendeeList.length; i++) {
      if (attendeeList[i] == attendee) {
        return true;
      }
    }
    return false;
  }
}