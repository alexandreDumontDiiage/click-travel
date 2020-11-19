export default {
  setBillets({ billets }, value) {
    billets.splice(0, billets.length);
    billets.push(...value)
  },
}
