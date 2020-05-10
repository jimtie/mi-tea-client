import axios from 'axios';

const apiUrl = `${process.env.REACT_APP_API_URL}/teas`

export default class TeaModel {
  static all = () => {
  	let request = axios.get(`${apiUrl}`);
  	return request;
  }

  static show = (tea) => {
    let request = axios.get(`${apiUrl}/${tea}`);
    return request;
  }
}
