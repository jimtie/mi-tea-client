import axios from 'axios';

const apiUrl = `${process.env.REACT_APP_API_URL}/credits`

export default class CreditModel {
  static create = (credit) => {
    let request = axios.post(apiUrl, credit, {
      withCredentials: true
    });
    return request;
  }

  static delete = (credit) => {
      let request = axios.delete(`${apiUrl}/${credit}`);
      return request;
  }

  static update = (credit) => {
      let request = axios.put(`${apiUrl}/${credit._id}`, credit);
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
