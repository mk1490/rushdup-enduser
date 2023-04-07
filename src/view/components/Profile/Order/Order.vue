<template>
  <v-container>
    <v-card>
      <v-card-title>
        <div class="col">
          سفارشات / تراکنش‌ها
        </div>
      </v-card-title>
      <v-card-text>
        <v-data-table
            :headers="table.headers"
            :items="table.contents">
          <template v-slot:item.row="{ item }">
            <div>{{ table.contents.indexOf(item) + 1 }}</div>
          </template>

          <template v-slot:item.date="{ item }">
            <div>{{ getPersianTime(item.date) }}</div>
          </template>
          <template v-slot:item.amount="{ item }">
            <div v-if="item.amount === item.deducatedAmount">{{ `${getComma(item.amount)} ریال` }}</div>
            <div v-else class="d-inline-flex">
              <span style="text-decoration: line-through; color: red">
                {{ `${getComma(item.amount)} ریال` }}
              </span>
              <span>
                {{ `${getComma(item.deducatedAmount)} ریال` }}
              </span>
            </div>
          </template>
          <template v-slot:item.status="{ item }">
            <v-chip class="white--text" :color="getStatusColor(item.status)">
              {{ getStatusText(item.status) }}
            </v-chip>
          </template>
          <template v-slot:item.actions="{ item }">
            <div class="d-inline-flex pa-2">
              <v-tooltip
                  color="blue"
                  bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                      v-bind="attrs"
                      v-on="on"
                      :to="`/transaction/${item.id}`"
                      class="sqaure-btn ma-1"
                      color="blue">
                    <v-icon color="white">
                      mdi-eye
                    </v-icon>
                  </v-btn>
                </template>
                <span>
                  مشاهده جزئیات
                </span>
              </v-tooltip>
            </div>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>

  </v-container>
</template>

<script>
export default {
  name: "Order",
  async created() {
    const [err, data] = await this.to(this.http.get(`/profile/transactions`));
    if (!err) {
      this.table.contents = data;
    }
  },
  data() {
    return {
      table: {
        headers: [
          {text: '#', value: 'row', align: 'center', sortable: false},
          {text: 'مبلغ سفارش', value: 'amount', align: 'center', sortable: false},
          {text: 'تاریخ', value: 'date', align: 'center', sortable: false},
          {text: 'وضعیت', value: 'status', align: 'center', sortable: false},
          {text: 'عملیات', value: 'actions', align: 'center', sortable: false},
        ],
        contents: [],
      }
    }
  },
  methods: {
    getStatusText(status) {
      switch (status) {
        case -1:
          return 'در انتظار پرداخت';
        case 1:
          return 'پرداخت شده';
      }
    },
    getStatusColor(status) {
      switch (status) {
        case -1:
          return 'red';
        case 1:
          return 'green';
      }
    }
  }
}
</script>

<style scoped>

</style>