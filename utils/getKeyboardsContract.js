import { ethers } from "ethers";

import abi from "../utils/Keyboards.json"

const contractAddress = '0xcF55A99775904041fe897e06F8A5d5595Bf4e731';
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if(ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}