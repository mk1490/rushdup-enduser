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
            @click:row="itemClick"
            :headers="table.headers"
            :items="table.contents">
          <template v-slot:item.row="{ item }">
            <div>{{ table.contents.indexOf(item) + 1 }}</div>
          </template>

          <template v-slot:item.status="{ item }">
            <v-chip
                class="white--text"
                :color="getChipsStatusColor(item)"> {{ getChipsStatusTitle(item) }}
            </v-chip>
          </template>
          <template v-slot:item.creationTime="{ item }">
            <span>
              {{ getPersianTime(item.creationTime) }}
            </span>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-btn
                :to="`/ticketDetails/${item.id}`"
                text
                link
                color="primary">
              جزئیات
            </v-btn>
          </template>

        </v-data-table>
      </v-card-text>
    </v-card>

  </v-container>
</template>

<script>
export default {
  name: "SupportTicket",
  async created() {
    const [err, data] = await this.to(this.http.get(`ticket/list`));
    if (!err) {
      this.table.contents = data;
    }
  },
  methods: {
    getChipsStatusTitle(item) {
      switch (item.status) {
        case 0:
          return 'در انتظار پاسخ پشتیبان';
      }
    },
    getChipsStatusColor(item) {
      switch (item.status) {
        case 0:
          return 'orange';
      }
    },
    async itemClick(item) {
      await this.$router.push('/course')
    }

  },
  data() {
    return {
      table: {
        headers: [
          {text: '#', value: 'row', sortable: false, align: 'center'},
          {text: 'موضوع', value: 'subject', sortable: true, align: 'center'},
          {text: 'وضعیت', value: 'status', sortable: true, align: 'center'},
          {text: 'تاریخ ثبت', value: 'creationTime', sortable: true, align: 'center'},
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