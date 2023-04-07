<template>
  <v-container>
    <div class="row">
      <div class="col-4">
        <v-card>
          <v-card-title>
            اعتبار کیف پول
          </v-card-title>
          <v-card-text>
            <v-container class="text-center">
              <div
                  class="wallet__credit">
                <strong>
                  شارژ کیف پول شما:
                </strong>
                <div class="d-block mt-3">
                  <span>
                  {{ getComma(walletAmount) + ' ' + $t('ui.IRR') }} 
                </span>
                </div>

              </div>
            </v-container>
          </v-card-text>
        </v-card>
      </div>
      <div class="col-8">
        <v-card>
          <v-card-text>
            <v-data-table
                :headers="table.headers"
                :items="table.contents">
              <template v-slot:item.row="{ item }">
                <div>{{ table.contents.indexOf(item) + 1 }}</div>
              </template>
              <template v-slot:item.value="{ item }">
                <div
                    class="d-inline-flex"
                    :style="{color : Math.sign(item.value) === -1 ? 'red': 'green'} ">
                  <span

                      dir="ltr">
                    {{
                      getComma(item.value)
                    }}
                  </span>
                  <span class="mr-2">
                    {{ $t('ui.IRR') }}
                  </span>
                </div>
              </template>
              <template v-slot:item.createDate="{ item }">
                <div>{{ getPersianTime(item.createDate) }}</div>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>

      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Wallet",
  async created() {
    const [err, data] = await this.to(this.http.get(`/profile/wallet`));
    if (!err) {
      this.walletAmount = data.total;
      this.table.contents = data.items;
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
  display: inline-block;
  justify-content: center;
  font-family: "IRAN Sans";
  font-size: 1.4rem !important;
}

.wallet__credit strong {
}
</style>