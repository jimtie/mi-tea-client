import axios from 'axios';

const apiUrl = `${process.env.REACT_APP_API_URL}/machine`

export default class MachineModel {
  static all = () => {
  	let request = axios.get(`${apiUrl}`);
  	return request;
  }

  static show = (machine) => {
    let request = axios.get(`${apiUrl}/${machine}`);
    return request;
  }
}
