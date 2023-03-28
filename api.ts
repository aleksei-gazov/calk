import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'localhost5000/',

})

export const usersAPI = {
  getusers(material, pageSize = 1) {
      return instance.get(`?type=${material}&count=${pageSize}`)
  }
}
export const configAIP = {
  getConfigData() {
      return instance.get('config')
  }
}