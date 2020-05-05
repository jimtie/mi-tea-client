import axios from 'axios';

const REACT_APP_API_URL = "http://localhost:3001/api/v1/machine"

export default class MachineModel {
  static all = () => {
  	let request = axios.get(`${REACT_APP_API_URL}`);
  	return request;
  }

  static show = (machine) => {
    let request = axios.get(`${REACT_APP_API_URL}/${machine}`);
    return request;
  }
}
