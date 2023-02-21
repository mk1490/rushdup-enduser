<template>
  <div class="d-inline-block" style="width: 100%">
    <v-simple-table>
      <template v-slot:default>
        <tbody>
        <tr>
          <td>{{ $t('cart.totalAmount') }} :</td>
          <td>{{ model['totalAmount'] }} <small>{{ $t('IRR') }}</small></td>
        </tr>
        <tr>
          <td>{{ $t('cart.payableAmount') }} :</td>
          <td>{{ model['payableAmount'] }} <small>{{ $t('IRR') }}</small></td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-btn
        block
        color="primary">
      {{ $t('cart.finalizePurchase') }}
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "SideTotalAmountAndPayButton",
  props: {
    model: Object,
  }
}
</script>

<style scoped>

</style>