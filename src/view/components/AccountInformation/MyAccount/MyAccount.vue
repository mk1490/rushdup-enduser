<template>
  <v-container fluid>
    <v-tabs
        v-model="selectedTab">
      <v-tab-item>
        {{ $t('myAccount.dashboard.title') }}
      </v-tab-item>
    </v-tabs>
  </v-container>
</template>

<script>
export default {
  name: "MyAccount",
  data() {
    return {
      selectedTab: 0,
    }
  }
}
</script>

<style scoped>

</style>