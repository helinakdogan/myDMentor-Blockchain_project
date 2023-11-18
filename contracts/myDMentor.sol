//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract myDMentor is Ownable{

    mapping(address => bool) private ifVerifiedUser;

    mapping(address => mapping(address => uint256)) private requestId;

    mapping(uint256 => bytes32) private requestHash;
    mapping(uint256 => bool) requestVerified;
    mapping(address => uint256) price;

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

    function verifyProof(string memory _videohash, address payable _publisher) external payable {
        bytes32 _data = requestHash[requestId[_publisher][msg.sender]];
        
        require(keccak256(abi.encodePacked(_videohash)) == keccak256(abi.encodePacked(_data)),
                "Given hash is not equal to onchain hash");
        require(price[_publisher] <= msg.value, "Not enough Ether");
        
        (bool sent, bytes memory data) = _publisher.call{value: msg.value}("");
        require(sent, "Ether transfer failed");
        //maybe delete mapping data now?
    }

    function uploadHash(string memory _videohash, address _receiver) external{
        requestHash[requestId[msg.sender][_receiver]] = keccak256(abi.encodePacked(_videohash));
    }

}