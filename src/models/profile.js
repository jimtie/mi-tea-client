import axios from 'axios'

const apiUrl = `${process.env.REACT_APP_API_URL}/user`

export default class ProfileModel {
  static update(user) {
    // changed from profile._id to user._id since we don't have a profile model
  	let request = axios.put(`${apiUrl}/${user._id}`, user)
    return request
  }

  // not sure we need the below method since we don't need to get all users
  static all = () => {
  	let request = axios.get(`${apiUrl}`)
  	return request
  }
}
