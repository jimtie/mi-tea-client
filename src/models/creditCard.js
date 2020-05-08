import axios from 'axios';

const REACT_APP_API_URL = "http://localhost:3001/api/v1/creditcards"

export default class CreditCardsModel {
  static create = (creditcard) => {
  	let request = axios.post(REACT_APP_API_URL, creditcard, {
      withCredentials: true
    });
    return request;
  }

  static delete = (creditcard) => {
      let request = axios.delete(`${REACT_APP_API_URL}/${creditcard}`);
      return request;
  }

  static update = (creditcard) => {
      let request = axios.put(`${REACT_APP_API_URL}/${creditcard._id}`, creditcard);
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
