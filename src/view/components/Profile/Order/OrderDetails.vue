<template>
  <v-container>
    <div class="row">
      <div class="col-4">
        <v-card>
          <v-card-title>
            سفارش شماره {{ orderId }}
          </v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item>
                <v-list-item-content>
                  <span>
                  {{ getPersianTime(time) }}
                  </span>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <div class="d-inline-flex">
                    <strong>مبلغ:</strong>
                    <span
                        v-if="amount == deducatedAmount"
                        class="mr-2">
                      {{ getPrice(amount) }}
                    </span>
                    <div
                        v-else
                        class="mr-2 d-inline-flex">
                      <span style="text-decoration: line-through; color:red">
                        {{ getPrice(amount) }}
                      </span>
                      <span class="mr-1">
                        {{ getPrice(deducatedAmount) }}
                      </span>
                    </div>
                  </div>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <div class="d-inline-flex">
                    <strong>وضعیت:</strong>
                    <span
                        :class="`mr-2 ${getStatusColor(status)}--text`">
                      {{ getStatusText(status) }}
                    </span>
                  </div>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <div class="d-inline-flex">
                    <strong>شماره پیگیری:</strong>
                    <span class="mr-2">
                      {{ !trackingCode ? '-' : trackingCode }}
                    </span>
                  </div>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </div>
      <div class="col">
        <v-card>
          <v-card-title>
            لیست دوره‌های این سفارش
          </v-card-title>
          <v-card-text>
            <v-data-table
                :headers="table.headers"
                :items="table.contents">
              <template v-slot:item.row="{ item }">
                <div>{{ table.contents.indexOf(item) + 1 }}</div>
              </template>
              <template v-slot:item.data="{ item }">
                <div>{{ item.title }}</div>
              </template>
              <template v-slot:item.teacher="{ item }">
                <div class="d-inline-flex align-center">
                  <v-avatar :size="50">
                    <v-img :src="serverAddress + item.teacher.image">
                    </v-img>
                  </v-avatar>
                  <span>
                    {{ item.teacher.title }}
                  </span>
                </div>
              </template>
              <template v-slot:item.amount="{ item }">
                <div>{{ getPrice(item.price) }}</div>
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
  name: "OrderDetails",
  async created() {
    const [err, data] = await this.to(this.http.get(`/profile/transaction/${this.$route.params.transactionId}`));
    if (!err) {
      this.orderId = data.orderId;
      this.time = data.time;
      this.status = data.status;
      this.trackingCode = data.trackingCode;
      this.paymentIpg = data.provider;
      this.amount = data.amount;
      this.deducatedAmount = data.deducatedAmount;
      this.table.contents = data.items;
    }
  },
  data() {
    return {
      orderId: null,
      time: null,
      amount: null,
      deducatedAmount: null,
      status: null,
      paymentIpg: null,
      trackingCode: null,
      table: {
        headers: [
          {text: '#', value: 'row', sortable: false, align: 'center'},
          {text: 'مشخصات دوره', value: 'data', sortable: false, align: 'center'},
          {text: 'مدرس', value: 'teacher', sortable: false, align: 'center'},
          {text: 'قیمت', value: 'amount', sortable: false, align: 'center'},
        ],
        contents: [],
      }
    }
  },
  methods: {
    getPrice(price) {
      if (price === 0) {
        return 'رایگان'
      } else {
        return this.getComma(price) + ' ' + this.$t('ui.IRR')
      }
    },
    getStatusText(status) {
      switch (status) {
        case -1:
          return 'در انتظار پرداخت';
      }
    },
    getStatusColor(status) {
      switch (status) {
        case -1 :
          return 'red';
      }

    }
  }
}
</script>

<style scoped>
strong {
  font-family: IranYekanRegular;
}

span {
  font-family: "IRAN Sans";
  font-size: 1.1rem;
}
</style>