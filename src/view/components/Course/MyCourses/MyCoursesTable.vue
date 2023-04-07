<template>
  <v-container fluid>
    <v-card>
      <v-card-text>
        <v-data-table
            :headers="table.headers"
            :items="table.contents">

          <template v-slot:item.row="{ item }">
            <div>{{ table.contents.indexOf(item) + 1 }}</div>
          </template>
          <template v-slot:item.getDate="{ item }">
            <div>{{ getPersianTime(item.time) }}</div>
          </template>

          
        </v-data-table>
      </v-card-text>
    </v-card>
  </v-container>

</template>

<script>
export default {
  name: "MyCoursesTable",
  async created() {
    const [err, data] = await this.to(this.http.get(`/profile/courses`));
    if (!err) {
      this.table.contents = data;
    }
  },
  data() {
    return {
      table: {
        headers: [
          {
            text: '#',
            value: 'row',
            align: 'center',
            sortable: false
          },
          {
            text: 'عنوان',
            value: 'title',
            align: 'center',
            sortable: false
          },
          {
            text: 'درصد پیشرفت',
            value: 'percent',
            align: 'center',
            sortable: false
          },
          {
            text: 'تاریخ دریافت دوره',
            value: 'getDate',
            align: 'center',
            sortable: false
          },
          {
            text: 'مدّت زمان',
            value: 'duration',
            align: 'center',
            sortable: false
          },
          {
            text: 'پشتیبانی',
            value: 'support',
            align: 'center',
            sortable: false
          },
          {
            text: 'نظر',
            value: 'comment',
            align: 'center',
            sortable: false
          },
          {
            text: 'عملیات',
            value: 'actions',
            align: 'center',
            sortable: false
          },

        ],
        contents: [],
      }
    }
  }
}
</script>

<style scoped>

</style>