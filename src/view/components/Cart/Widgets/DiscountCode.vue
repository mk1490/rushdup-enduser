<template>
  <div class="d-inline-block" style="width: 100%">
    <div>
      <label>
        {{ $t('cart.hasDiscountCodeQuestion') }}
      </label>
    </div>
    <div class="d-inline-flex align-center mt-1" style="width: 100%!important;">
      <v-text-field
          outlined
          hide-details
          dense
          full-width
          @click="checkDiscountCode"
          :hint="$t('cart.inputYourDiscountCode')"
          v-model="discountCode">
      </v-text-field>
      <v-btn
          :loading="loading"
          class="mr-1"
          color="primary">
        {{ $t('ui.register') }}
      </v-btn>

      <v-alert
          v-if="discountCodeServerResult !== null"
          type="error">

      </v-alert>
    </div>
  </div>

</template>

<script>
export default {
  name: "DiscountCode",
  data() {
    return {
      loading: false,
      discountCode: null,
      discountCodeServerResult: null,
    }
  },
  methods: {
    async checkDiscountCode() {
      this.loading = true;
      const [err, data] = await this.to(this.http.get(``));
      this.loading = false;
      if (!err) {

      }
    }
  }
}
</script>

<style scoped>

</style>