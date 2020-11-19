<template>
  <div class="container">
    <div class="toolbar">
      <Logo />
    </div>
    <div class="content">
      <div>
        <h1 class="title">Liste des tickets pour le vol {{ this.$route.params.code }}</h1>
        <div>
          <div v-for="billet in billets" class="ticket">
          passenger: {{ billet.passenger }}<br>
          flight: {{ billet.flight }}<br>
          from: {{ billet.from }}<br>
          to: {{ billet.to }}<br>
          class: {{ billet.class }}<br>
          gate: {{ billet.gate }}<br>
          time: {{ billet.time }}<br>
          seat: {{ billet.seat }}<br>
          number: {{ billet.number }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters({
      billets: "billet/getBillets",
    }),
  },
  methods: {
    ...mapActions({
      loadBilletsForDestination: "billet/loadBillets",
    }),
  },
  mounted() {
    this.loadBilletsForDestination(this.$route.params.code);
  }
}
</script>

<style lang="scss">
.container {
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

.ticket {
  background-color: white;
  border: 1px solid cornflowerblue;
}
</style>
