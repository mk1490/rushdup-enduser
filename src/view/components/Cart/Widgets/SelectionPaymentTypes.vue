<template>
  <div>
    <v-radio-group v-model="selectedMethod">
      <v-card>
        <v-card-text>
          <div class="row">
            <div class="col">
              <div class="d-flex align-center">
                <v-radio
                    :value="1">
                </v-radio>
                <div class="d-inline-block mr-3 text-right">
                  <label>
                    {{ $t('cart.ipgPaymentTitle') }}
                  </label>
                  <span class="d-block">
                {{ $t('cart.ipgPaymentDescription') }}
              </span>
                </div>
              </div>
            </div>
            <div class="col-auto">
              <div class="d-inline-flex">

                <v-tooltip
                    v-for="(item, index) in paymentIpgItems"
                    bottom color="success">
                  <template v-slot:activator="{ on, attrs }">
                    <v-card
                        class="mx-3"
                        width="70"
                        height="70"
                        v-bind="attrs"
                        v-on="on"
                        @click="selectIpg(item, index)"
                        :class="item === selectedPayment ? 'elevation-9' :''">
                      <div class="pa-2">
                        <v-img
                            :src="`${imageUrlProvider}${item.image}`">

                        </v-img>
                      </div>
                    </v-card>

                  </template>
                  <span>{{ item.title }}</span>
                </v-tooltip>


              </div>
            </div>
          </div>
        </v-card-text>
      </v-card>
      <v-card
          class="mt-4">

        <v-card-text>
          <div class="d-flex align-center">
            <v-radio :value="2"/>
            <div class="d-inline-block mr-3 text-right">
              <label>
                {{ $t('cart.bankReceiptTitle') }}
              </label>
              <span class="d-block">
                {{ $t('cart.bankReceiptDescription') }}
              </span>
            </div>
          </div>
        </v-card-text>

      </v-card>
    </v-radio-group>
  </div>
</template>

<script>
export default {
  name: "SelectionPaymentTypes",
  props: ['selectedPayment', 'paymentIpgItems'],
  created() {
    this.imageUrlProvider = this.serverAddress;
  },
  data() {
    return {
      imageUrlProvider: null,
      selectedMethod: 1,
    }
  },
  methods: {
    selectIpg(item, index) {
      this.selectedPayment = item;
      this.$emit('update:selectedPayment', item.provider);
    }
  }
}
</script>

<style scoped>
label {
  font-family: IranYekanRegular;
  font-size: 1rem;
}

span {
  font-family: "IRAN Sans";
  font-size: 1rem;
}

.selected {
  box-shadow: 10px 10px #ff0000;
}
</style>