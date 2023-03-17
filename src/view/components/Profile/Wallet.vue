<template>
  <v-container>
    <div class="row">
      <div class="col-4">
        <v-card>
          <v-card-title>
            اعتبار کیف پول
          </v-card-title>
          <v-card-text>
            <v-container>
              <div
                  class="wallet__credit">
                <strong>
                  شارژ کیف پول شما:
                </strong>
                {{ walletAmount }}
              </div>
            </v-container>
          </v-card-text>
        </v-card>
      </div>
      <div class="col-8">
        <v-data-table
            :headers="table.headers"
            :items="table.contents">

        </v-data-table>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Wallet",
  async created() {
    const [err, data] = await this.to(this.http.get(`profile/wallet`));
    if (!err) {
      this.walletAmount = data.walletAmount;
      this.walletHistoryItems = data.walletHistoryItems;
    }
  },
  data() {
    return {
      table: {
        headers: [
          {text: '#', value: 'row', align: 'center', sortable: false},
          {text: 'شرح', value: 'description', align: 'center', sortable: true},
          {text: 'مقدار واریز / برداشت', value: 'value', align: 'center', sortable: true},
          {text: 'تاریخ', value: 'createDate', align: 'center', sortable: true},
          {text: this.$t('ui.actions'), value: 'actions', align: 'center', sortable: false},
        ],
        contents: [],
      },
      walletAmount: 0,
      walletHistoryItems: [],
    }
  }
}
</script>

<style scoped>
.wallet__credit {
  display: flex;
  justify-content: center;
  font-family: "IRAN Sans";
  font-size : 1.4rem !important;
}

.wallet__credit strong {
}
</style>