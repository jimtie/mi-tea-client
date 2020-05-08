import axios from 'axios';

const REACT_APP_API_URL = "http://localhost:3001/api/v1/credits"

export default class CreditModel {
  static create = (credit) => {
    let request = axios.post(REACT_APP_API_URL, credit, {
      withCredentials: true
    });
    return request;
  }

  static delete = (credit) => {
      let request = axios.delete(`${REACT_APP_API_URL}/${credit}`);
      return request;
  }

  static update = (credit) => {
      let request = axios.put(`${REACT_APP_API_URL}/${credit._id}`, credit);
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
