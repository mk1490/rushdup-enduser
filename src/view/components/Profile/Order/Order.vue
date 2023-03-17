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


        </v-data-table>
      </v-card-text>
    </v-card>

  </v-container>
</template>

<script>
export default {
  name: "Order",
  created() {
    
  },
  data() {
    return {
      table: {
        headers: [
          {text: '#', value: 'row', align: 'center', sortable: false},
          {text: 'مبلغ سفارش', value: 'price', align: 'center', sortable: false},
          {text: 'تاریخ', value: 'createDate', align: 'center', sortable: false},
          {text: 'وضعیت', value: 'status', align: 'center', sortable: false},
          {text: 'عملیات', value: 'actions', align: 'center', sortable: false},
        ],
        contents: [],
      }
    }
  }
}
</script>

<style scoped>

</style>