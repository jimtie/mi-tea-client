import axios from 'axios';

const apiUrl = `${process.env.REACT_APP_API_URL}/addresses`

export default class AddressModel {
  static create = (address) => {
  	let request = axios.post(apiUrl, address, {
      withCredentials: true
    });
    return request;
  }

  static delete = (address) => {
      let request = axios.delete(`${apiUrl}/${address}`);
      return request;
  }

  static update = (address) => {
      let request = axios.put(`${apiUrl}/${address._id}`, address);
      return request;
  }

  static user = (currentUser) => {
    let request = axios.get(`${apiUrl}/user/${currentUser}`, {
      withCredentials: true,
    });
    return request;
  }

  static all = () => {
  	let request = axios.get(`${apiUrl}`)
  	return request;
  }
}
