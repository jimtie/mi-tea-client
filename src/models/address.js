import axios from 'axios';

const REACT_APP_API_URL = "http://localhost:3001/api/v1/addresses"

export default class AddressModel {
  static create = (address) => {
  	let request = axios.post(REACT_APP_API_URL, address, {
      withCredentials: true
    });
    return request;
  }

  static delete = (address) => {
      let request = axios.delete(`${REACT_APP_API_URL}/${address}`);
      return request;
  }

  static update = (address) => {
      let request = axios.put(`${REACT_APP_API_URL}/${address._id}`, address);
      return request;
  }

  static user = (currentUser) => {
    let request = axios.get(`${REACT_APP_API_URL}/user/${currentUser}`, {
      withCredentials: true,
    });
    return request;
  }

  static all = () => {
  	let request = axios.get(`${REACT_APP_API_URL}`)
  	return request;
  }
}
