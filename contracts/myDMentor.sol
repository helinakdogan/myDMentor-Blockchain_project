//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract myDMentor is Ownable {

    mapping(address => bool) private ifVerifiedUser;
    
    uint256 private requestNo = 1;
    mapping(address => mapping(address => uint256)) private requestId;

    mapping(uint256 => string) private requestURI;
    mapping(address => uint256) private price;
    mapping(address => uint256) private activeJobs;

    constructor(address initialOwner) Ownable(initialOwner) {
        ifVerifiedUser[initialOwner] = true;
    }

    function getIfVerifiedUser(address _address) public view returns(bool){
        return ifVerifiedUser[_address];
    }

    function setVerifiedUser(address _address, bool _verified) public onlyOwner{
        ifVerifiedUser[_address] = _verified;
    }

    function getRequestId(address publisher, address receiver) public view returns(uint256){
        require(msg.sender == publisher || msg.sender == receiver || msg.sender == this.owner());
        return requestId[publisher][receiver];
    }
    
    function getPrice(address _address) public view returns(uint256){
        return price[_address];
    }
    function setPrice(uint256 _price) public {
        price[msg.sender] = _price;
    }
    function ownerSetPrice(address _toSet, uint256 _price) public onlyOwner{
        price[_toSet] = _price;
    }

    function uploadHash(string memory _videoURI, address _receiver) external {
        require(requestId[msg.sender][_receiver] != 0, "Job is not available");

        requestURI[requestId[msg.sender][_receiver]] = _videoURI;
        requestId[msg.sender][_receiver]--;
    }

    function sendToPool(address _toBeReceiver) external payable {
        require(ifVerifiedUser[_toBeReceiver] == true, "receiver not verified");
        require(msg.value >= price[_toBeReceiver]);
        requestId[_toBeReceiver][msg.sender] = requestNo;
        requestNo++;
        activeJobs[_toBeReceiver]++;
    }

    receive() external payable {}

}
