<template>
  <div>
    <v-radio-group v-model="selectedMethod">
      <v-card>
        <v-card-text>
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
  data() {
    return {
      selectedMethod: 1,
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
</style>