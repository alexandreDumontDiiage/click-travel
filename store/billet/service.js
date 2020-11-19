import api from '../../service/api.js'

export default {
  getBilletsForDestination(code) {
    return new Promise((resolve, reject) => {
      api
        .get('tickets', {
          params: {
            filter: {
              'offset': 0,
              'limit': 100,
              'skip': 0,
              'where': {
                'to': code
              }
            }
          }
        })
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => console.log(error))
    })
  }
}
