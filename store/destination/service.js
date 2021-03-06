import api from '../../service/api.js'

export default {
  getAll() {
    return new Promise((resolve, reject) => {
      api
        .get('destinations', {
          params: {
            offset: '',
            limit: 100,
            skip: 0,
            where: {
              "isDreamDestination": true
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
