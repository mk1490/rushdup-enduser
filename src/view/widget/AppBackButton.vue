<template>
    <v-tooltip
            color="green"
            bottom>
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                    :to="backRoute ? backRoute : './'"
                    @click="back()"
                    v-bind="attrs"
                    v-on="on"
                    icon>
                <v-icon>
                    mdi-chevron-right
                </v-icon>
            </v-btn>
        </template>
        <span>{{ $t('ui.back') }}</span>
    </v-tooltip>
</template>

<script>
export default {
    name: "AppBackButton",
    emits: ['onBackClick'],
    props: {
        backRoute: String
    },
    methods: {
        back() {
            // this.backRoute ? this.$router.push(this.backRoute) : this.$router.push('../')
        }
    }
}
</script>

<style scoped>

</style>