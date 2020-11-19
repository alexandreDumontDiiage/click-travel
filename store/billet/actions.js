import service from './service'

export default {
  loadBillets(state, code) {
    service.getBilletsForDestination(code)
      .then((data) => {
        state.commit('setBillets', data);
      })
      .catch(() => {
        state.commit('setBillets', []);
      });
  }
}
