import axios from 'axios'

const apiUrl = `${process.env.REACT_APP_API_URL}`

export default class UserModel {
    static create = (data) => {
        let request = axios.post(`${apiUrl}/auth/register`, data)
        return request
    }

    static login(credentials) {
        let request = axios.post(`${apiUrl}/auth/login`, credentials, {
            withCredentials: true
        })
        return request
    }

    static logout() {
        let request = axios.delete(`${apiUrl}/auth/logout`, {
            withCredentials: true
        });
        return request
    }

    static update(data) {
      let request = axios.put(`${apiUrl}/users`, data, {
          withCredentials: true
      });
      return request;
    }

    static verify() {
      let request = axios.get(`${apiUrl}/users/verify`, {
        withCredentials: true
      });
      return request;
    }
}
