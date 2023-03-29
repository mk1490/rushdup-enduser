<template>
  <div class="d-inline-block" style="width: 100%">
    <v-simple-table>
      <template v-slot:default>
        <tbody>
        <tr>
          <td>{{ $t('cart.totalAmount') }} :</td>
          <td>{{ getComma(model['totalAmount']) }} <small>{{ $t('ui.IRR') }}</small></td>
        </tr>
        <tr>
          <td>{{ $t('cart.payableAmount') }} :</td>
          <td>{{ getComma(model['payableAmount']) }} <small>{{ $t('ui.IRR') }}</small></td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-btn
        @click="paymentPrepare()"
        block
        color="primary">
      {{ isLogin ? $t('cart.finalizePurchase') : $t('cart.continuePayment') }}
    </v-btn>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "SideTotalAmountAndPayButton",
  props: {
    model: Object,
    selectedIpg: Number,
  },
  computed: {
    ...mapGetters(['isLogin'])
  },
  methods: {
    async paymentPrepare() {
      if (this.isLogin) {
        const [err, data] = await this.to(this.http.post(`cart/initialize`, {
          ipgProvider: this.selectedIpg,
        }));
        if (!err) {
          window.location.href = data.url;
        }
      } else {
        await this.oidc.login();
      }

    }
  }
}
</script>

<style scoped>

</style>