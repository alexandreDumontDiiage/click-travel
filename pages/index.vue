<template>
  <div class="container-fluid">
  <div class="cust-container">
    <div class="toolbar">
      <Logo />
    </div>
    <div class="content">
        <h1 class="title">Choose your dream destination...</h1>
        <div class="links">
          <a class="giant-button" v-for="destination in destinations" :key="destination.code">
            <NuxtLink :to="`/billets/${destination.code}`"> {{ destination.name }}</NuxtLink>
          </a>
        </div>
    </div>
  </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      destinations: 'destination/getDreamDestinations'
    })
  },
  methods: {
    ...mapActions({
      loadDestinations: 'destination/loadDestinations'
    })
  },
  mounted() {
    //Je fais un loadDestinations pour avoir la liste complète des dest
    this.loadDestinations()
  }
}
</script>

<style lang="scss">
.cust-container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.toolbar {
  height: 80px;
  background-color: #35495e;
  align-self: flex-start;
  width: 100%;
}

.content {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-image: url('~assets/airplane.jpg');
  background-size: cover;
}

.title {
  font-weight: 500;
  font-size: 58px;
  color: #fff;
  letter-spacing: 1px;
  text-shadow: 1px 1px 4px #000;
  text-align: center;
}

.links {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  padding-top: 15px;

  & > * {
    margin: 5px;
  }
}
</style>
