import service from './service'

export default {
  loadDestinations(state) {
    service.getAll()
      .then((data) => {
        state.commit('setDestinations', data);
      })
      .catch(() => {
        state.commit('setDestinations', []);
      });
  }
}
