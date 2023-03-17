<template>
  <v-container fluid>
    <v-card>
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
  name: "MyLicenses",
  data() {
    return {
      table: {
        headers: [],
        contents: [],
      }
    }
  }
}
</script>

<style scoped>

</style>