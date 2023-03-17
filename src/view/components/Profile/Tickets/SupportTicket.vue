<template>
  <v-container>
    <v-card>
      <v-card-title>
        <div class="col">
          تیکت پشتیبانی
        </div>
        <div class="col-auto">
          <v-btn
              color="primary"
              to="/registerNewTicket"
          >
            ثبت تیکت جدید
          </v-btn>
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
  name: "SupportTicket",
  data() {
    return {
      table: {
        headers: [
          {text: '#', value: 'row', sortable: false, align: 'center'},
          {text: 'موضوع', value: 'subject', sortable: true, align: 'center'},
          {text: 'وضعیت', value: 'status', sortable: true, align: 'center'},
          {text: 'تاریخ ثبت', value: 'createDate', sortable: true, align: 'center'},
          {text: 'عملیات', value: 'actions', sortable: false, align: 'center'},
        ],
        contents: [],
      }
    }
  },
}
</script>

<style scoped>

</style>