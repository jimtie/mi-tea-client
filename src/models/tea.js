import axios from 'axios';

const REACT_APP_API_URL = "http://localhost:3001/api/v1/teas"

export default class TeaModel {
  static all = () => {
  	let request = axios.get(`${REACT_APP_API_URL}`);
  	return request;
  }

  static show = (tea) => {
    let request = axios.get(`${REACT_APP_API_URL}/${tea}`);
    return request;
  }
}
