//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract myDMentor is Ownable{

    mapping(address => bool) private ifVerified;

    mapping(address => mapping(address => int256)) private requestId;
    mapping(int256 => string) private requestHash;
    mapping(int256 => bool) requestVerified;

    constructor(address initialOwner) Ownable(initialOwner) {
        ifVerified[initialOwner] = true;
    }

    function getIfVerified(address _address) public view returns(bool){
        return ifVerified[_address];
    }

    // 
    function setVerified(address _address, bool _verified) public onlyOwner{
        ifVerified[_address] = _verified;
    }

    function getRequestId(address publisher, address receiver) public view returns(int256){
        require(msg.sender == publisher || msg.sender == receiver || msg.sender == this.owner());
        return requestId[publisher][receiver];
    }




}