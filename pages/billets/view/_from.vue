<template>
  <div class="cust-container">
    <div class="toolbar">
      <Logo />
    </div>
    <div class="content">
        <h1 class="title">Votre ticket {{ billet.flight }}
        </h1>
        <div class="row w-50">
          <div class="col-12">
            <div class="card-group">
              <div class="card mb-3 left-part" style="flex-grow:3">
                <div class="card-header bg-custom border-custom text-white">
                  <h5>Boarding Pass</h5>
                  First class
                </div>
                <div class="card-body">
                  <div class="card-title">
                    <span class="text-muted">Passenger</span> <br>
                    <span class="text-dark text-uppercase">{{ billet.passenger }}</span>
                  </div>
                  <p class="card-text">
                  <table class="w-100">
                    <thead class="text-muted">
                    <tr>
                      <td>
                        FLIGHT
                      </td>
                      <td>
                        FROM
                      </td>
                      <td>
                        TO
                      </td>
                      <td>
                        CLASS
                      </td>
                    </tr>
                    </thead>
                    <tr class="text-dark">
                      <td>
                        {{ billet.flight }}
                      </td>
                      <td>
                        {{ billet.from }}
                      </td>
                      <td>
                        {{ billet.to }}
                      </td>
                      <td>
                        {{ billet.class }}
                      </td>
                    </tr>
                  </table>
                  <br>
                  <table class="w-100">
                    <thead>
                    <tr class="text-muted">
                      <td>GATE</td>
                      <td>TIME</td>
                      <td>7C</td>
                      <td></td>
                    </tr>
                    </thead>
                    <tr class="text-dark font-weight-bold">
                      <td class="bg-white">{{ billet.gate }}</td>
                      <td class="bg-white">{{ billet.time.split(' ')[1] }}</td>
                      <td class="bg-white">{{ billet.seat }}</td>
                      <td>IIIIIIIIIIIIIIII</td>
                    </tr>
                  </table>
                  </p>
                </div>
                <div class="card-footer bg-custom border-custom"></div>
              </div>

              <div class="card mb-3 right-part  w-25">
                <div class="card-header bg-custom border-custom text-white">
                  <h5>Boarding Pass</h5>
                  First class
                </div>
                <div class="card-body ">
                  <div class="card-title">
                    <span class="text-muted">Passenger</span> <br>
                    <span class="text-dark text-uppercase">{{ billet.passenger }}</span></div>
                  <p class="card-text">
                  <table class="w-100">
                    <thead>
                    <tr class="text-muted">
                      <td>GATE</td>
                      <td>TIME</td>
                      <td>7C</td>
                    </tr>
                    </thead>
                    <tr class="text-dark font-weight-bold">
                      <td>{{ billet.gate }}</td>
                      <td>{{ billet.time.split(' ')[1] }}</td>
                      <td>{{ billet.seat }}</td>
                    </tr>
                  </table>
                  <div class="mt-3">
                  IIIIIIIIIIIIIIII
                  </div>
                  </p>
                </div>
                <div class="card-footer bg-custom border-custom"></div>
              </div>
            </div>

          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      billet: 'billet/getBilletToWatch'
    })
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

.card.left-part {
  border-right: none !important;
}
.card.right-part {
  border-left: 2px dashed gray !important;
}

.bg-custom {
  background-color: #6fa7e2 !important;
}
.border-custom {
  border-color: #6fa7e2 !important;
}
</style>
