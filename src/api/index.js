import axios from 'axios'
import config from '../config.json'

const polymathAPI = axios.create({
  baseURL: config.API,
})

export function getSecurityToken (ticker) {
  return polymathAPI.get(`/securitytoken/${ticker.toUpperCase()}`)
}

export function postSecurityToken (data) {
  return polymathAPI.post('/securitytoken', data)
}

export function updateSecurityToken (data) {
  return polymathAPI.post(`/securitytoken/${data.ticker.toUpperCase()}`, data)
}
