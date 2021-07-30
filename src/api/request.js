const baseUrl = 'https://dispex.org/api/vtest'

export const request = (endpoint, method, withCredentials, headers, body = null) => {
  return fetch(baseUrl + endpoint, {
    method,
    withCredentials,
    headers,
    body
  })
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      console.log(error)
    })
}
