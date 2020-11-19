export default {
  setDestinations({ destinations }, value) {
    console.log(destinations);
    console.log(value);
    destinations.splice(0, destinations.length);
    destinations.push(...value)
  },
}
